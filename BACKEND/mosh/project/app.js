const express = require('express');
const winston = require('winston');

const app = express();
const port = process.env.PORT || 3000;
// const port = 3000;
   

require('./startup/error-handling')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/enviroment')();
require('./startup/validation')();



app.listen(port,() => {
    winston.info('the server is running on port :'+ port);
});