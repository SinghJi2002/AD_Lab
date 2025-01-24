var num1=document.querySelector("#num1")
var num2=document.querySelector("#num2")
var num3=document.querySelector("#num3")
var high=document.querySelector("#findHighest")
var output=document.querySelector("#output")

high.addEventListener('click',()=>{
    const value1=parseFloat(num1.value)
    const value2=parseFloat(num2.value)
    const value3=parseFloat(num3.value)

    let solution=highest(value1,value2,value3)

    output.innerHTML=`The highest value is ${solution}`
})

function highest(num1,num2,num3){
    if(num1>num2 && num1>num3){
        return num1;
    }
    else if(num2>num1 && num2>num3){
        return num2;
    }
    else{
        return num3;
    }
}
