const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
dotenv.config();
const app = express();
app.use(cors())
// app.use(cors({
//     origin: 'https://social-media-fullstack.netlify.app/'
// }));
const PORT = process.env.PORT || 5000;


app.get("/", (req, res) => {
  res.send({name:"rajeev"});
});

app.listen(PORT, (error) => {
  if (!error) console.log("App is listening on port " + PORT);
  else console.log("Error occurred, server can't start", error);
});
