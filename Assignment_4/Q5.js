function findDigitSum(number){
    var digitSum=0
    while(number>0){
        let num=number%10
        number=Math.floor(number/10)
        digitSum=digitSum+num
    }
    return(digitSum)
}


var textBox=document.querySelector('#inputBox')
var button=document.querySelector('#button')
var output=document.querySelector('#output')

button.addEventListener('click',()=>{
    let value=textBox.value
    output.innerHTML=`The sum of digits of the entered number is ${findDigitSum(value)}`
})