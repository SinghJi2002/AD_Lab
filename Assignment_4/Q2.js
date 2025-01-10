function checkPrime(number){
    var divisorCount=0
    for(let i=0;i<=number;i++){
        if(number%i==0){
            divisorCount++;
        }
    }
    if(divisorCount<=2){
        return(true)
    }
    else{
        return(false)
    }
}

var textBox=document.querySelector('#inputNumber')
var button=document.querySelector('#button')
var output=document.querySelector('#output')

button.addEventListener('click',()=>{
    let value=textBox.value
    if(checkPrime(value)){
        output.innerHTML=`<p> The given number is prime </p>`
    }
    else{
        output.innerHTML=`<p> The given number is not a prime </p>`
    }
})