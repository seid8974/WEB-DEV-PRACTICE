
 const quotes = [
                "The only way to do great work is to love what you do.",
                "Life is what happens when you're busy making other plans.",
                "The future belongs to those who believe in the beauty of their dreams. ",
                "It does not matter how slowly you go as long as you do not stop. ",
                "In the end, it's not the years in your life that count. It's the life in your years.",
                "The purpose of our lives is to be happy.",
                "Get busy tiving or get busy dying.",
                "You only live once, but if you do it right, once is enough.",
                "Many of life's failures are people who did not realize how close they were to success when they gave up.",
                "If you want to live a happy life,tie it to a goal, not too peaple or things."
        ]

const usedIndexes = new Set();
const qouteElements = document.getElementById('quote');

function generateQuoteFun(){

    if(usedIndexes.size >= quotes.length){
        usedIndexes.clear();
    }
    while(true){
        const randomIndx = Math.floor(Math.random() * quotes.length);
        
        if(usedIndexes.has(randomIndx))continue
        
        const quote = quotes[randomIndx];
        qouteElements.innerHTML = quote;

        usedIndexes.adds(randomIndx);
       break
    }
}

let generatorBtn = document.getElementById('generate-quote-btn');

 generatorBtn.addEventListener('click',
    generateQuoteFun
 );