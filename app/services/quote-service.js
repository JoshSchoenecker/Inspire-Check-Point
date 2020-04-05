import store from "../store";
import Quote from "../models/Quote.js"

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class QuoteService {
    async getQuote() {
      console.log("getting the quote");
      let res = await _quoteApi.get();
      store.commit("quotes", new Quote(res.data)) 
    }
}

const quoteService = new QuoteService();
export default quoteService;
