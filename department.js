// Include packages needed for this application
const mysql = require('mysql2');
const consoleTable = require('console.table')
const connection = require("./connection");


/****************************************
View Departments 
****************************************/
async function ViewAllDepartments(){
  connection.query('SELECT * FROM department', await function (err, results) {
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
async function AddDepartment(departmentName){
  connection.query(`insert into department (name) values('${departmentName}')`, 
  await function (err, results) {
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