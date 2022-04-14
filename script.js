console.log("working");

const button = document.querySelectorAll('.box');
console.log(button[1].firstChild);

// const bottomValue = button.values;

// console.log(button.value)
let counter = 0;
// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ]
// for(i = 0; i < 9; i++){
//     console.log(button[array[i]]);
    
//     console.log(button[i].firstChild);
//     button[i].addEventListener('click', function(){
//         alert(`${button[array[i]].firstChild.nodeValue}`)
//     })
//     document.querySelector('p').innerHTML += `${button[i].firstChild.nodeValue}`;
// }

let checker = false;
button[0].addEventListener('click', function(){ 
    if(!checker){
        document.querySelector('h1').innerHTML = button[0].firstChild.nodeValue
        checker = true
    }else{
        document.querySelector('h1').innerHTML += button[0].firstChild.nodeValue

    }
})

button[1].addEventListener('click', function(){ 
    if(!checker){
        document.querySelector('h1').innerHTML = button[1].firstChild.nodeValue
        checker = true
    }else{
        document.querySelector('h1').innerHTML += button[1].firstChild.nodeValue

    }
})

button[2].addEventListener('click', function(){ 
    if(!checker){
        document.querySelector('h1').innerHTML = button[2].firstChild.nodeValue
        checker = true
    }else{
        document.querySelector('h1').innerHTML += button[2].firstChild.nodeValue

    }
})

button[3].addEventListener('click', function(){ 
    if(!checker){
        document.querySelector('h1').innerHTML = button[3].firstChild.nodeValue
        checker = true
    }else{
        document.querySelector('h1').innerHTML += button[3].firstChild.nodeValue

    }
})

button[4].addEventListener('click', function(){ 
    if(!checker){
        document.querySelector('h1').innerHTML = button[4].firstChild.nodeValue
        checker = true
    }else{
        document.querySelector('h1').innerHTML += button[4].firstChild.nodeValue

    }
})

button[5].addEventListener('click', function(){ 
    if(!checker){
        document.querySelector('h1').innerHTML = button[5].firstChild.nodeValue
        checker = true
    }else{
        document.querySelector('h1').innerHTML += button[5].firstChild.nodeValue

    }
})

button[6].addEventListener('click', function(){ 
    if(!checker){
        document.querySelector('h1').innerHTML = button[6].firstChild.nodeValue
        checker = true
    }else{
        document.querySelector('h1').innerHTML += button[6].firstChild.nodeValue

    }
})

button[7].addEventListener('click', function(){ 
    if(!checker){
        document.querySelector('h1').innerHTML = button[7].firstChild.nodeValue
        checker = true
    }else{
        document.querySelector('h1').innerHTML += button[7].firstChild.nodeValue

    }
})

button[8].addEventListener('click', function(){ 
    if(!checker){
        document.querySelector('h1').innerHTML = button[8].firstChild.nodeValue
        checker = true
    }else{
        document.querySelector('h1').innerHTML += button[8].firstChild.nodeValue

    }
})

button[9].addEventListener('click', function(){ 
    if(!checker){
        document.querySelector('h1').innerHTML = button[9].firstChild.nodeValue
        checker = true
    }else{
        document.querySelector('h1').innerHTML += button[9].firstChild.nodeValue

    }
})