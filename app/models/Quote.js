export default class Quote {
    constructor(data){
        this.quote = data.quote.body,
        this.author = data.quote.author
    }

    get Template() {
        return `
        <h2>${this.quote}</h2>
        <h3>${this.author}</h3>
        `
    }
}