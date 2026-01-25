const fs = require('fs');


// // reading files
// fs.readFile('../docs/text.txt', (err,data) => {
//     if(err){
//         console.log('error reading file ' + err);
//     }
//     console.log(data.toString());
// })



// // writing files

// fs.writeFile('../docs/text.txt','hello world!', (err) => {
//     if(err) {
//         console,log('writing a files has error!' + err);
//     }
//     console.log('success writing!');
// })

// fs.writeFile('../docs/text2.txt','hello again!', (err) => {
//     if(err) {
//         console,log('writing a files has error!' + err);
//     }
//     console.log('success writing!');
// })



// // directories

// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//    if(err){
//     console.log('error folder creation :' + err);
//    }
//     console.log('folder created!');
//   })
// }else{
//     fs.rmdir('./assets',(err) => {
//         if(err){
//             console.log('remove diractory error:' + err);
//         }
//         console.log('remove diractory');
//     })
// }



// deleting files

// if(!fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt', (err) => {
//    if(err){
//     console.log('error deleting a files :' + err);
//    }else{
//     console.log('file deleted!');
//    }
//   })
// }