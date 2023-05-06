import store from "../store/index.js";
export default function handler(req, res) {
  const { uid } = req.query;
  if (!uid) {
    res.status(200).json({
      ret_code: 1,
      ret_msg: "uid is a required parameter",
      sdk_error_code: 0,
      data: {},
    });
    return;
  }
  store.getInstance().login(uid);
  const user = store.getInstance().getUserInfo(uid);
  res.status(200).json({
    ret_code: 0,
    ret_msg: "",
    sdk_error_code: 0,
    data: {
      user,
    },
  });
}
