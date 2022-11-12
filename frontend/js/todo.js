function addEventListeners() {
    const input = document.getElementById("todo-input-id");
    const button = document.getElementById("todo-button-id");
    const todoList = document.getElementById("todo-list-id");

    if (input && button) {
        // get all todos from database and show them on the page
        getAllTodos();

        // add event listener for enter key
        input.addEventListener("keydown", async (event) => {
            if (event.key === "Enter" && !isEmptyField(input.value)) {
                event.preventDefault();

                await addTodo(input.value.trim());
            }
        });

        // add event listener when button is clicked
        button.addEventListener("click", async (event) => {
            event.preventDefault();

            if (!isEmptyField(input.value)) {
                await addTodo(input.value.trim());
            }
        });
    }

    // disable input field and button or not
    function disableInputs(disable = true) {
        if (!input || !button) return;

        input.disabled = disable;
        button.disabled = disable;
    }

    // get all todos and show them on the page
    async function getAllTodos() {
        const response = await fetch("/get-all-todos");
        const todos = await response.json();

        // create todo item and add it to the page
        for (let i = 0; i < todos.allTodos.length; i++) {
            const todoItem = document.createElement("li");

            todoItem.className = "todo-item";
            todoItem.textContent = todos.allTodos[i].todoText;
            todoList.appendChild(todoItem);
        }
    }

    // add todo by sending http post request to the server
    // also clear input field
    async function addTodo(todoText) {
        console.log(`Add todo: ${todoText}`);

        // disable inputs to prevent sending another
        // todo before previous is finished
        disableInputs();

        // send todo to the server
        const response = await fetch("/add-todo", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ todo: todoText }),
        });

        // get response from server
        const responseObj = await response.json();

        // enable inputs when todo is written to the database
        disableInputs(false);

        // create todo item and add it to the page
        const todoItem = document.createElement("li");

        todoItem.className = "todo-item";
        todoItem.textContent = responseObj.todoAdded;
        todoList.appendChild(todoItem);

        if (input) {
            input.value = "";
        }
    }
}

function isEmptyField(text) {
    return text.match(/^\s*$/);
}

addEventListeners();
