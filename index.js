const express = require("express");
const moment = require("moment");
const app = express();
const port = 9001;

const today = new Date();
const msg = "update and deploy: ok!! final";

app.get("/", (req, res) => {
  res.json({ data: today, status: "ok", msg: msg, moment: moment });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
