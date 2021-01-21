$(document).ready(function(){
    $('.SignUp').validate({
        rules:{
            Name:{
                required:true,
                lettersonly: true
            },
            mailId:{
                required:true,
                email:true,
                // remote:{
                //     type:'post',
                //     url:'register/isEmailAvailable',
                //     data:{
                //         'email':function() {return $('#email').val(); }
                //     },
                //     dataType:'json'
                // }
            },
            password:{
                required:true,
                minlength:6
            
            },
            reEnterPassword:{
                required:true,

            },
            messages:{
                Name:"Please enter your name",
                lettersonly:"Please enter alphabets only"
            },
            email:{
                required:"Please enter your email address",
                email:"Please enter a valid email addresss",
            },


        }
    })
})

$(document).ready(function(){
    $('.loginForm').validate({
        rules:{
            mailId:{
                required:true,
                email:true
            },
            password:{
                required:true,
                
            }
        }
    })
})