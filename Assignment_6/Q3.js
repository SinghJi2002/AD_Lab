var password=document.querySelector('#password')
var validate=document.querySelector('#validate')
var output=document.querySelector('#output')
var regexExp=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%]).{8,}$/

validate.addEventListener('click',()=>{
    let value=password.value
    if(regexExp.test(value)){
        output.style.color='green'
        output.innerHTML='This Is Valid Password'
    }
    else{
        output.style.color='red'
        output.innerHTML='This Is A Invalid Password'
    }
})