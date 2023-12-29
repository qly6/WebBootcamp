const fs = require("fs");

fs.readFile("./message.txt", (error, data) => {
    console.log(data.toString());
});