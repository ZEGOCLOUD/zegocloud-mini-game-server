import express from "express";
import router from "../api/index.js";
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use("/api", router);
const server = app.listen(3000, function () {
  console.log("Listening on port %d", server.address().port);
});
