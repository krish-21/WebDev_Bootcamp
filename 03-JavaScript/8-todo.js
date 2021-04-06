let input = prompt("What would you like to do?");

const todos = [];

while (input !== "quit" && input !== "q") {
    if (input === "list") {
        console.log("********************");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("********************");
    } else if (input == "new") {
        const newTodo = prompt("Add todo");
        todos.push(newTodo);
        console.log(`New Todo: ${newTodo}`);
    } else if (input === "delete") {
        const delIndex = parseInt(prompt("Enter index to delete"));
        if (!Number.isNaN(delIndex)) {
            const deletedTodo = todos.splice(delIndex, 1);
            console.log(`Deleted ${delIndex}: ${deletedTodo}`);
        } else {
            console.log("Not a valid index");
        }
    }
    input = prompt("What would you like to do?");
}

console.log("You quit the app");