const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("ok");
});
app.get("/test", (req, res) => {
  res.send({ status: 200, message: "ok" });
});
app.get("/time", (req, res) => {
  var d = new Date();
  var t1 = d.getHours();
  var t2 = d.getMinutes();
  res.send({ status: 200, message: `${t1}:${t2}` });
});

app.listen(3003, () => console.log("Example app listening on port 3003!"));
