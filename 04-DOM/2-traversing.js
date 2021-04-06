//
//  Selecting
//

const firstBold = document.querySelector("b");
console.log(firstBold.parentElement);
console.log(firstBold.parentElement.parentElement);
console.log(firstBold.parentElement.parentElement.parentElement);
console.log("\n");
console.log("\n");


const paragraph = firstBold.parentElement;
console.log(paragraph.childElementCount);
console.log(paragraph.children);
console.log("\n");
console.log("\n");


const firstSquareImage = document.querySelector(".square")
//return nodes (text, whitespace, return, newline).
console.log(firstSquareImage.previousSibling);
console.log(firstSquareImage.nextSibling);
console.log("\n");
// return elements
console.log(firstSquareImage.previousElementSibling);
console.log(firstSquareImage.nextElementSibling);
console.log("\n");
console.log("\n");


//
//  Creating & Appending
//

const newImg = document.createElement("img");
newImg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg";
document.body.appendChild(newImg);
newImg.classList.add("square");


const newH3 = document.createElement("h3");
newH3.innerText = "I am new h3!";
// insert at end
document.body.appendChild(newH3);


// insert at end
paragraph.append("I am new text... Yaaaaaay!!!");
paragraph.append("I am more more new text... I am more more more new text... Yaaaaaay!!!");

const newB = document.createElement("b");

newB.append("Hi!");
// insert in the begining
paragraph.prepend(newB);



//
//  Inserting  
//

const newH2 = document.createElement("h2");
newH2.append("Are adorable chickens");

const h1 = document.querySelector("h1");
h1.insertAdjacentElement("afterend", newH2);

const anotherH3 = document.createElement("h3");
anotherH3.innerText = "I am another new h3";
newH2.before(anotherH3);

const anotherAnotherH3 = document.createElement("h3");
anotherAnotherH3.innerText = "I am another another new h3";
newH2.after(anotherAnotherH3);


let buttons = [];

for(let i = 0; i < 100; i++) {
    let temp = document.createElement("button");
    temp.innerText = `Button ${i}`;
    buttons.push(temp);
}


//
//  Removing
//

// 
const firstLi = document.querySelector("li");
const ul = firstLi.parentElement;
ul.removeChild(firstLi);

// another method
// const b = document.querySelector("b");
// b.parentElement.removeChild(b);

// easier
const img = document.querySelector("img");
img.remove()