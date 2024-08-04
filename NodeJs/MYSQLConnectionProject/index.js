
const mysql = require('mysql');
require('dotenv').config();
const con = mysql.createConnection({
    host: process.env.DB_host,
    user: process.env.DB_user,
    password: process.env.DB_password,
    database: process.env.DB_database1
});
console.log(process.env.database)
console.log(process.env.password)
console.log("Hi");
con.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return; // Exit the function if there's an error
    }
    console.log("Connected to database successfully");
    let createDB = "create database Testing";//for creating database
    // for creating table this is used
    let CreateTable = 'create table Student(id varchar(20),name varchar(50), email varchar(100) PRIMARY KEY)';//
    //  Altering table 
    let alterTable = 'ALTER TABLE student MODIFY COLUMN id INT(5)'
    // for inserting data
    // let id = [50001, 50002, 50003, 50004, 50005]
    // let stname = ['John', 'David', 'Jane', 'Tom', 'Mike']
    // const emailArray = [
    //     'example1@example.com',
    //     'example2@example.com',
    //     'example3@example.com',
    //     'example4@example.com',
    //     'example5@example.com'
    // ];

    //for (let i = 0; i < id.length; i++) {

    // for storing data in array
    let insertdata = 'insert into student (id, name , email) values ?'
    let values = [
        [50006, 'John Doe', 'john@example.com'],
        [50007, 'Alice Smith', 'alice@example.com'],
        [50008, 'Michael Johnson', 'michael@example.com'],
        [50009, 'Emily Brown', 'emily@example.com'],
        [50010, 'Daniel Wilson', 'daniel@example.com']
    ];
    // let inserdata = `insert into student  (id,name,email) values (${id[i]},'${stname[i]}','${emailArray[i]}') `;
    //  insertdata,[values]
    // updateing password
    const passwordArray = [
        [50001, "password1"],
        [50002, "password2"],
        [50003, "password3"],
        [50004, "password4"],
        [50005, "password5"],
        [50006, "password6"],
        [50007, "password7"],
        [50008, "password8"],
        [50009, "password9"],
        [50010, "password10"]
    ];

    for (let i = 0; i < 10; i++) {

        let query = `update student  set password="${passwordArray[i][1]}"where id=${passwordArray[i][0]}`


        con.query(query, (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return; // Exit the function if there's an error

            }

            console.log("Query result:", result);
        });
    }

});
