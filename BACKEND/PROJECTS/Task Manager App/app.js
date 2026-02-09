require('express-async-errors');
const express = require('express');
const home = require('./routes/home-page.js');
const router = require('./routes/index.js');
const connection = require('./DB/connection');
const path = require('path');
const notFound = require('./middleware/not-found.js');
const error = require('./middleware/error-handle.js');


const app = express();
const port = process.env.PORT || 3000;




app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', home);
app.use('/test', require('./routes/test'));
app.use('/api/tasks', router);
app.use(notFound); 
app.use(error);









try {
    connection(process.env.mongo_url);
    app.listen(port,()=>{
    console.log('the server is running on port: '+ port);
});
} catch (error) {
    console.log(error);   
}