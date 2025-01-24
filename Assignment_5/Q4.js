var inputBox4=document.querySelector('#inputBox4')
var inputBox5=document.querySelector('#inputBox5')
var addNumber=document.querySelector('#addNumber')
var searchNumber=document.querySelector('#searchNumber')
var ascending=document.querySelector('#ascending')
var decending=document.querySelector('#decending')
var output4=document.querySelector('#output4')
var output5=document.querySelector('#output5')
var output6=document.querySelector('#output6')
var output7=document.querySelector('#output7')
var mainArray=[]
var sortedArray=[]
var reverseArray=[]

addNumber.addEventListener('click',()=>{
    let value=inputBox4.value
    mainArray.push(value)
    let outputString='['+mainArray.join(',')+']'
    output4.innerHTML=outputString
})

searchNumber.addEventListener('click',()=>{
    let value=inputBox5.value
    let index=mainArray.indexOf(value)
    output6.innerHTML=index
})

ascending.addEventListener('click',()=>{
    sortedArray=mainArray.sort()
    let outputString='['+sortedArray.join(',')+']'
    output5.innerHTML=outputString
})

decending.addEventListener('click',()=>{
    reverseArray=mainArray.reverse()
    let outputString='['+sortedArray.join(',')+']'
    output7.innerHTML=outputString
})

