var phoneNumber=document.querySelector('#phoneNumber')
var validate=document.querySelector('#validate')
var output=document.querySelector('#output')
var regexExp=/[0-9]{10}/

validate.addEventListener('click',()=>{
    let value=phoneNumber.value
    if(regexExp.test(value)){
        output.style.color='green'
        output.innerHTML='This Phone Number Is Valid'
    }
    else{
        output.style.color='red'
        output.innerHTML='This Phone Number Is Invalid'
    }
})