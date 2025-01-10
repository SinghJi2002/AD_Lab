function findReverse(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return(reversedStr)
}


var textBox=document.querySelector('#inputBox')
var button=document.querySelector('#button')
var output=document.querySelector('#output')

button.addEventListener('click',()=>{
    let value=textBox.value
    output.innerHTML=`This is a paragraph. The reverse of the number entered is ${findReverse(value)}`
})