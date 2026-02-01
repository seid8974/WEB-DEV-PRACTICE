require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose').default;

// const saltRounds = 10;
// const bcrypt = require('bcrypt');

const app = express();
const port = 3333;


// console.log(process.env.APIKEY);
// const encrypt = require('mongoose-encryption');
// secretSchema.plugin(encrypt,{secret:process.env.SECRET_KEY,encryptedField:['password']});

// const md5 = require('md5');
// md5(req.body.password)

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.use(session({
    secret:'this is our secret.',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://localhost:27017/secretDB');

const secretSchema = new mongoose.Schema({
    username:String,
    password:String
});

secretSchema.plugin(passportLocalMongoose);

const Secret = mongoose.model('Secret' , secretSchema);


passport.use(Secret.createStrategy())

passport.serializeUser(Secret.serializeUser());
passport.deserializeUser(Secret.deserializeUser());


app.get('/',(req,res) => {
    res.sendFile(__dirname + '/public/pages/index.html');
});

app.get('/register',(req,res) => {
    res.sendFile(__dirname + '/public/pages/register.html');
});

app.get('/login',(req,res) => {
    res.sendFile(__dirname + '/public/pages/login.html');
})

app.get('/secrets',(req,res) => {

    if(req.isAuthenticated()){
         res.sendFile(__dirname + '/public/pages/secrets.html');
    }else{
        res.redirect('/login');
    }
   
})

app.get('/logout',(req,res) => {
    req.logout((err) => {
        if(err){
            console.log(err);
        }
        res.redirect('/');
    });
})


// app.post('/register',(req,res) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     Secret.register({username : username},password,(err,user) => {
//         if(err){
//             console.log(err);
//             res.redirect('/register');
//         }else{
//             passport.authenticate('local')(req, res, () => {
//               res.redirect('/secrets');
//             });
//         }
//         //  passport.authenticate('local', { successRedirect: '/secrets', failureRedirect: '/register' })
       
//         });


//     // bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
//     //     // Store hash in your password DB.
//     //     const newSecret = new Secret({
//     //         emailName: req.body.username,
//     //         password: hash
//     //     })

//     //     newSecret.save()
//     //         .then(() => {
//     //           res.redirect('/secrets');
//     //         })
//     //         .catch(err => console.log(err));
//     // });

// });

app.post('/register', (req, res) => {
    console.log('=== REGISTRATION START ===');
    console.log('Username:', req.body.username);
    console.log('Password:', req.body.password);
    
    const username = req.body.username;
    const password = req.body.password;

    Secret.register({username: username}, password, (err, user) => {
        if(err){
            console.log('REGISTRATION ERROR:', err);
            res.redirect('/register');
        } else {
            console.log('USER CREATED:', user.username);
            console.log('Attempting authentication...');
            
            passport.authenticate('local')(req, res, () => {
                console.log('Authentication callback executed');
                console.log('Is authenticated?', req.isAuthenticated());
                console.log('User object:', req.user);
                res.redirect('/secrets');
            });
        }
    });
});


app.post('/login' , passport.authenticate('local', {
            successRedirect: '/secrets',
            failureRedirect: '/login' 
        }));



app.listen(port,() => {
    console.log('http://localhost:'+port);
    console.log('the surver is running on port:'+ port);
})