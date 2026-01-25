let myForm = document.getElementById('form-id');

function checkValidity(e) {
    e.preventDefault();
    console.log('Form Validation');
    let inPut = document.querySelectorAll('#form-id input');
    console.log(inPut);
    if(!(isNaN(inPut[0].value) && isNaN(inPut[1].value) )){
        alert("Please Enter String");
    }

     if(inPut[0].value.length == 0){
        alert("Please Enter First Name");
        inPut[0].style.backgroundColor = 'pink';
     }
   if(inPut[1].value.length == 0){
        alert("Please Enter Last Name");
        inPut[1].style.backgroundColor = 'pink';
     }
     if(isNaN(inPut[0].value) && isNaN(inPut[1].value) ){
     if(inPut[0].value.length != 0 &&  inPut[1].value.length != 0){
        let resultShow = document.getElementById('result');
        resultShow.textContent = inPut[0].value + " " + inPut[1].value;
     }
    }
}


myForm.addEventListener('submit',checkValidity);


   