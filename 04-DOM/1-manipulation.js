const h1 = document.querySelector("h1");
console.dir(h1);

const firstPara = document.querySelector("p");

// gets all the text as a bunch
// only human readable
// takes CSS into account
    // trigers a reflow for up-to-date styles       // some extra BS in IE 11 & below
console.log(firstPara.innerText);
// firstPara.innerText = "blah blah blah";

// returns it as is from the markup
// gets all the content
// returns every element
console.log(firstPara.textContent);


const allLinks_1 = document.querySelectorAll("a");

for(let link of allLinks_1) {
   link.innerText = "I AM A LINK!" 
}


// h1.innerText= "<i>asdfg</i>";
h1.innerHTML = "<i>asdfg</i>";

document.querySelector("span").innerText = "Disgusting";

console.log("\n");
console.log("\n");
console.log("\n");



//
//  Attributes
//


                                        // computed value from the JS object
console.log(document.querySelector("a").href);

                                        // actual value from the HTML element
console.log(document.querySelector("a").getAttribute("href"));


const input = document.querySelector("input[type='text']");

input.type = "password";


console.log("\n");
console.log("\n");
console.log("\n");


//
//  Style Properties
//



// styles from .css file will not show up
// inline styles will
console.log(h1.style);

// adds inline styles
// not best practice
h1.style.color = "olive";
h1.style.fontSize = "3em";
h1.style.border = "2px solid black";


// not best practice
for (let link of allLinks_1) {
    link.style.color = "rgb(0, 108, 134)";
    link.style.textDecorationColor = "magenta";
    link.style.textDecorationStyle = "wavy";
}

// gets computed style
// returns every single style
// returns strings
console.log(window.getComputedStyle(h1));
// getComputedStyle is not a selector
// have to pass in an already selected element


console.log("\n");
console.log("\n");
console.log("\n");


//
//  Manipulate Classes
//

const h2 = document.querySelector("h2");

console.log(h2.getAttribute("class"));
h2.setAttribute("class", "purple");
console.log(h2.getAttribute("class"));
h2.setAttribute("class", "border");
console.log(h2.getAttribute("class"));
console.log("\n");

// previous classes gone while using setAttribute("class", );
// annoying AF

h2.setAttribute("class", "");
console.log(h2.classList);
console.log("\n");

h2.classList.add("purple");
h2.classList.add("border");
console.log(h2.classList);
console.log("\n");

h2.classList.remove("border");
console.log(h2.classList);
h2.classList.toggle("border");
console.log(h2.classList);
console.log("h2.classList.contains('purple'): ", h2.classList.contains("purple"))
console.log("\n");