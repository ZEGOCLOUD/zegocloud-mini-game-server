import User from "../model/user.js";
class Store {
  userList = new Map();
  gameMatchList = {
    "1468180338417074177": [],
    "1472142559912517633": [],
    "1582551621189419010": [],
  };
  static getInstance() {
    if (!this.instance) {
      this.instance = new Store();
    }
    return this.instance;
  }
  login(uid) {
    if (this.userList.has(uid)) {
      this.updateUserAttr(uid, "is_login", true);
    } else {
      this.userList.set(uid, new User(uid));
    }
  }
  isUserLoggedIn(uid) {
    const user = this.userList.get(uid);
    return user && user.is_login;
  }
  getUserInfo(uid) {
    if (this.userList.has(uid)) {
      return this.userList.get(uid);
    } else {
      this.login(uid);
    }
    return this.userList.get(uid);
  }
  updateUserAttr(uid, attr, value) {
    const user = this.userList.get(uid);
    if (!user) return;
    user[attr] = value;
  }
  matchPlayer(uid, gm_id, timeout) {
    if (!this.gameMatchList[gm_id]) {
      this.gameMatchList[gm_id] = [];
    }
    const now = Date.now();
    const list = (this.gameMatchList[gm_id] = this.gameMatchList[gm_id].filter(
      (u) => u.timeStamp > now
    ));
    const self = list.findIndex((u) => u.uid === uid);
    if (self >= 0) {
      list.splice(self, 1);
    }
    list.push({
      uid,
      timeStamp: now + timeout * 1000,
    });
    if (list.length >= 2) {
      return list.splice(0, 2).map((u) => u.uid);
    }
    return [];
  }
  stopMatch(uid, gm_id) {
    if (!this.gameMatchList[gm_id]) return true;
    const list = this.gameMatchList[gm_id];
    const self = list.findIndex((u) => u.uid === uid);
    if (self >= 0) {
      list.splice(self, 1);
    }
    return true;
  }
}
export default Store;
