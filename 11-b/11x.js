const todoList = JSON.parse(localStorage.getItem('todoList')) || [{name:'make dinner' ,dueDate:'29-01-2025'},{name:'wash dishes',dueDate:'10-01-2025'}];
renderTodoList();
function renderTodoList(){
    let todolistHtml = '';
    for(let i = 0 ; i < todoList.length ; i++){
        const todoObject = todoList[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const {name,dueDate} = todoObject;
        const html = `
        <div>${name}</div>
        <div> ${dueDate}</div>
        <button class = "deleteTodo" onclick = "
        todoList.splice(${i},1);
        renderTodoList();
        saveToStorage();
        " >Delete</button>
        `;
        todolistHtml += html;
    }
    
    document.querySelector('.js-todo-list')
    .innerHTML = todolistHtml;
}
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
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('todoList',JSON.stringify(todoList));
}