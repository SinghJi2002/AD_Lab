let button1=document.querySelector('#button1')
let textbox1=document.querySelector('#inputBox1')
let output1=document.querySelector('#output1')
button1.addEventListener('click',()=>{
    const value=textbox1.value
    output1.innerHTML=`<p> The is a paragraph. The entered value is ${value}</p>`
})

function checkPrime(number){
    var divisorCount=0
    for(let i=0;i<=number;i++){
        if(number%i==0){
            divisorCount++;
        }
    }
    if(divisorCount<=2){
        return(true)
    }
    else{
        return(false)
    }
}

var textBox2=document.querySelector('#inputBox2')
var button2=document.querySelector('#button2')
var output2=document.querySelector('#output2')

button2.addEventListener('click',()=>{
    let value=textBox2.value
    if(checkPrime(value)){
        output2.innerHTML=`<p> The given number is prime </p>`
    }
    else{
        output2.innerHTML=`<p> The given number is not a prime </p>`
    }
})


function checkPalindrome(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

var textBox3=document.querySelector('#inputBox3')
var button3=document.querySelector('#button3')
var output3=document.querySelector('#output3')

button3.addEventListener('click',()=>{
    let value=textBox3.value
    if(checkPalindrome(value)){
        output3.innerHTML='This is a palindrome number'
    }
    else{
        output3.innerHTML='This is not a palindrome number'
    }
})



function checkLeapYear(number){
    if(number%4==0 && number%100!=0 || number%400==0){
        return(true)
    }
    else{
        return(false)
    }
}

var textBox4=document.querySelector('#inputBox4')
var button4=document.querySelector('#button4')
var output4=document.querySelector('#output4')

button4.addEventListener('click',()=>{
    let value=textBox4.value
    if(checkLeapYear(value)){
        output4.innerHTML='This is a leap year'
    }
    else{
        output4.innerHTML='This is not a leap year'
    }
})



function findDigitSum(number){
    var digitSum=0
    while(number>0){
        let num=number%10
        number=Math.floor(number/10)
        digitSum=digitSum+num
    }
    return(digitSum)
}


var textBox5=document.querySelector('#inputBox5')
var button5=document.querySelector('#button5')
var output5=document.querySelector('#output5')

button5.addEventListener('click',()=>{
    let value=textBox5.value
    output5.innerHTML=`The sum of digits of the entered number is ${findDigitSum(value)}`
})



function findReverse(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return(reversedStr)
}


var textBox6=document.querySelector('#inputBox6')
var button6=document.querySelector('#button6')
var output6=document.querySelector('#output6')

button6.addEventListener('click',()=>{
    let value=textBox6.value
    output6.innerHTML=`This is a paragraph. The reverse of the number entered is ${findReverse(value)}`
})




var textBox7=document.querySelector('#inputBox7')
var textBox8=document.querySelector('#inputBox8')
var button7=document.querySelector('#button7')
var output7=document.querySelector('#output7')

button7.addEventListener('click',()=>{
    const value1=parseInt(textBox7.value)
    const value2=parseInt(textBox8.value)
    const sum=value1+value2
    output7.innerHTML=`The sum of numbers is ${sum}`
})



function checkAge(num) {
    if(num>=18){
        return(true)
    }
    else{
        return(false)
    }
}


var textBox9=document.querySelector('#inputBox9')
var button9=document.querySelector('#button9')
var output9=document.querySelector('#output9')

button9.addEventListener('click',()=>{
    let value=textBox9.value
    if(checkAge(value)){
        output9.innerHTML='The person is eligible to vote'
    }
    else{
        output9.innerHTML='The person is not eligible to vote'
    }
})