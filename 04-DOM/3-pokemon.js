const container = document.querySelector("#container");
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";


for(let i = 1; i < 152  ; i++) {
    const pokemon = document.createElement("div");
    const label = document.createElement("span");
    const newImage = document.createElement("img");

    pokemon.classList.add("pokemon");
    
    label.innerText = `#${i}`;
    newImage.src = `${baseURL}${i}.png`;
    
    pokemon.appendChild(newImage);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}