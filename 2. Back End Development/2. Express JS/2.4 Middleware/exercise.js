// Aim : Complete the Band Name Generator project,
// index.html file is provided and it'll show the output on submitting the form.

import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

var bandName = "";

// We have to write "bodyParser" before "bandNameGenerator", as bandNameGenrator using req.body
// And if we use req.body before bodyParser then it'll show undefined as bodyParser will create it.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

// Or we can also use this if we don't want to use custom middleware.
/* app.post("/submit", (req, res) => {
  bandName = req.body["street"] + req.body["pet"];
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
}); 
*/

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
