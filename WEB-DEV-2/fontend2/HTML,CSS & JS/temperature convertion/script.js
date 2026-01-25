let textBox = document.getElementById('textBox').value;
let celsiusToFahrenheit = document.getElementById('celsiusToFahrenheit');
let FahrenheitTocelsius = document.getElementById('FahrenheitTocelsius');
let submit = document.getElementById('submit');
let result = document.getElementById('result');
let temp;


submit.addEventListener('click',()=>{

	if(celsiusToFahrenheit.checked){
		temp = Number(textBox);
		temp = temp*9/5 + 32;
		result.textContent = temp.toFixed(1) + 'F';
	}
	else if(FahrenheitTocelsius.checked){
		temp = Number(textBox.value);
		temp = (temp-32)*(5/9);
		result.textContent = temp.toFixed(1) + 'C';
	}else{
		result.textContent = 'please select the method';
	}

})