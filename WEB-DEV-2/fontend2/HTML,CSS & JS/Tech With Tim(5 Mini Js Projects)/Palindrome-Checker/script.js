const input = document.getElementById('input');
 let inputValue=input.value;


function reverseString(str){
    return str.split('').reverse().join('');
}
function check(){
    let value = inputValue;
   const reverse = reverseString(value);

   if(value === reverse){
    alert('P A L I N D R O M E');
   }else{
    alert('Not ToDay');
   }

   input.value = '';
}

let checkButton = document.getElementById('check-button');

checkButton.addEventListener('click', check );