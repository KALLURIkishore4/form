let validation_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let validation_name = /^([a-zA-Z ]){2,30}$/
let validation_password = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
let validation_number = /[!^0-9]/

document.querySelector('.name').addEventListener('keydown',validation)
let name=document.querySelector('.name');
name1.addEventListener("keydown",validation);
function validation()
{
    if(document.querySelector('.name').value.match(validation_name)){
       document.querySelector('.name').style.border="3px solid green"

}
    else{
        document.querySelector('.name').style.border ="3px solid red"
    }

}

document.querySelector('.email').addEventListener('keydown',evalidation)
let name=document.querySelector('.email');
name1.addEventListener("keydown",evalidation);
function evalidation()
{
    if(document.querySelector('.email').value.match(validation_name)){
       document.querySelector('.email').style.border="3px solid green"

}
    else{
        document.querySelector('.email').style.border ="3px solid red"
    }

}

document.querySelector('.password').addEventListener('keydown',pvalidation)
let name=document.querySelector('.password');
name1.addEventListener("keydown",pvalidation);
function pvalidation()
{
    if(document.querySelector('.password').value.match(validation_name)){
       document.querySelector('.password').style.border="3px solid green"

}
    else{
        document.querySelector('.password').style.border ="3px solid red"
    }

}

document.querySelector('.number').addEventListener('keydown',nvalidation)
let name=document.querySelector('.number');
name1.addEventListener("keydown",nvalidation);
function nvalidation()
{
    if(document.querySelector('.number').value.match(validation_name)){
       document.querySelector('.number').style.border="3px solid green"

}
    else{
        document.querySelector('.number').style.border ="3px solid red"
    }

}