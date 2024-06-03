import express from "express";

const app = express();
const port = 3000;

// Defining a middleware function named 'logger' with three parameters: req, res, and next.
function logger(req, res, next) {
  // Log the HTTP request method (e.g., GET, POST) to the console.
  console.log("Request Method: ", req.method);
  // Log the URL path of the incoming request to the console.
  console.log("Request URL: ", req.url);
  // Call the 'next' function to pass control to the next middleware in the stack.
  // if we not use "next()" method then page don't load because it can't be able to access get method
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
