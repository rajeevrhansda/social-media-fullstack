const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is Running");
});

app.listen(PORT, (error) => {
  if (!error) console.log("App is listening on port " + PORT);
  else console.log("Error occurred, server can't start", error);
});
