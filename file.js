const fs = require("fs");

// write file sync
fs.writeFileSync("./create.txt", "Hey there");

// write file Async
fsj.writeFile("./create.txt", "Hey there", (err) => {});

// read file Sychronously
const result = fs.readFileSync("./contacts.txt", "utf-8");

console.log(result);

fs.readFile("./contacts.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("An error occured", err);
  } else {
    console.log(data);
  }
});
