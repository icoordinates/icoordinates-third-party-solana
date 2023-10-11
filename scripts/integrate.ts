import { payer } from "../lib/vars";
import 'dotenv/config'
import { IcoordinatesThirdPartySolana } from "../target/types/icoordinates_third_party_solana";
import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
(async () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const program = anchor.workspace.IcoordinatesThirdPartySolana as Program<IcoordinatesThirdPartySolana>;
  await program.methods
    .integrateThirdParty()
    .accounts({
      signer: payer.publicKey,
      coordinates:new PublicKey('8mVdDRq9ZGnHCQBpsENSYfCYBRRqaLKB45YRbTQbnbVx')
    })
    .rpc();
})();
