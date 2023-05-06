import sudSDKClient from "../store/sudSDK.js";

export default function handler(req, res) {
  const { uid } = req.query; // access the "uid" query parameter
  const json = sudSDKClient.getCode(uid, 0);
  res.status(200).json({
    ret_code: 0,
    ret_msg: "",
    sdk_error_code: 0,
    data: { code: json["code"], expire_date: json["expireDate"] },
  });
}
