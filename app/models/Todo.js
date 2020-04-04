export default class Todo {
    constructor(data){
        this.id = data._id,
        this.completed = data.completed,
        this.user = data.user,
        this.description = data.description
        this.listItems = data.listItems || []
    }

    get Template() {
        return /* html */ `
        <div class="col-4">
        <div class="card todoListStyle" style="width: 18rem;">
        <div class="card-header">
        <button type="button" class="close text-danger align-self-center" onclick="app.listController.deleteList('${this.id}')">
        <span>&times;</span>
        </button>
        <h4>${this.description}</h4>
        </div>
        <form onsubmit="app.listController.createListItem(event, '${this.id}')">
        <div class="form-group">
        <input type="text" name="listItem" class="form-control" placeholder="New Task..."/>
        </div>
        </form>
        <dl>
        ${this.listItem}
        </dl>
        </div>
        </div>
        `
    }
}
