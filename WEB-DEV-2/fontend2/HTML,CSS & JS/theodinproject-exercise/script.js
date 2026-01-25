const newParagraph = document.createElement('p');

newParagraph.textContent = "Hey i'm red!";
newParagraph.style.color='red';

document.body.appendChild(newParagraph);



const newHeader = document.createElement('h3');

newHeader.textContent = "I'm a blue h3!";
newHeader.style.color='blue';

document.body.appendChild(newHeader);





const newDiv = document.createElement('div');

newDiv.style.cssText='borderColor: black 2px solid;backgroundColor: pink;';

document.body.appendChild(newDiv);



const anotherHeader = document.createElement('h1');

anotherHeader.textContent = "I'm in a div!";

newDiv.appendChild(anotherHeader);


const anotherParagraph = document.createElement('h1');

anotherParagraph.textContent = "ME TOO!";

newDiv.appendChild(anotherParagraph);
