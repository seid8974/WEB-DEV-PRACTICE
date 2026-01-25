const  body = document.body;

let greencolor = document.getElementById('green');
let redcolor = document.getElementById('red');
let bluecolor = document.getElementById('blue');
let randomcolor = document.getElementById('random');



function setColor(name){
    body.style.backgroundColor = name;
}


greencolor.addEventListener('click',
    ()=>setColor('green')
);
redcolor.addEventListener('click',
    ()=>setColor('red')
);
blue.addEventListener('click',
    ()=>setColor('blue')
);
randomcolor.addEventListener('click',
    randomColorFun
);
function randomColorFun(){
    const green =  Math.floor(Math.random() * 255);
    const red =  Math.floor(Math.random() * 255);
    const blue =  Math.floor(Math.random() * 255);

    const color =`rgb( ${red},${green},${blue})`;

    body.style.backgroundColor = color;
}

