import {fetchPost,getformObject} from './sharedFunctions.js';

const contactForm = document.querySelector(".contact-us-form");

contactForm.addEventListener("submit",async(e)=>{
  e.preventDefault();
  if($(".contact-us-form").valid()){
    const contactFormObj = getformObject(contactForm);
    const response = await fetchPost("/queries",contactFormObj);
    if(response){
      alert("Query submitted succesfully");
      contactForm.reset();
    }else{
      alert("Oops, Something went wrong");
    }
  }
})

