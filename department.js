// Include packages needed for this application
const mysql = require('mysql2');
console.log("env: "+process.env);
const consoleTable = require('console.table')
const connection = require("./connection");
function connect(){
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME

});
};

/****************************************
View Departments 
****************************************/
function ViewAllDepartments(){
  //connection.query('SELECT * FROM department', await function (err, results) 
  db.query('SELECT * FROM department', function (err, results)
  {
    console.log("");
    if(err){
      console.log(err);
    }
    else{
      console.table(results)
    }
  });
}

/****************************************
Add Department 
****************************************/
function AddDepartment(departmentName){
  //connection.query(`insert into department (name) values('${departmentName}')`, 
  //await function (err, results) 
  db.query(`insert into department (name) values('${departmentName}')`, function (err, results)
  {
    console.log("");
    if(err){
      console.log(err);
    }
    else{
    console.log(`Added ${departmentName} to the database`)
    }
  });
}


/****************************************
Exports
 ****************************************/
module.exports={ViewAllDepartments,AddDepartment}