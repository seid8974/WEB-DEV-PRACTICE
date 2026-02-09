require('express-async-errors');
const winston = require('winston');
require('winston-mongodb');

module.exports = function (){
    winston.add(
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            )
        }),
        new winston.transports.File({ filename: 'uncaughtException.log'})
    );

    process.on('UnhandledRejection', (ex) => {
        throw ex;
    });

    winston.add( winston.transports.File, { filename: 'logfine.log'});
    winston.add( winston.transports.MongoDB, { 
        db: 'mongodb://localhost:27017/vidlyDB',
        level:'error'
    });
};