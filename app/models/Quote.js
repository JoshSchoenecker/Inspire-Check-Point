export default class Quote {
    constructor(data){
        this.quote = data.quote.body,
        this.author = data.quote.author
    }

    get Template() {
        return `
        <h4>${this.quote}</h4>
        <h4>- ${this.author}</h4>
        `
    }
}