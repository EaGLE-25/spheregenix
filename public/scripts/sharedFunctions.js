export async function fetchPost(url,data){
  try{
    const response = await fetch(url,{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return response.json();
  }
  catch(e){
    console.log("try catch",e);
  }
}

export function getformObject(form){
  let formElements = form.elements;
  let formObj ={};
  for(let i=0;i<formElements.length;i++){
    if(formElements[i].type !== "submit"){
      const fieldName = formElements[i].name;
      const fieldValue = formElements[i].value;
     
      formObj[fieldName] = fieldValue;
    }
  }
  return formObj;
}