console.log("working");

const button = document.querySelectorAll('.box');
console.log(button[1].firstChild);

// const bottomValue = button.values;

// console.log(button.value)
// let counter = 0;
// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ]
// for(i = 0; i < 9; i++){
//     console.log(button[array[i]]);
    
//     console.log(button[i].firstChild);
//     button[i].addEventListener('click', function(){
//         alert(`${button[array[i]].firstChild.nodeValue}`)
//     })
//     document.querySelector('p').innerHTML += `${button[i].firstChild.nodeValue}`;
// }




let firstValue ;
let secondValue ;
let operatorChoise ;
let checker = false;

//calling the buttons and understand if you want firstValue ore secondValue
button[0].addEventListener('click', function(){ 
    if(!checker){
        document.querySelector('h1').innerHTML = " ";
        document.querySelector('h1').innerHTML = button[0].firstChild.nodeValue
        checker = true
    }else{
        document.querySelector('h1').innerHTML += button[0].firstChild.nodeValue

    }
})

button[1].addEventListener('click', function(){ 
    if(!checker){
        document.querySelector('h1').innerHTML = "";
        document.querySelector('h1').innerHTML = button[1].firstChild.nodeValue
        checker = true
    }else{
        document.querySelector('h1').innerHTML += button[1].firstChild.nodeValue

    }
})

button[2].addEventListener('click', function(){ 
    if(!checker){
        document.querySelector('h1').innerHTML = "";
        document.querySelector('h1').innerHTML = button[2].firstChild.nodeValue
        checker = true
    }else{
        document.querySelector('h1').innerHTML += button[2].firstChild.nodeValue

    }
})

button[3].addEventListener('click', function(){ 
    if(!checker){
        console.log("i am")
        document.querySelector('h1').innerHTML = "";
        document.querySelector('h1').innerHTML = button[3].firstChild.nodeValue
        checker = true
    }else{
        document.querySelector('h1').innerHTML += button[3].firstChild.nodeValue

    }
})

button[4].addEventListener('click', function(){ 
    if(!checker){
        console.log("i am")
        document.querySelector('h1').innerHTML = "";
        document.querySelector('h1').innerHTML = button[4].firstChild.nodeValue
        checker = true
    }else{
        document.querySelector('h1').innerHTML += button[4].firstChild.nodeValue

    }
})

button[5].addEventListener('click', function(){ 
    if(!checker){
        console.log("i am")
        document.querySelector('h1').innerHTML = "";
        document.querySelector('h1').innerHTML = button[5].firstChild.nodeValue
        checker = true
    }else{
        document.querySelector('h1').innerHTML += button[5].firstChild.nodeValue

    }
})

button[6].addEventListener('click', function(){ 
    if(!checker){
        console.log("i am")
        document.querySelector('h1').innerHTML = button[6].firstChild.nodeValue
        checker = true
    }else{
        document.querySelector('h1').innerHTML += button[6].firstChild.nodeValue

    }
})

button[7].addEventListener('click', function(){ 
    if(!checker){
        console.log("i am")
        document.querySelector('h1').innerHTML = button[7].firstChild.nodeValue
        checker = true
    }else{
        document.querySelector('h1').innerHTML += button[7].firstChild.nodeValue

    }
})

button[8].addEventListener('click', function(){ 
    if(!checker){
        console.log("i am")
        document.querySelector('h1').innerHTML = button[8].firstChild.nodeValue
        checker = true
    }else{
        document.querySelector('h1').innerHTML += button[8].firstChild.nodeValue

    }
})

button[9].addEventListener('click', function(){ 
    if(!checker){
        console.log("i am")
        document.querySelector('h1').innerHTML = button[9].firstChild.nodeValue
        checker = true
    }else{
        document.querySelector('h1').innerHTML += button[9].firstChild.nodeValue

    }
})
button[10].addEventListener('click', function(){ 
        console.log("i am")
        if(!checker){
        document.querySelector('h1').innerHTML = button[10].firstChild.nodeValue
        checker = true
    }else{
        document.querySelector('h1').innerHTML += button[10].firstChild.nodeValue

    }
})



const operators = document.querySelectorAll('.op');
console.log(operators);

operators[0].addEventListener('click', function(){
    console.log(operators[0]);
    operatorChoise = "addition";
    checker=false;
    firstValue = document.querySelector('h1').firstChild.nodeValue;
    console.log("this ist first value",firstValue)
    console.log("this is operatorChoise",operatorChoise)
})

operators[1].addEventListener('click', function(){
    console.log(operators[1]);
    operatorChoise = "subtraction";
    checker=false;
    firstValue = document.querySelector('h1').firstChild.nodeValue;
    console.log(operatorChoise)
})

operators[2].addEventListener('click', function(){
    console.log(operators[2]);
    operatorChoise = "divisor";
    checker=false;
    firstValue = document.querySelector('h1').firstChild.nodeValue;
    console.log(operatorChoise)
})

operators[3].addEventListener('click', function(){
    console.log(operators[3]);
    operatorChoise = "multiplicator";
    console.log(operatorChoise)
    firstValue = document.querySelector('h1').firstChild.nodeValue;
    checker=false;
})


const startCalc = document.querySelector('#startCalc')
console.log(startCalc);

const results = []

startCalc.addEventListener('click', function(){
    secondValue = document.querySelector('h1').firstChild.nodeValue;
    console.log("this is secondValue", secondValue)
    if(firstValue && secondValue ){
        if(operatorChoise === "addition"){
            document.querySelector('h1').innerHTML = parseFloat(firstValue) + parseFloat(secondValue);
            firstValue = "";
            secondValue = "";
        }
         if(operatorChoise === "subtraction"){
            document.querySelector('h1').innerHTML = parseFloat(firstValue) - parseFloat(secondValue);
            firstValue = "";
            secondValue = "";
        }
         if(operatorChoise === "divisor"){
            document.querySelector('h1').innerHTML = parseFloat(firstValue) / parseFloat(secondValue);
            firstValue = "";
            secondValue = "";
        }
        if(operatorChoise === "multiplicator"){
            document.querySelector('h1').innerHTML = parseFloat(firstValue) * parseFloat(secondValue);
            firstValue = "";
            secondValue = "";
        }
    }
})
