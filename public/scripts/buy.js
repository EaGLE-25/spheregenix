import {fetchPost} from './sharedFunctions.js';

const buyBtn = document.querySelector(".wantToBuy");

buyBtn.addEventListener("click",async function(e){
  const pathname = window.location.pathname
  const lastSlash = pathname.lastIndexOf("/");
  const landId = pathname.slice(lastSlash+1);

  const response = await fetchPost("/land/buy",{_id:landId});
  if(response){
    alert("Added to want to buy list");
  }else{
    alert("oops something went wrong");
  }
})