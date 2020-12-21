const submitBtn = document.querySelector(".sell-submit");
const sellForm = document.querySelector(".sellForm");

import {imgUrls} from "./cloundinaryWiget.js";


submitBtn.addEventListener("click",async function(e){
   e.preventDefault();
  const sellFormObj = getformObject(sellForm);
  sellFormObj.imagesUrl = imgUrls;
  const response = await fetchPost('/lands',sellFormObj);
  if(response){
    sellForm.reset();
    alert("your listing has been posted");
 }else{
   alert("oops something went wrong");
 }
})


async function fetchPost(url,data){
  const response = await  fetch(url,{
    method:"POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
 
  return response.json();
  
}

function getformObject(form){
  let formElements = form.elements;
  let formObj ={};
  for(let i=0;i<9;i++){
    const fieldName = formElements[i].name;
    const fieldValue = formElements[i].value;
   
    formObj[fieldName] = fieldValue;
  }
  return formObj;
}






