import dotenv from "dotenv";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import { loadKeypairFromFile, loadOrGenerateKeypair } from "./helpers";
import { PublicKey } from "@metaplex-foundation/js";

dotenv.config();

export const payer = process.env?.LOCAL_PAYER_JSON_ABSPATH
  ? loadKeypairFromFile(process.env?.LOCAL_PAYER_JSON_ABSPATH)
  : loadOrGenerateKeypair("payer");

export const testWallet = loadOrGenerateKeypair("testWallet");

export const CLUSTER_URL = process.env.RPC_URL ?? clusterApiUrl("devnet");

export const connection = new Connection(CLUSTER_URL, "single");

