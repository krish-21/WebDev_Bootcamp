const form = document.querySelector("#searchForm");
const section = document.querySelector("#pictures")

form.addEventListener("submit", async function (e) {
    e.preventDefault();
    // clearing the page first
    clearImages();
    
    const searchTerm = this.elements.query.value;
    const config = { params: { q: searchTerm, isFunny: "Krishna" }, headers: {} };
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    // console.log(res.data);
    makeImages(res.data);
    // clearing the input
    form.elements.query.value = "";
});

const makeImages = shows => {
    for (let item of shows) {
        // console.log(item);
        if (item.show.image) {
            const img = document.createElement("img");
            img.src = item.show.image.medium;
            section.append(img)
        }
    }
}

const clearImages = () => {
    while (section.firstChild) {
        section.lastChild.remove();
    }
}