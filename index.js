const express = require("express");
const { readFile } = require("fs");
const moment = require("moment");
const app = express();
const port = 9777;

const today = new Date();
const msg = "update and deploy: ok!! final";

const path = require("path");
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.json({
    data: today,
    status: "ok",
    msg: msg,
    moment: moment().format("LLLL"),
  });
});

app.get("/home", (req, res) => {
  console.log(__dirname);
  readFile("./home.html", "utf-8", (err, html) => {
    if (err) {
      res.send("Service currenty unavailable");
    }
    res.send(html);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
