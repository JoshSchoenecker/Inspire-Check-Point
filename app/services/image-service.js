import store from "../store.js";
import BgImage from "../models/BgImage.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 10000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  async getBgImg(){
    console.log(`getting background image`);
    let res = await imgApi.get();
    store.commit("bgImage", new BgImage(res.data));
  }
}

const imageService = new ImageService();
export default imageService;
