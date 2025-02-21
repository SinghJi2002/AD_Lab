var mailID=document.querySelector('#mailID')
var validate=document.querySelector('#validate')
var output=document.querySelector('#output')
var regexExpression=/[a-z0-9]+@[a-z]+\.[a-z]{2,}$/

validate.addEventListener('click',()=>{
    let inputMail=mailID.value
    if(regexExpression.test(inputMail)){
        output.style.color='green'
        output.innerHTML="The is a valid email"
    }
    else{
        output.style.color='red'
        output.innerHTML="The mail is invalid"
    }
})  