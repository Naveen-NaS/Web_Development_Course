const fs = require("fs");

// This will create a file (If not existing), and add data to file.
/* This Method takes three arguments:
   1). File name
   2). Data to be entered
   3). CallBack function for error management.
*/

// Syntax : fs.writeFile(file, data[, options], callback)
fs.writeFile("message.txt", "Hello From Node JS!", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

// Reading File
fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
