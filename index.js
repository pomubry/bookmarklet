const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening to port ${port}`));

app.get("/", (req, res) => {
  console.log("elos");
  res.sendFile(__dirname + "/index.html");
});

app.get("/bookmarklet", (req, res) => {
  res.sendFile(__dirname + "/bookmarklet.js");
});
