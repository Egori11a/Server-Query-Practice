const loadTodoFormElement = document.querySelector('.load-todo-form');
const loadTodoInputElement = document.querySelector('#todo-id');
const resultElement = document.querySelector('.result');

loadTodoFormElement.addEventListener('submit', (event) => {
    event.preventDefault();

    fetch(`https://jsonplaceholder.typicode.com/todos/${loadTodoInputElement.value}`)
      .then((response) => {

        if(!response.ok) {
            const errorMessage = response.status === 404 
            ? 'Задача по данному идентефикатору не найдена' 
            : "Что-то пошло не так :)";

            throw new Error(errorMessage);
        }

        return response.json();
    })
    .then((data) => {

        const {id, title, completed} = data;

        resultElement.innerHTML = `
            <input 
            id="toso-${id}" 
            type="checkbox" 
            ${completed ? `checked` : ''}
            >
            <label for="todo-${id}">${title}</label>
        `
    })
    .catch((error) => {
        resultElement.innerHTML = error.message;
    })
})