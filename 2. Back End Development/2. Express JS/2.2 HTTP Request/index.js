// First start server using nodemon and file name

import express from "express";
const app = express();
const port = 3000;

// This get method return all the responses on home page
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

// This will get to different page instead of home page if we use this url "hhtp://localhost:3000/about"
app.get("/about", (req, res) => {
  res.send(
    "<h1>About Us</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
  );
});

// This will get to different page instead of home page if we use this url "hhtp://localhost:3000/contact"
app.get("/contact", (req, res) => {
  res.send("<h1>Contact No. : 87XXXXXX34</h1>");
});

app.listen(port, () => {
  console.log(`Server has started on port ${port}.`);
});

// Remember use "nodemon" instead of node as it automatically restart the server if any changes in the file happen
// command : npm install -g nodemon
