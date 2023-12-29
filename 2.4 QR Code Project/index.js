import inquerer from "inquirer";
import qr_image from "qr-image";
import fs from "fs";

inquerer
    .prompt([{
        message: "Input something ...",
        name: "messsage"
    }])
    .then((ans) => {
        const qr = qr_image.image(ans.messsage);
        qr.pipe(fs.createWriteStream("a.png"));
    }).catch(err => {
        console.log("🚀 ~ file: index.js:19 ~ .then ~ catch:", err);
    });

