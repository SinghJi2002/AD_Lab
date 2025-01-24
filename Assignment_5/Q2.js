var inputBox2=document.querySelector('#name2')
var button2=document.querySelector('#addName')
var output2=document.querySelector('#output2')
var namesArray=[]

function addToList(name){
    namesArray.push(name)
}

button2.addEventListener('click',()=>{
    var value=inputBox2.value
    addToList(value)
    var outputString="Name are "+ namesArray.join(',')
    output2.innerHTML=outputString
})