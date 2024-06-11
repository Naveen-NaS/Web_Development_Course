// Aim :- Make the website working, the task is to show secrets.html when user enters correct password.
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

var password = "";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("common"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  password = req.body["password"];
  if (password === "ILoveProgramming") {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/wrong.html");
  }
  res.send(`<h1>Oops!</h1><h2>You have entered wrong password</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
