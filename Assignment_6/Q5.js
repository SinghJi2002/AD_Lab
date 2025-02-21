var string=document.querySelector('#string')
var replace=document.querySelector('#replace')
var output=document.querySelector('#output')
var regexExp=/[aeiou]/gi

replace.addEventListener('click',()=>{
    let str=string.value
    let newString=str.replace(regexExp,'*')
    output.innerHTML=newString
})