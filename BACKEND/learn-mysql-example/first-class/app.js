const express = require('express');
const mySql = require('mysql');
const bodyParser = require('body-parser');
const port = 4321;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));




const mySqlConnection = mySql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",
        database:"seid4"
    }
)

mySqlConnection.connect((err) => {
    if(err){
        console.log(`the error of connection is : ${err}`);
    }else{
        console.log('connected');
    }

    // mySqlConnection.query(
    //     `CREATE DATABASE IF NOT EXISTS seid4`,(err) => {
    //     if(err){
    //         console.log('error creation of database..' + err);
    //     }else{
    //         console.log('database creation successfull');
    //     }
    // })

    
    // mySqlConnection.changeUser({ database: 'seid4' }, (err) => {
    //     if (err) console.log('Error switching DB: ' + err);
    //     else console.log('Using database seid4');
    //   });


})




app.get('/',(req,res) => {
    res.send("<h1>Localhost Page</h1>");
})


app.get('/create-table',(req,res) => {
    
    let message ="create table !";

  const person = `
    CREATE TABLE IF NOT EXISTS person(
      person_id INT AUTO_INCREMENT,
      person_name VARCHAR(20) NOT NULL,
      person_email VARCHAR(20) NOT NULL,
      PRIMARY KEY (person_id)
    );
  `;

  const address = `
    CREATE TABLE IF NOT EXISTS address(
      address_id INT AUTO_INCREMENT,
      person_id INT NOT NULL, 
      address_name VARCHAR(100) NOT NULL,
      PRIMARY KEY (address_id),
      FOREIGN KEY (person_id) REFERENCES person(person_id)
    );
  `;

  const service = `
    CREATE TABLE IF NOT EXISTS services(
      service_id INT AUTO_INCREMENT,
      person_id INT NOT NULL,
      service_name VARCHAR(100) NOT NULL,
      PRIMARY KEY (service_id),
      FOREIGN KEY (person_id) REFERENCES person(person_id)
    );
  `;

    mySqlConnection.query(person,(err) => {
    if(err){
        console.log(`error person: ${err}`);
    }else {
        console.log(' person table created');
    }
   });

   mySqlConnection.query(address,(err,result,fields) => {
     if(err){
        console.log(`error address: ${err}`);
    }else {
        console.log(' address table created');
    }
   });

   mySqlConnection.query(service,(err) => {
        if(err){
        console.log(`error survice: ${err}`);
    }else {
        console.log(' service table created');
    }
   })

   res.send(message);
})




app.post("/contact-form",(req,res) => {


  console.log(req.body);
   

        const {name,email,address,services} = req.body;

        let insertDataName = `
            INSERT INTO person (person_name,person_email) VALUES (?,?) `;
        

        mySqlConnection.query(insertDataName, [name,email] , (err,results) => {
            if(err){
                console.log(`error insert ${err}`);
            }else{
                console.table(results);
            }


              let id = results.insertId;
        console.log("id ->>> " + id);


        let insertAddress = `
            INSERT INTO address (person_id,address_name) VALUES (?,?)`;

        mySqlConnection.query(insertAddress,[id,address],(err,results) => {
            if(err){
                console.log("insert address error:" + err);
            }else{
                console.table(results);
            }
        })


         let insertService = `
            INSERT INTO services (person_id,service_name) VALUES (?,?)`;

        mySqlConnection.query(insertService,[id,services],(err,results) =>{
            if(err){
                console.log("insert survice error :" + err);
            }else{
                console.table(results);
            }
        })



        })

      

        res.send("Form data received and saved!");

})

app.get('/customers-detail-info',(req,res) => {
    let showResult = "SELECT * FROM person JOIN address ON person.person_id = address.person_id JOIN  services ON person.person_id = services.person_id ";

    mySqlConnection.query(showResult,(err,results) => {
        if(err){
            console.log(`showing result error is : + ${err}`)
        }
            console.log(results);
            res.json(results);
        
    })
})



app.listen(port,(err) => {
    if(err){
        console.log(`the error of listenning server is : ${err}`);
    }else{
    console.log(`the surver is running on the port of : ${port}`);
    }
})