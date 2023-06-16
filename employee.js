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
View Employees
****************************************/
function ViewAllEmployees(){
  //connection.query('SELECT e.first_name "First Name", e.last_name "Last Name", r.title "Title", m.first_name "Manager First Name", m.last_name "Manager Last Name" FROM employee e,employee m, role r where (e.role_id = r.id) AND (e.manager_id=m.id)', await function (err, results) {
    db.query('SELECT e.first_name "First Name", e.last_name "Last Name", r.title "Title", m.first_name "Manager First Name", m.last_name "Manager Last Name" FROM employee e,employee m, role r where (e.role_id = r.id) AND (e.manager_id=m.id)', function (err, results) {
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
Add Employee
****************************************/
function AddEmployee(employeeFirstName,employeeLastName,employeeRole,employeeManager){
  //connection.query(`insert into employee (first_name,last_name,role_id,manager_id) values('${employeeFirstName}','${employeeLastName}','${employeeRole}','${employeeManager}')`, 
  db.query(`insert into employee (first_name,last_name,role_id,manager_id) values('${employeeFirstName}','${employeeLastName}','${employeeRole}','${employeeManager}')`, 
  function (err, results) {
    console.log("");
    if(err){
      console.log(err);
    }
    else{
    console.log(`Added ${employeeFirstName} to the database`)
    }
  });
}


/****************************************
Update Manager
 ****************************************/
function UpdateEmployeeManager(empID,newManager){
//  db.query(`update employee set manager_id = '${newManager}' where id='${empID}'`)
  //connection.query(`update employee set manager_id = '${newManager}' where id='${empID}'`, await function (err, results){
    db.query(`update employee set manager_id = '${newManager}' where id='${empID}'`, function (err, results){
  console.log("");
  if(err){
    console.log(err);
  }
  else{
  console.log("Updated employee's manager")
}
});
}

/****************************************
Update Role
****************************************/
function UpdateEmployeeRole(empID,newRole){

  //connection.query(`update employee set role_id = '${newRole}' where id='${empID}'`, await function (err, results){
    db.query(`update employee set role_id = '${newRole}' where id='${empID}'`, function (err, results){
  console.log("");
  if(err){
    console.log(err);
  }
  else {
  console.log("Updated employee's role")
};
});
}


/****************************************
Exports
 ****************************************/
module.exports= {ViewAllEmployees,AddEmployee,UpdateEmployeeManager,UpdateEmployeeRole}