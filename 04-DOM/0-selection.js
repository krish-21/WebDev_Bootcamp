
// Old Way

const bannerImage_Old = document.getElementById("banner");

console.dir(bannerImage_Old);

const allImages = document.getElementsByTagName("img");

for(let img of allImages) {
    console.log(img.src);
    // img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}

const squareImages_Old = document.getElementsByClassName("square");

for(let img of squareImages_Old) {
    console.log(img)
    // img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}


console.log("\n");
console.log("\n");
console.log("New Way:");
console.log("\n");

//  New Way

const para = document.querySelector("p");
console.log(para);

const bannerImage = document.querySelector("#banner");
console.log(bannerImage)

const squareImage = document.querySelector(".square");
console.log(squareImage)

const secondImage = document.querySelector("img:nth-of-type(2");
console.log(secondImage);

const javaLink = document.querySelector("a[title='Java']");
console.log(javaLink);


console.log("\n");
console.log("\n");


const paras = document.querySelectorAll("p");
console.log(paras);

const images = document.querySelectorAll("img");
console.log(images);

const allLinks = document.querySelectorAll("a");
console.log(allLinks);

const paraNestedLinks = document.querySelectorAll("p a");
console.log(paraNestedLinks);
