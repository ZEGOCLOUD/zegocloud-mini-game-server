import express from "express";
const router = express.Router();
import Store from "../store/index.js";
import errorCode from "../constant/errorCode.js";

// api
import login from "./login.js";
import coinsConsumption from "./coins_consumption.js";
import getCode from "./get_code.js";
import getSstoken from "./get_sstoken.js";
import updateSstoken from "./update_sstoken.js";
import getUserInfo from "./get_user_info.js";
import reportGameInfo from "./report_game_info_url.js";
import playerMatch from "./player_match.js";
import stopMatch from "./stop_match.js";
// middleware： check user is login
function checkLogin(req, res, next) {
  const { uid } = req.query;
  if (!Store.getInstance().isUserLoggedIn(uid)) {
    // res.status(200).json({
    //   ret_code: errorCode.NotLogin.code,
    //   ret_msg: errorCode.NotLogin.msg,
    //   sdk_error_code: 0,
    //   data: {},
    // });
    Store.getInstance().login(uid);
    //   } else {
    //     next();
  }
  next();
}

router.get("/login", login);
router.get("/coins_consumption", checkLogin, coinsConsumption);
router.get("/get_code", checkLogin, getCode);
router.get("/player_match", checkLogin, playerMatch);
router.get("/stop_match", stopMatch);

router.post("/get_sstoken", getSstoken);
router.post("/update_sstoken", updateSstoken);
router.post("/get_user_info", getUserInfo);
router.post("/report_game_info", reportGameInfo);

export default router;
