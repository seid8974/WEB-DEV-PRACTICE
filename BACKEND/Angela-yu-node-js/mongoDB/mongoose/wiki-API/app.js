 const express = require('express');
 const bodyParser = require('body-parser');
 const mongoose = require('mongoose');
 
 const port = 3000;
 const app = express();

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost:27017/articleDB');

const articleSchema = new mongoose.Schema({
    title:String,
    content:String
});

const Article = mongoose.model('Article', articleSchema);
    

// // // This route handles all requests related to the "/articles" endpoint.
app.route('/articles')
    .get((req,res) => {
        Article.find()
            .then((result) => {
                res.send(result);
                console.log('selection all Articles seccessfully!');
            })
            .catch((err) => {
                console.log(err);
            });
    })
    .post((req,res) => {
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });

        newArticle.save()
            .then(() => {
                res.send("insert all Articles successfully!");
            })
            .catch((err) => {
                console.log(err);
            });
    })
    .delete((req,res) => {
        Article.deleteMany()
            .then(() => {
                res.send("delete all Articles successfully!");
                console.log("delete all Articles successfully!");
            })
            .catch((err) => {
                console.log(err);
            });
    });


  // // // This route handles requests for a specific article identified by its title.

  app.route('/articles/:articleTitle')
    .get((req,res) => {
    
        Article.findOne({title: req.params.articleTitle})
            .then((result) => {
                res.send(result);
                console.log('selected a specific Article seccessfully!');
            })
            .catch((err) => {
                console.log(err);
            })
    })
    .put((req,res) => {

        Article.updateMany({title:req.params.articleTitle},{title:req.body.title,content:req.body.content})
            .then((result) => {
                res.send(result);
                console.log('update all fields successfully!');
            })
            .catch((err) => {
                console.log(err);
            });
    })
    .patch((req,res) => {
        Article.updateOne({title:articleTitle},{$set:req.body})
            .then((data) => {
                res.send(data);
                console.log('update a specific field successfuly!');
            })
            .catch((err) => {
                console.log(err);
            });
    })
    .delete((req,res) => {

        Article.deleteOne({title:articleTitle})
            .then((result) => {
                res.send(result);
                console.log('delete a specific Article successfully!');
            })
            .catch((err) => {
                console.log(err);
            });
    });



 app.listen(port,() => {
    console.log('http://localhost:'+ port);
    console.log('the surver is running on port: '+port);
 })