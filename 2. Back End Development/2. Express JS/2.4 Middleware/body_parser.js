import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

// This _dirname will automatically get the complete address of html file from our pc.
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

// This will run our index.html file on port 3000
app.get("/", (req, res) => {
  // The sendFile() method requires full path of file, that's why we use __dirname + "/public/index.html"
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

// bodyParser.urlencoded bodyParser.urlencoded is a method provided by the body-parser middleware.
// This method parses incoming requests with URL-encoded payloads and is based on qs library when extended: true.
app.use(bodyParser.urlencoded({ extended: true }));

// Using postman post some values in it.
// and make sure in postman inside "body", this thing "x-www-form-urlencoded" is enabeled.
app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
