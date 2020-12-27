export async function fetchPost(url,data){
  const response = await  fetch(url,{
    method:"POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return response.json();
}

export function getformObject(form){
  let formElements = form.elements;
  let formObj ={};
  for(let i=0;i<9;i++){
    const fieldName = formElements[i].name;
    const fieldValue = formElements[i].value;
   
    formObj[fieldName] = fieldValue;
  }
  return formObj;
}