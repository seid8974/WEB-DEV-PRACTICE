

let display = document.getElementById('display');

function appendToDisplay(input) {
	display.value += input;
}

function calculateResult(){
	try{
		display.value = eval(display.value);
	}
	catch(e){
		display.value="Error";
	}
	
}

function clearDisplay(){
	display.value = "";
}

function deleteDisplay(){
	display.value = display.value.slice(0,-1);
}