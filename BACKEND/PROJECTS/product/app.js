require('express-async-errors');
require('dotenv').config();
const express = require('express');
const product = require('./routes/index');
const errorHandler = require('./middleware/error-handler');
const notFound = require('./middleware/not-found');
const connectDB = require('./db/connect');
const app = express();

const port = 3333;

app.get('/', (req,res)=> {
    res.send('Product');
});

app.use(express.json());
app.use('/product', product);
app.use(notFound);
app.use(errorHandler);


const startUp = async ()=>{
    try {
        await connectDB(process.env.MONGO_DB);
        app.listen(port, () => {
            console.log('the surver is running on port: ' + port);
        });
    } catch (error) {
        console.log(error);
    }
};

startUp();
