import TodoService from "../services/todo-service.js";
import store from "../store.js";
import Todo from "../models/Todo.js";

//TODO Create the render function
function _drawTodos() {
  console.log("controller draw works");
  
  let template = ''
  let todos = store.State.todos

  todos.forEach(todo => template += todo.Template)
  document.getElementById("todos").innerHTML = template
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    TodoService.getTodos();
    store.subscribe('todos', _drawTodos)
  }

  addTodo(e) {
    console.log("addTodo controller works");
    event.preventDefault();
    var form = e.target;
    var todo = {
      description: form.description.value,
    };
    TodoService.addTodoAsync(todo);
    form.reset()
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
