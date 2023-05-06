import store from "../store/index.js";
import { sendZimMsg } from "./utils.js";
export default async function handler(req, res) {
  const { uid, gm_id, timeout = 60 } = req.query;
  const list = store.getInstance().matchPlayer(uid, gm_id, timeout);
  console.log(list);
  if (list.length) {
    // match success
    const roomID = Date.now();
    await sendZimMsg(
      list,
      JSON.stringify({ roomID, gm_id }),
      "SendPeerMessage"
    );
    res.status(200).json({
      ret_code: 0,
      ret_msg: "success",
      sdk_error_code: 0,
      data: {},
    });
  } else {
    res.status(200).json({
      ret_code: 0,
      ret_msg: "matching",
      sdk_error_code: 0,
      data: {},
    });
  }
}
