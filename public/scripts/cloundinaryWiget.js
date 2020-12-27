export let imgUrls = [];
const widget = document.getElementById("upload_widget");
var myWidget = cloudinary.createUploadWidget({
  cloudName: 'eagle2501', 
  uploadPreset: 'i2agbl3k',
  resourceType:'image',
  sources:['local','url'],
  clientAllowedFormats:["png","gif", "jpeg"]}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      imgUrls.push(result.info.secure_url); 
    }
  }
)

if(widget){
  widget.addEventListener("click", function(){
    myWidget.open();
  },false);
}

