import store from "../store/index.js";
import errorCode from "../constant/errorCode.js";
export default function handler(req, res) {
  const { uid, coins = 0 } = req.query;
  const user = store.getInstance().getUserInfo(uid);
  if (coins > user.coins) {
    res.status(200).json({
      ret_code: errorCode.CoinsLess.code,
      ret_msg: errorCode.CoinsLess.msg,
      sdk_error_code: 0,
      data: {},
    });
  } else {
    user.coins = user.coins - coins;
  }
  res.status(200).json({
    ret_code: 0,
    ret_msg: "",
    sdk_error_code: 0,
    data: {},
  });
}
