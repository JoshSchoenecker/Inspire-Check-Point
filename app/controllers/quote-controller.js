import QuoteService from "../services/quote-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)
function _draw() {
   
}
export default class QuoteController {
    constructor(){
        console.log("quoteController working");
        store.subscribe("quotes", _draw)
        QuoteService.getQuote()
    }


}
