const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("ok");
});
app.listen(3003, () => console.log("Example app listening on port 3003!"));
