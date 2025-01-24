var inputBox1=document.querySelector('#name1')
var button1=document.querySelector('#greetMe')
var output1=document.querySelector('#output1')

button1.addEventListener('click',()=>{
    var value=inputBox1.value
    output1.innerHTML=`Hello, ${value}! Welcome to the website!`
})