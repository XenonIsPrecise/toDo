// import { myTodoList } from './todoList.js'

const todoCollectionDiv = document.querySelector('.todoCollection')
const inputValue = document.querySelector('#write')
const btnAdd = document.querySelector("#add")


btnAdd.addEventListener('click', (event) =>{
    if(inputValue !== ''){
        const fragment = document.createDocumentFragment();

        const newItem = fragment.appendChild(document.createElement('div'))

        newItem.textContent = `${inputValue.value}`

        newItem.classList.add('todoItem')

        todoCollectionDiv.appendChild(newItem).appendChild(document.createElement())
    }
console.log(inputValue.value)
})