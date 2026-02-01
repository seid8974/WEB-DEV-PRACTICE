const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/populationDB')
    .then(() => console.log("Database Connected..!"))
    .catch(err => console.log("Database Does Not Connected..!"));

const Author = mongoose.model('Author',new mongoose.Schema({
    name:String,
    bio:String,
    website:String
}));

const Course = mongoose.model('Course',new mongoose.Schema({
    name:String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }
}));


async function createAutor(name,bio,website){
    const author = new Author({
        name,
        bio,
        website
    });

    const result = await author.save();

    console.log(result);
};


async function createCourse(name,authorId){
    const course = new Course({
        name,
        author:authorId
    });

    const result = await course.save();

    console.log(result);
};


async function listCourse(){
    const course = await Course.find().populate('author','name -_id');

    console.log(course);
};


// createAutor( 'Seid Mohammed','Backend Developer','seid.dev');
// createCourse('hgf','697fc89e531ff490cb987482');
listCourse();