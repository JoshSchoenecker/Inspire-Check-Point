export default class Todo {
    constructor(data){
        this.id = data._id,
        this.completed = data.completed,
        this.user = data.user,
        this.description = data.description
    }

    get Template() {
        let template =  /* html */ `
        <li>
        <input type="checkbox"`
        template += this.completed ? " checked " : "" 
        template += `onclick="app.todoController.toggleTodoStatus('${this.id}')">
        <label>${this.description}</label>
        <button type="button" onclick="app.todoController.removeTodo('${this.id}')" class="delete float-right mr-3 mt-2">&times;</button>
    </li>
        `
        return template
    }

    // checked=${this.completed}
}
