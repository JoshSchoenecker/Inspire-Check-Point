export default class Todo {
    constructor(data){
        this.id = data._id,
        this.completed = data.completed,
        this.user = data.user,
        this.description = data.description
    }

    get Template() {
        return /* html */ `
        <li>
        <input type="checkbox">
        <label>${this.description}</label>
        <button type="button" onclick="app.todoController.removeTodo('${this.id}')" class="delete">Delete</button>
    </li>
        `
    }
}
