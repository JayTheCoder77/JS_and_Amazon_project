const todoList = ['make dinner' , 'wash dishes'];
renderTodoList();
function renderTodoList(){
    let todolistHtml = '';
    for(let i = 0 ; i < todoList.length ; i++){
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;
        todolistHtml += html;
    }
    console.log(todolistHtml);
    
    document.querySelector('.js-todo-list')
    .innerHTML = todolistHtml;
}
function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    todoList.push(name);
    console.log(todoList);
    inputElement.value = '';
    renderTodoList();
}