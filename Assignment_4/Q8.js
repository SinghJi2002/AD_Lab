function checkAge(num) {
    if(num>=18){
        return(true)
    }
    else{
        return(false)
    }
}


var textBox=document.querySelector('#inputBox')
var button=document.querySelector('#button')
var output=document.querySelector('#output')

button.addEventListener('click',()=>{
    let value=textBox.value
    if(checkAge(value)){
        output.innerHTML='The person is eligible to vote'
    }
    else{
        output.innerHTML='The person is not eligible to vote'
    }
})