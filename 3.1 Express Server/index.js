import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("🚀 ~ file: index.js:6 ~ app.get ~ req:", req.ip)
  res.send("<h1>HI</h1>");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});