import crypto from "crypto";
import { ZIMConfig } from "../config.js";
//Signature=md5(AppId + SignatureNonce + ServerSecret + Timestamp)
function GenerateUASignature(appId, signatureNonce, serverSecret, timeStamp) {
  const hash = crypto.createHash("md5"); //规定使用哈希算法中的MD5算法
  var str = appId + signatureNonce + serverSecret + timeStamp;
  hash.update(str);
  //hash.digest('hex')表示输出的格式为16进制
  return hash.digest("hex");
}
export async function sendZimMsg(uidList, msgStr, msgType, roomID) {
  const signatureNonce = crypto.randomBytes(8).toString("hex");
  const appId = ZIMConfig.appId;
  const serverSecret = ZIMConfig.serverSecret;
  const timeStamp = Math.round(Date.now() / 1000);
  const signature = GenerateUASignature(
    appId,
    signatureNonce,
    serverSecret,
    timeStamp
  );
  let body = {
    FromUserId: "server",
    MessageType: 2,
    Priority: 3,
    MessageBody: {
      Message: msgStr,
    },
  };
  if (msgType === "SendPeerMessage") {
    body.ToUserId = uidList;
  } else if (msgType === "SendRoomMessage") {
    body.RoomId = roomID;
  }
  const query = `AppId=${appId}&Signature=${signature}&SignatureNonce=${signatureNonce}&SignatureVersion=2.0&Timestamp=${timeStamp}`;
  const result = await fetch(
    `https://zim-api.zego.im/?Action=${msgType}&${query}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(body),
    }
  ).then((res) => res.json());
  console.log(result);
  return result;
}
