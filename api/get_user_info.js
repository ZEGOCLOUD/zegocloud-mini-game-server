import sudSDKClient from "../store/sudSDK.js";
import store from "../store/index.js";
export default function handler(req, res) {
  const { ss_token } = req.body; // access the "uid" query parameter
  const json = sudSDKClient.getUidBySSToken(ss_token);
  if (json.isSuccess) {
    const uid = json["uid"];
    const { nick_name, avatar, gender, is_ai } = store
      .getInstance()
      .getUserInfo(uid);
    res.status(200).json({
      ret_code: 0,
      ret_msg: "",
      sdk_error_code: 0,
      data: {
        uid,
        nick_name,
        avatar_url: avatar,
        gender,
        is_ai,
      },
    });
  } else {
    res.status(200).json({
      ret_code: 1,
      ret_msg: "",
      sdk_error_code: json.errorCode,
      data: {},
    });
  }
}
