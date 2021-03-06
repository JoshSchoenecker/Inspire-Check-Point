import ImageService from "../services/image-service.js";
import store from "../store.js"

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
function drawBgImg() {
    console.log("attempting to draw background");
    document.body.style.backgroundImage = `url(${store.State.bgImage.large_url})`
    document.body.classList.add('bg-image')
    // document.getElementById("bg-image").style.backgroundSize = 'cover'
    // document.getElementById("bg-image").style.backgroundRepeat = 'no-repeat'
    // document.getElementById("bg-image").style.height = '65rem'
}
export default class ImageController {

    constructor(){
        console.log("image controller working");
        
        store.subscribe("bgImage", drawBgImg)
        ImageService.getBgImg()
    }
}
