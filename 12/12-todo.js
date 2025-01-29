// changing normal for loop to foreach
// 11x.js from 11b folder has the version with local storage 
const todoList = [{name:'make dinner' ,dueDate:'29-01-2025'},{name:'wash dishes',dueDate:'10-01-2025'}];
renderTodoList();
function renderTodoList(){
    let todolistHtml = '';
    todoList.forEach((todoObject,index) => {
        // const todoObject = todoList[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const {name,dueDate} = todoObject;
        const html = `
        <div>${name}</div>
        <div> ${dueDate}</div>
        <button class = "deleteTodo js-delete-button">Delete</button>
        `;
        todolistHtml += html;
    });
    // for(let i = 0 ; i < todoList.length ; i++){
        // transferred to for each
    // }
    
    document.querySelector('.js-todo-list')
    .innerHTML = todolistHtml;

    document.querySelectorAll('.js-delete-button')
    .forEach((deleteButton , index) => {
        deleteButton.addEventListener('click',() => {
            // console.log(index);
            todoList.splice(index,1);
            renderTodoList();
        });
    });
    // index is a closure
    // console.log(index); index gets deleted out of function
}

document.querySelector('.js-add-todo-button').addEventListener('click' , () => {
    addTodo();
});
function addTodo(){
    const dateInputElement = document.querySelector('.js-due-date');
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dueDate = dateInputElement.value;
    todoList.push(
        {
            name,   // just type once as key and value are same
            dueDate

            // same as this
            // name:name,
            // dueDate:dueDate
        }
    );
    inputElement.value = '';
    renderTodoList();
}