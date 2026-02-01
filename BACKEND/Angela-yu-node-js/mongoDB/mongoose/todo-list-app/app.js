const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 4000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost:27017/todo-listDB');

const itemsSchema = new mongoose.Schema({
    itemName:String
})

const Item = mongoose.model('Item', itemsSchema);

const item1 = new Item({
    itemName: 'hgfjdghf dgfdsh'
});

const item2 = new Item({
    itemName:'ghhsfdg utyets'
});

const item3 = new Item({
    itemName: 'gfdhsja'
});

const defaultItem = [item1,item2,item3];

Item.insertMany(defaultItem)
    .then(() => {
        console.log('INSERTION SUCCESSFULLY!');
    })
    .catch((err) => {
        console.log('insertion error :' + err);
    });


app.get('/',(req,res)=> {
    res.sendFile(__dirname +'index.html');
})

app.post('/',(req,res) => {
    console.log(req.body);
})

app.listen(port,() => {
    console.log(`http://localhost:${port}`);
    console.log(`the server is running on port: ${port}`);
})