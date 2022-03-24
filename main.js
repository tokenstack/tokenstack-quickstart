// TOKENSTACK_API_KEY=
// TOKENSTACK_PROJECT_ID=
// PRIVATE_KEY=
// PUBLIC_KEY=
import { Tokenstack } from "Tokenstack";
import dotenv from "dotenv";
dotenv.config()
import * as fs from "fs";

const fileData = fs.readFileSync("./image.jpg", "base64");
const tokenstack = await new Tokenstack(process.env.TOKENSTACK_API_KEY, process.env.TOKENSTACK_PROJECT_ID);
const nft = await tokenstack.nft.mintNFT(fileData, process.env.PRIVATE_KEY, process.env.PUBLIC_KEY);

console.log(nft);