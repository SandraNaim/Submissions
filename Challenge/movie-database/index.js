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
app.get(`/hello/:ID?`, (req, res) => {
  var userID = req.params.ID;
  res.send({ status: 200, message: "Hello ", userID });
});
app.get(`/search?:s?`, (req, res) => {
  var userSearch = req.query.s;
  if (userSearch) {
    res.send({ status: 200, message: "ok", data: userSearch });
  } else {
    res.send({
      status: 500,
      error: true,
      message: "you have to provide a search"
    });
  }
});

app.get("/movies/create", (req, res) => {
  res.send({ status: 200, message: "create" });
});
app.get("/movies/delete", (req, res) => {
  res.send({ status: 200, message: "delete" });
});
app.get("/movies/read", (req, res) => {
  res.send({ status: 200, message: movies });
});
app.get("/movies/update", (req, res) => {
  res.send({ status: 200, message: "update" });
});

app.get("/movies/read/by-date", (req, res) => {
  res.send({ status: 200, message: sortedMov });
});
app.get("/movies/read/by-rating", (req, res) => {
  res.send({ status: 200, message: sortedRat });
});
app.get("/movies/read/by-title", (req, res) => {
  res.send({ status: 200, message: sortedTit });
});

const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 }
];

const sortedMov = movies.slice().sort((a, b) => a.year - b.year);
const sortedRat = movies.slice().sort((a, b) => b.rating - a.rating);
const sortedTit = movies.slice().sort(function(a, b) {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
});

app.listen(3003, () => console.log("Example app listening on port 3003!"));
