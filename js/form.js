
  var fullname=document.getElementById("name");
  var telephone=document.getElementById("phone");
  var email=document.getElementById("email");
  var message=document.getElementById("message");


function iniciar(){
  
    fullname.addEventListener("blur", validarFullName, false);
    telephone.addEventListener("blur", validarTelephone, false);
    email.addEventListener("blur", validarEmail, false);
    message.addEventListener("blur", validarMessage, false);
    

    }
    function validarFullName(){
        if(fullname.value==''){
            fullname.setCustomValidity('inserte su nombre');
              fullname.style.borderBottomColor='#ff4242';
        }else{
            fullname.setCustomValidity('');
            fullname.style.borderBottomColor='orange';
        }
    }    
    function validarTelephone(){
            if(telephone.value==''){
            telephone.setCustomValidity('inserte su Teléfono');
            telephone.style.borderBottomColor='#ff4242';
            }else{
            telephone.setCustomValidity('');
            telephone.style.borderBottomColor='orange';
            }
        }
    function validarEmail(){
        if(email.value==''){
            email.setCustomValidity('inserte su mail');
            email.style.borderBottomColor='#ff4242';
        }else{
            email.setCustomValidity('');
            email.style.borderBottomColor='orange';
        }
    }
    function validarMessage(){
        if(message.value==''){  
            message.setCustomValidity('inserte su mensaje');
            message.style.borderBottomColor='#ff4242';  
        }else{     
            message.setCustomValidity('');
            message.style.borderBottomColor='orange'
        
        }
}
window.addEventListener("load", iniciar, false);






