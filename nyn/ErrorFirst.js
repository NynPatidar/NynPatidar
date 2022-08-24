const fs = require("fs");

const file = "example.txt";

const ErrorFirstCallback = (err, data) => {
if (err) {
	return console.log(err);
}
console.log("Function successfully executed");
};

fs.readFile(file, ErrorFirstCallback);
