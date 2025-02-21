var string=document.querySelector('#string')
var word=document.querySelector('#word')
var search=document.querySelector('#search')
var output=document.querySelector('#output')

search.addEventListener('click',()=>{
    let str=string.value
    let wrd=word.value
    // let wordArray=str.split(' ')
    // let status=false
    // for(let i=0;i<wordArray.length;i++){
    //     if(wordArray[i]==wrd){
    //         status=true
    //         break
    //     }
    // }
    let newRgx=new RegExp(wrd,'i')
    if(str.match(newRgx)){
        output.style.color='green'
        output.innerHTML='Word Found'
    }
    else{
        output.style.color='red'
        output.innerHTML='Word Not Found'
    }
})