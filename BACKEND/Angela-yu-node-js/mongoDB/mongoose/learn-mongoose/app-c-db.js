const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/mo-se';

mongoose.connect(url)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });

let fruitSchema = new mongoose.Schema({
    name:{
      type:String,
      required:[true,'please fill your name']
    },
    rating:{
      type:Number,
      min:[6,"the minimum value of rating is 6"],
      max:100
    },
    review:String
});


const Fruit = mongoose.model('Fruit',fruitSchema);

const fruit = new Fruit({
    name:"tywer",
    rating:63,
    review:"hjfdghnb jfduasfyt"
});


//     // INSERTION  one fruit 

// fruit.save()
//   .then(() => {
//     console.log("Fruit saved successfully");
//     mongoose.connection.close();
//   })
//   .catch(err => {
//     console.log("Save error:", err);
//   });


const personSchema = new mongoose.Schema({
  name:String,
  age:Number
});

const Person = mongoose.model('Person',personSchema);

const person = new Person({
  name:"someperson",
  age:34
});



  //     // INSERTION person

  // person.save()
  //   .then(() => {
  //     console.log("person succesucefully!");
  //     mongoose.connection.close();
  //   })
  //   .catch((err) => {
  //     console.log(" error are ocurred that is : " + err);  
  //   })



const apple = new Fruit({
  name:"apple",
  rating:21,
  review:"jhfgd gfdh"
});

const kiwi = new Fruit({
  name:"kiwi",
  rating:26,
  review:"jsgfsg gfdh"
});

const banana = new Fruit({
  name:"banana",
  rating:34,
  review:"hjhjgghfdhg"
});

const mango = new Fruit({
  name:"mango",
  rating:15,
  review:"hgafjahfg aFGHJ"
});




//     // INSERTION MANY fruits

// Fruit.insertMany([apple,kiwi,banana,mango])
//   .then(() => {
//     console.log("inser many succesucefuly!");
//   })
//   .catch((err) => {
//     console.log("insert many occures error that is :" + err);
//   })



//     // UPDATE APPLE FRUIT
// Fruit.updateOne({ _id:'69791ff2fc69059a15083c54'},{name:'Apple'})
//   .then(() => {
//     console.log("update succesfully!");
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.log('update error :'+err);
//   });



//     // DELETE APPLE FRUIT

// Fruit.deleteOne({ _id:'69791ff2fc69059a15083c54'})
//   .then(() => {
//     console.log("Delete succesfully!");
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.log("delete error :"+err);
//   })




//     // DELETE MANY PERSON

  // Person.deleteMany({name:'gf'})
  //   .then(() => {
  //     console.log('delete many document succesfully!');
  //     mongoose.connection.close();
  //   })
  //   .catch((err) => {
  //     console.log('delete many error is :'+err);
  //   })





  //     // SEARCH 

  // Fruit.find()
  //   .then((result) => {
  //       console.log(result);
  //       mongoose.connection.close();
  //     }
  //   )
  //   .catch((err) => {
  //     console.log("rerror occered in find" + err);
  //   });



    //     // SEARCH BY LOOP (ALL) 

    // Fruit.find()
    //   .then((fruits) => {
    //       console.log("--- Fruits name ----");

    //       fruits.forEach((fruit) => {
    //         console.log(fruit.name);
    //       })
    //       mongoose.connection.close();
    //     }
    //   )
    //   .catch((err) => {
    //      console.log("error occered in find" + err);
    //   });