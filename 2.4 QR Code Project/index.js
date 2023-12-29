import inquerer from "inquirer";
import qr_image from "qr-image";
import fs from "fs";

const ans = await inquerer.prompt([{ name: "message", message: "input something" }]);

// to qr
const qr = qr_image.image(`${ans.message}`);
qr.pipe(fs.createWriteStream(`${ans.message}.png`));

//to file
fs.writeFile(`${ans.message}.txt`, `${ans.message}`, error => {
    if (error) {
        console.log("🚀 ~ file: index.js:14 ~ error:", error);
    }
});