import sudSDKClient from "../store/sudSDK.js";

export default function handler(req, res) {
  const { code } = req.body; // access the "uid" query parameter

  const json = sudSDKClient.getUidByCode(code);
  if (json.isSuccess) {
    const uid = json["uid"];
    const tokenJson = sudSDKClient.getSSToken(uid, 0);
    res.status(200).json({
      ret_code: 0,
      ret_msg: "",
      sdk_error_code: 0,
      data: {
        ss_token: tokenJson["token"],
        expire_date: tokenJson["expireDate"],
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
