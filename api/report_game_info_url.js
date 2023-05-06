import store from "../store/index.js";
import { sendZimMsg } from "./utils.js";
export default async function handler(req, res) {
  const { report_type, report_msg } = req.body;
  if (report_type === "game_start") {
    // game_start
  } else {
    // game_settle
    const { results, room_id } = report_msg;
    results.forEach((user) => {
      if (user.uid) {
        const info = store.getInstance().getUserInfo(user.uid);
        store
          .getInstance()
          .updateUserAttr(user.uid, "coins", info.coins + user.score);
      }
    });
    await sendZimMsg(
      results.map((r) => r.uid),
      JSON.stringify(report_msg),
      "SendRoomMessage",
      room_id
    );
  }
  res.status(200).json({ ret_code: 0, ret_msg: "" });
}
