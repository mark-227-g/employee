// Include packages needed for this application
const mysql = require('mysql2');
const consoleTable = require('console.table')
//const connection = require("./connection");
/*const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});*/


/****************************************
View Roles
****************************************/
function ViewAllRoles(){
  //connection.query('SELECT * FROM role', await function (err, results) {
    db.query('SELECT * FROM role', function (err, results) {
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
function AddRole(roleName,roleSalary,roleDepartment){
  
  //connection.query(`insert into role (title,salary,department_id) values('${roleName}','${roleSalary}','${roleDepartment}')`, 
  db.query(`insert into role (title,salary,department_id) values('${roleName}','${roleSalary}','${roleDepartment}')`, 
  function (err, results) {
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