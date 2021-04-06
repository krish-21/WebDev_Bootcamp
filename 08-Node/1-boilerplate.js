const fs = require('fs');
// console.log(fs);
const folderName = process.argv[2] || "Project";

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`)
    fs.writeFileSync(`${folderName}/styles.css`)
    fs.writeFileSync(`${folderName}/app.js`)
} catch (err) {
    console.log("Error: ", err);
}
