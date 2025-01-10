let btn=document.querySelector('#check')
let textbox=document.querySelector('#inputNumber')
let output=document.querySelector('#output')
btn.addEventListener('click',()=>{
    const value=textbox.value
    output.innerHTML=`<p> The is a paragraph. The entered value is ${value}</p>`
})