var input1=document.querySelector('#input1')
var input2=document.querySelector('#input2')
var add=document.querySelector('#add')
var search=document.querySelector('#search')
var ascending=document.querySelector('#ascending')
var descending=document.querySelector('#descending')
var output1=document.querySelector('#output1')
var output2=document.querySelector('#output2')
var output3=document.querySelector('#output3')
var output4=document.querySelector('#output4')
var array=[]


add.addEventListener('click',()=>{
    let currValue=input1.value
    array.push(currValue)
    let outputString='['+array.join(',')+']'
    output3.innerHTML=`Array ${outputString}`
})

search.addEventListener('click',()=>{
    let currValue=input2.value
    let index=array.indexOf(currValue)
    if(index==-1){
        output4.innerHTML=`Element not found`    
    }
    else{
        output4.innerHTML=`Element found at index ${index}`
    }
})

ascending.addEventListener('click',()=>{
    let sortedArray=array.sort()
    let outputString='['+sortedArray.join(',')+']'
    output1.innerHTML=`Ascending Order : ${outputString}`
})

descending.addEventListener('click',()=>{
    let sortedArray=array.reverse()
    let outputString='['+sortedArray.join(',')+']'
    output2.innerHTML=`Descending Order : ${outputString}`
})

