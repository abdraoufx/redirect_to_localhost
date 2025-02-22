import express from "express";

const app = express();

app.get("/redirect", (req, res, next) => {
  res.redirect(303, encodeURIComponent("http://127.0.0.1"));
});

app.listen(4000, () => {
  console.log("listenning on port 4000");
});
