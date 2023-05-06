import store from "../store/index.js";

export default async function handler(req, res) {
  const { uid, gm_id } = req.query;
  store.getInstance().stopMatch(uid, gm_id);
  res.status(200).json({
    ret_code: 0,
    ret_msg: "",
    sdk_error_code: 0,
    data: {},
  });
}
