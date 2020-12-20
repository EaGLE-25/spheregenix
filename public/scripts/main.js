const submitBtn = document.querySelector(".sell-submit");
const sellFormElements = document.querySelector(".sellForm").elements;
const sellFormObj = {};

import {imgUrls} from "./cloundinaryWiget.js";


submitBtn.addEventListener("click",function(e){
   e.preventDefault();
   for(let i=0;i<9;i++){
    const fieldName = sellFormElements[i].name;
    const fieldValue = sellFormElements[i].value;

    sellFormObj[fieldName] = fieldValue;
  }
  sellFormObj.imagesUrl = imgUrls;
  
  fetch("/lands",{
    method:"POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(sellFormObj)
  })
})



