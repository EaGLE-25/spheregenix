$(document).ready(function(){
  $('.contact-us-form').validate({
      rules:{
         name:{
             required:true,
             lettersonly: true
         },
         email:{
              required:true,
              email:true
         },
         phone:{
           required:true,
           minlength:10,
           number:true
         },
         query:{
              required:true,
              rangelength:[10,50]
         }
      }
  })
})

