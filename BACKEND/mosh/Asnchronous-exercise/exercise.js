// // ----- CALLBACK ----
// getCustomer(1,(customer) => {
//     console,log('customer: '+customer);
//     if(customer.isGold){
//         getTopMovies((movies) => {
//             console.log('Top Movies: '+movies);
//             sendEmail(customer.email,movies,() => {
//                 console.log('Email Sent ....');
//             });
//         });
//     }
// });

// function getCustomer(id,callback){
//     setTimeout(() => {
//         callback({
//             id:1,
//             name:"Seid Mohammed",
//             isGold:true,
//             email:'email'
//         });
//     },3000);
// }

// function getTopMovies(callback){
//     setTimeout(() => {
//         callback(['movie1','movie2']);
//     },3000);
// }

// function sendEmail(email,movies,callback){
//     setTimeout(() => {
//         callback();
//     });
// }


// ---- PROMISE ----



// ---- PROMISE ----

// ---- PROMISE ----
// getCustomer(1)        // ---- PROMISE ----
//     .then((customer) => {
//         console.log('customer: '+customer);
//         if(customer.isGold) return getTopMovies();
//     })
//     .then((movies) => { 
//         console.log('Top Movies: '+movies);
//         return sendEmail(customer.email, movies);
//     })
//     .then((result) => console.log(result))
//     .catch(err => console.log(err));

// function getCustomer(id){
//     return new Promise((resolve,rejects) => {
//         setTimeout(() => {
//             resolve({
//                 id:1,
//                 name:"Seid Mohammed",
//                 isGold:true,
//                 email:'email@example.com'
//             });
//         },3000);
//     });
// }

// function getTopMovies(){
//     return new Promise((resolve,rejects) => {
//         setTimeout(() => {
//             resolve(['movie1','movie2']);
//         },3000);
//     });
// }

// function sendEmail(email,movies){
//      return new Promise((resolve,rejects) => {
//         setTimeout(() => {
//             resolve('Email Sent...');
//         });
//      });
// }



//----- Asnc/await -----


async function notiyCustomer(id) {
    try{
        const customer = await getCustomer(id);
        console.log('customer: ', customer);

        if(customer.isGold){
            const movies = await getTopMovies();
            console.log('Top Movies: '+movies);

            const email = await sendEmail(customer.email,movies);
            console.log(email)
        }
    }catch(err){
        console.log(err);
    }
}

notiyCustomer(1);



function getCustomer(id){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({
                id:1,
                name:"Seid Mohammed",
                isGold:true,
                email:'email@example.com'
            });
        },3000);
    });
}

function getTopMovies(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(['movie1','movie2']);
        },3000);
    });
}

function sendEmail(email,movies){
     return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Email Sent...');
        });
     });
}