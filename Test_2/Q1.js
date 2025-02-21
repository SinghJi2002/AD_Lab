var add=document.querySelector("#add")
var reverse=document.querySelector("#reverse")
var inputBox=document.querySelector("#input")
var output1=document.querySelector("#output1")
var output2=document.querySelector("#output2")
var array=[]



add.addEventListener('click',()=>{
    let currValue=inputBox.value
    array.push(currValue)
    let outputString='['+array.join(',')+']'
    output1.innerHTML=outputString
})

reverse.addEventListener('click',()=>{
    for(let i=0,j=array.length-1;i<j;i++,j--) {
        [array[i],array[j]] = [array[j],array[i]];
    }
    let outputString='['+array.join(',')+']'
    output2.innerHTML=outputString

})