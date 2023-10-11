import fs from "fs";
import path from "path";
import {
  Connection,
  Keypair,
  PublicKey,
  TransactionInstruction,
  TransactionMessage,
  VersionedTransaction,
} from "@solana/web3.js";
import { connection } from "./vars";

const DEFAULT_KEY_DIR_NAME = ".local_keys";
const DEFAULT_PUBLIC_KEY_FILE = "keys.json";


export function loadPublicKeysFromFile(
  absPath: string = `${DEFAULT_KEY_DIR_NAME}/${DEFAULT_PUBLIC_KEY_FILE}`
) {
  try {
    if (!absPath) throw Error("No path provided");
    if (!fs.existsSync(absPath)) throw Error("File does not exist.");
    const data =
      JSON.parse(fs.readFileSync(absPath, { encoding: "utf-8" })) || {};
    for (const [key, value] of Object.entries(data)) {
      data[key] = new PublicKey(value as string) ?? "";
    }
    return data;
  } catch (err) {
  }
  return {};
}



export function savePublicKeyToFile(
  name: string,
  publicKey: PublicKey,
  absPath: string = `${DEFAULT_KEY_DIR_NAME}/${DEFAULT_PUBLIC_KEY_FILE}`
) {
  try {
    let data: any = loadPublicKeysFromFile(absPath);
    for (const [key, value] of Object.entries(data)) {
      data[key as any] = (value as PublicKey).toBase58();
    }
    data = { ...data, [name]: publicKey.toBase58() };

    fs.writeFileSync(absPath, JSON.stringify(data), {
      encoding: "utf-8",
    });

    data = loadPublicKeysFromFile(absPath);

    return data;
  } catch (err) {
    console.warn("Unable to save to file");
  }
  return {};
}

export function loadKeypairFromFile(absPath: string) {
  try {
    if (!absPath) throw Error("No path provided");
    if (!fs.existsSync(absPath)) throw Error("File does not exist.");

    const keyfileBytes = JSON.parse(
      fs.readFileSync(absPath, { encoding: "utf-8" })
    );
    const keypair = Keypair.fromSecretKey(new Uint8Array(keyfileBytes));
    return keypair;
  } catch (err) {
    throw err;
  }
}

export function saveKeypairToFile(
  keypair: Keypair,
  fileName: string,
  dirName: string = DEFAULT_KEY_DIR_NAME
) {
  fileName = path.join(dirName, `${fileName}.json`);
  if (!fs.existsSync(`./${dirName}/`)) fs.mkdirSync(`./${dirName}/`);
  if (fs.existsSync(fileName)) fs.unlinkSync(fileName);
  fs.writeFileSync(fileName, `[${keypair.secretKey.toString()}]`, {
    encoding: "utf-8",
  });
  return fileName;
}

export function loadOrGenerateKeypair(
  fileName: string,
  dirName: string = DEFAULT_KEY_DIR_NAME
) {
  try {
    const searchPath = path.join(dirName, `${fileName}.json`);
    let keypair = Keypair.generate();
    if (fs.existsSync(searchPath)) keypair = loadKeypairFromFile(searchPath);
    else saveKeypairToFile(keypair, fileName, dirName);
    return keypair;
  } catch (err) {
    console.error("loadOrGenerateKeypair:", err);
    throw err;
  }
}

export function explorerURL({
  address,
  txSignature,
  cluster,
}: {
  address?: string;
  txSignature?: string;
  cluster?: "devnet" | "testnet" | "mainnet" | "mainnet-beta";
}) {
  let baseUrl: string;
  if (address) baseUrl = `https://explorer.solana.com/address/${address}`;
  else if (txSignature)
    baseUrl = `https://explorer.solana.com/tx/${txSignature}`;
  else return "[unknown]";

  const url = new URL(baseUrl);
  url.searchParams.append("cluster", cluster || "devnet");
  return url.toString() + "\n";
}


export async function extractSignatureFromFailedTransaction(
  connection: Connection,
  err: any,
  fetchLogs?: boolean
) {
  if (err?.signature) return err.signature;
  const failedSig = new RegExp(
    /^((.*)?Error: )?(Transaction|Signature) ([A-Z0-9]{32,}) /gim
  ).exec(err?.message?.toString())?.[4];
  if (failedSig) {
    if (fetchLogs)
      await connection
        .getTransaction(failedSig, {
          maxSupportedTransactionVersion: 0,
        })
        .then((tx) => {
          console.log(`\n==== Transaction logs for ${failedSig} ====`);
          console.log(explorerURL({ txSignature: failedSig }), "");
          console.log(
            tx?.meta?.logMessages ?? "No log messages provided by RPC"
          );
          console.log(`==== END LOGS ====\n`);
        });
    else {
      console.log("\n========================================");
      console.log(explorerURL({ txSignature: failedSig }));
      console.log("========================================\n");
    }
  }
  return failedSig;
}


export async function buildTransaction({
  connection,
  payer,
  signers,
  instructions,
}: {
  connection: Connection;
  payer: PublicKey;
  signers: Keypair[];
  instructions: TransactionInstruction[];
}): Promise<VersionedTransaction> {
  let blockhash = await connection
    .getLatestBlockhash()
    .then((res) => res.blockhash);

  const messageV0 = new TransactionMessage({
    payerKey: payer,
    recentBlockhash: blockhash,
    instructions,
  }).compileToV0Message();

  const tx = new VersionedTransaction(messageV0);
  signers.forEach((s) => tx.sign([s]));
  return tx;
}

export const sendTransaction=async(tx)=>{
  try {
    const sig = await connection.sendTransaction(tx);
    console.log("Transaction completed.");
    console.log(explorerURL({ txSignature: sig }));

  } catch (err) {
    console.error("Failed to send transaction:");
    const failedSig = await extractSignatureFromFailedTransaction(
      connection,
      err
    );
    if (failedSig)
      console.log("Failed signature:", explorerURL({ txSignature: failedSig }));
    throw err;
  }
}
