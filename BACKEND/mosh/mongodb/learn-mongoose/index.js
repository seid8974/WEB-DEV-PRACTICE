const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/coursesDb')
.then(() => console.log('Database is Conected!'));

const courseSchema = new mongoose.Schema({
    name: String,
    author:String,
    tag: [String],
    date: {
        type: Date, 
        default: Date.now
    },
    isPublished:Boolean
});

const Courses = mongoose.model('Courses',courseSchema);



    async function setCourse(){
        try{
            const course = new Courses({
                name:'react.js course',
                tag:['react.js','frontend'],
                author:'seid',
                isPublished:true
            })

            const createdCourse = await course.save();
            console.log(createdCourse);

        }catch(err){
            console.log(err);
        }
    };


    async function getCourse(){
        // try{
        //     const resultCourse = await Courses.find();
        //     console.log(resultCourse);
        // }catch(err){
        //     console.log(err);
        // }


        const pageNumber = 4;
        const pageSize = 5;

        try{
            const resultCourse = await Courses.find({author:'seid'})
            // .skip((pageNumber-1) * pageSize)
            .limit(pageSize)
            .sort({name:1})
            .select({name:1,tag:1,id:-1})
            // .countDocuments()
            console.log(resultCourse);
        }catch(err){
            console.log(err);
        }
    };


    // setCourse();
    // getCourse();