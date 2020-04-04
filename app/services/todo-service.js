import store from "../store.js";
import Todo from "../models/Todo.js"

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/JoshS/todos/",
  timeout: 8000
});

class TodoService {

  getTodos() {
    console.log("Getting the Todo List");
    todoApi.get()
    .then(res => {
      let results = res.data.data.map(rawData => new Todo(rawData))
      store.commit('todos', results)
    })
    .catch(error => {
      throw new Error(error)
    })
    
  }

  addTodoAsync(todo) {
    console.log("addTodoAsync service works");
    
    todoApi.post("", todo)
      .then(res => {
        console.log(res.data.data);
        let newTodo = new Todo(res.data)
        let todos = [newTodo, ...store.State.todos]
        this.getTodos()
      })
      .catch(err => console.error(err));
  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo.id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    todoApi.put(todoId, todo);
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {
    todoApi.delete(todoId)
    .then(res => {
      console.log(res.data);
      this.getTodos()
    })
    .catch(err => console.error(err));
  }
}

const todoService = new TodoService();
export default todoService;
