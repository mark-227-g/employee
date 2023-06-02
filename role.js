// Include packages needed for this application
const mysql = require('mysql2');
const consoleTable = require('console.table')
const connection = require("./connection");


/****************************************
View Roles
****************************************/
async function ViewAllRoles(){
  connection.query('SELECT * FROM role', await function (err, results) {
    console.log("");
    if(err){
      console.log(err);
    }
    else{
    console.table(results);
    }
  });
}

/****************************************
Add Role
****************************************/
async function AddRole(roleName,roleSalary,roleDepartment){
  
  connection.query(`insert into role (title,salary,department_id) values('${roleName}','${roleSalary}','${roleDepartment}')`, 
  await function (err, results) {
          console.log("");
    if(err){
      console.log(err);
    }
    else{
      console.log(`Added ${roleName} to the database`)
    }
  });
}

/****************************************
Exports
 ****************************************/
module.exports={ViewAllRoles,AddRole}