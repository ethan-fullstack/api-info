const express = require("express");
const app = express();
const port = 9001;

const today = new Date();
const msg = "update and deploy: ok!!";

app.get("/", (req, res) => {
  res.json({ data: today, status: "ok", msg: msg });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
