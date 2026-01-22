


const selectElement = (element) => document.querySelector(element);
selectElement('.line').addEventListener('click',()=>{
    selectElement('header').classList.toggle('active');
})

const selectElementStore = (element) => document.querySelector(element);
selectElementStore('#store-link').addEventListener('click',()=>{
    selectElementStore('header').classList.toggle('bodyOfStore');
})


let linkList = document.getElementsByClassName('link-list');
