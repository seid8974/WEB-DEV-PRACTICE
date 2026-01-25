let fullName='seid mohammed';
let age = 20;
let isStudent = true;


document.getElementById('p1').textContent=`you full name is : ${fullName}.`;
document.getElementById('p2').textContent=`you age is : ${age} years old.`;
document.getElementById('p3').textContent=`are you student : ${isStudent}.`;




let myText = document.getElementById('myText');

let decreaseBtn = document.getElementById('decreaseBtn');

let resetBtn = document.getElementById('resetBtn');

let increaseBtn = document.getElementById('increaseBtn');

let count = 0;

decreaseBtn.addEventListener('click',()=>{
	count  --;
	myText.textContent = count;
})

resetBtn.addEventListener('click',()=>{
	count  = 0;
	myText.textContent = count;
})

increaseBtn.addEventListener('click',()=>{
	count  ++;
	myText.textContent = count;
})

