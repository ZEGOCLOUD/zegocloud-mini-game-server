import { NewSudMGPAuth } from "@sudtechnology/sud-mgp-auth-node";
import { SudSDKConfig } from "../config.js";
const sudSDKClient = NewSudMGPAuth(SudSDKConfig.appid, SudSDKConfig.appSecret);
export default sudSDKClient;
