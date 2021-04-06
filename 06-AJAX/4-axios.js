const jokes = document.querySelector("#jokes")
const btn = document.querySelector("button")


const getDadJoke = async () => {
    try {
        const config = {headers: {Accept: "application/json"}};
        const res = await axios.get("https://icanhazdadjoke.com", config);
        // console.log(res);
        // console.log(res.data.joke);
        return res.data.joke;
    } catch (err) {
        return "Sorry, No jokes are available"
    }
}

const addNewJoke = async () => {
    const newJoke = await getDadJoke();
    const newLi = document.createElement("li");
    newLi.append(newJoke);
    jokes.append(newLi);
}


btn.addEventListener("click", addNewJoke);
