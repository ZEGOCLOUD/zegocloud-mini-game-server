export default class User {
  constructor(uid) {
    this.uid = uid;
    this.nick_name = "user_" + uid;
    this.gender = Math.random() > 0.5 ? "male" : "female";
    this.avatar = `https://api.multiavatar.com/${this.uid}.png?apikey=GFPxsS8iJhQy2X`;
    this.is_login = true;
    this.coins = 10000;
    this.is_ai = 0;
  }
}
