const mongoose = require('mongoose');

//name,price,rating,feature,campany
const productSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true, 'Product Name must be provided!']
    },
    price:{
        type: Number,
        required: [true, 'Product Name must be provided!']
    },
    rating:{
        type: Number,
        defaut: 4.5
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    feature:{
        type: Boolean,
        default: false
    },
    company:{
        type: String,
        enum:['marcos','liddy','caressa','ikea']
    }
});


const Product = new mongoose.model('Product', productSchema);

module.exports = Product;