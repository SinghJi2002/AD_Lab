var textBox1=document.querySelector('#inputBox1')
var textBox2=document.querySelector('#inputBox2')
var button=document.querySelector('#button')
var output=document.querySelector('#output')

button.addEventListener('click',()=>{
    const value1=parseInt(textBox1.value)
    const value2=parseInt(textBox2.value)
    const sum=value1+value2
    output.innerHTML=`The sum of numbers is ${sum}`
})