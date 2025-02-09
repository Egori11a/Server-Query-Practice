const loadPostFormElement = document.querySelector('.load-post-form');
const loadPostInputElement = document.querySelector('#post-id');
const resultElement = document.querySelector('.result');

loadPostFormElement.addEventListener('submit', (event) => {
    event.preventDefault();

    fetch(`http://localhost:3000/posts/${loadPostInputElement.value}`)
      .then((response) => {

        if(!response.ok) {
            const errorMessage = response.status === 404 
            ? 'Пост по данному идентефикатору не найден' 
            : "Что-то пошло не так :)";

            throw new Error(errorMessage);
        }

        return response.json();
    })
    .then((data) => {

        const {title, views} = data;

        resultElement.innerHTML = `
            <p>${title}, просмотров ${views}</p>
        `
    })
    .catch((error) => {
        resultElement.innerHTML = error.message;
    })
})

const createPostFormElement = document.querySelector('.create-post-form');

createPostFormElement.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(createPostFormElement);
    const formDataObject = Object.fromEntries(formData);

    fetch('http://localhost:3000/posts', {
        method: 'post',
        body: JSON.stringify({
            ...formDataObject,
            views: 0,
        })
    })
})

const searchPostsFormElement = document.querySelector('.search-posts-form');
const postViewsInputElement = document.querySelector('#post-views');

searchPostsFormElement.addEventListener('submit', (event) => {
  event.preventDefault()

  fetch(`http://localhost:3000/posts?views_gte=${postViewsInputElement.value}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json)

      resultElement.innerHTML = json
        .map(({ title, views }) => `<p>${title}, просмотров: ${views}</p>`)
        .join('')
    })
})

const deletePostsFormElement = document.querySelector('.delete-post-form');
const deletePostsInputElement = document.querySelector('#del-post')

deletePostsFormElement.addEventListener('submit', (event) => {
    event.preventDefault();

    fetch(`http://localhost:3000/posts/${deletePostsInputElement.value}`, {
        method: 'delete'
    })
})