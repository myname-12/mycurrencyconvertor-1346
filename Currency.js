let select = document.querySelectorAll('#Currency')
let result = document.getElementById("result")
let value1 = document.getElementById("value1")
let value3 = document.getElementById("value3")

fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=>displayDropDown(res))
function displayDropDown(res){
 let curr =  Object.entries(res)
 for(let i = 0;i<curr.length;i++){
    let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
    select[0].innerHTML += opt
    select[1].innerHTML += opt

 }
}

result.addEventListener('click',()=>{
 let curr1 = select[0].value  
 let curr3 = select[1].value
 let input = value1.value
 if(curr1 === curr3)
    alert("Choose different currencies")
 else
 convert(curr1,curr3,input)
});

function convert(curr1,curr3,input){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${input}from=${curr1}&to=${curr3}`)
    .then(resp=>resp.json())
    .then((data)=>{
        document.getElementById("value3").value = Object.values(data.rates)[0]
    });
}