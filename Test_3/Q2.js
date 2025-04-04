//Function Declaration
function checkPalindrome(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    //Return type
    return str === reversedStr;
}

var textBox=document.querySelector('#inputNumber')
var button=document.querySelector('#button')
var output=document.querySelector('#output')

button.addEventListener('click',()=>{
    let value=textBox.value
    //Function calling with arguments
    if(checkPalindrome(value)){
        output.innerHTML='This is a palindrome number'
    }
    else{
        output.innerHTML='This is not a palindrome number'
    }
})