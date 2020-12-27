import {fetchPost,getformObject} from './sharedFunctions.js';
import {imgUrls} from "./cloundinaryWiget.js";

const sellForm = document.querySelector(".sellForm");


sellForm.addEventListener("submit",async function(e){
  e.preventDefault();
  if($(".sellForm").valid()){
    const sellFormObj = getformObject(sellForm);
    sellFormObj.imagesUrl = imgUrls;
    const response = await fetchPost('/lands',sellFormObj);
    if(response){
      sellForm.reset();
      alert("your listing has been posted");
   }else{
     alert("oops something went wrong");
   }
  };
})