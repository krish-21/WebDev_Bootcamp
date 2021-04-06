const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

// use cl arguments to get input string
const input = process.argv[2];

// use franc to get ISO3 code
const detectedLang = franc(input);

// console.log(detectedLang);

// if language is not undetermined, print error & exit
if (detectedLang === "und") {
    console.log("Sorry, language could not be detected".red);
    process.exit();
}

// find out language from ISO3 code
const langsObject = langs.where("3", detectedLang);

if (langsObject === undefined) {
    console.log(`Sorry, ISO3 code of ${detectedLang.bold} could not be identified`.red);
    process.exit();
}

// print the name of the language
console.log(`The best guess is: ${langsObject.name.green}`);

