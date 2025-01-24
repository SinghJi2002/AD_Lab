var inputBox3=document.querySelector('#inputBox3')
var add=document.querySelector('#addValue')
var push=document.querySelector('#push')
var pop=document.querySelector('#pop')
var shift=document.querySelector('#shift')
var unshift=document.querySelector('#unshift')
var output3=document.querySelector('#output3')
var numArray=[]

add.addEventListener('click',()=>{
    let value=inputBox3.value
    numArray.push(value)
    var outputString='['+numArray.join(',')+']'
    output3.innerHTML=outputString
})

push.addEventListener('click',()=>{
    let value=inputBox3.value
    numArray.push(value)
    let outputString='['+numArray.join(',')+']'
    output3.innerHTML=outputString
})

pop.addEventListener('click',()=>{
    numArray.pop()
    let outputString='['+numArray.join(',')+']'
    output3.innerHTML=outputString
})

shift.addEventListener('click',()=>{
    numArray.shift()
    let outputString='['+numArray.join(',')+']'
    output3.innerHTML=outputString
})

unshift.addEventListener('click',()=>{
    let value=inputBox3.value
    numArray.unshift(value)
    let outputString='['+numArray.join(',')+']'
    output3.innerHTML=outputString
})