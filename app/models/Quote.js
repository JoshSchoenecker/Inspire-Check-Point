export default class Quote {
    constructor(data){
        this.quote = data.quote.body,
        this.author = data.quote.author
    }

    get Template() {
        return `
        <h5>${this.quote}</h5>
        <p style='font-size: 1rem'>- ${this.author}</p>
        `
    }
}