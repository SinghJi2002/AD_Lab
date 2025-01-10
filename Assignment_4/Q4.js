function checkLeapYear(number){
    if(number%4==0 && number%100!=0 || number%400==0){
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
    if(checkLeapYear(value)){
        output.innerHTML='This is a leap year'
    }
    else{
        output.innerHTML='This is not a leap year'
    }
})