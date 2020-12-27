$(document).ready(function(){
    $('.sellForm').validate({
        rules:{
           length:{
               required:true,
               number:true,
               min:1
           },
           breadth:{
                required:true,
                number:true,
                min:1
           },
           square_feet:{
                required:true,
                number:true,
                min:1
           },
           conversion:{
               required:true
           },
           type:{
               required:true
           },
           price:{
               required:true,
               number:true,
               min:1
           },
           locality:{
               required:true,
               lettersonly: true 
           },
           pincode:{
              required:true,
              number:true,
              minlength:6
           },
           address:{
              required:true,
              rangelength:[10,50]
           }
        }
    })
})

