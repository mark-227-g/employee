// Include packages needed for this application
const mysql = require('mysql2');
const consoleTable = require('console.table')

// Connect to database
const db =  mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'BootCamp',
      database: 'tracker_db'
    })

/****************************************
View Employees
****************************************/
function ViewAllEmployees(){
  db.query('SELECT * FROM employee', function (err, results) {
    console.table(results);
  });
}

/****************************************
Add Employee
****************************************/
function AddEmployee(employeeFirstName,employeeLastName,employeeRole,employeeManager){
db.query(`insert into employee (first_name,last_name,role_id,manager_id) values('${employeeFirstName}','${employeeLastName}','${employeeRole}','${employeeManager}')`)
console.log(`Added ${employeeFirstName} to the database`) 
}

/****************************************
Update Manager
 ****************************************/
function UpdateEmployeeManager(empID,newManager){
  db.query(`update employee set manager_id = '${newManager}' where id='${empID}'`)
  console.log("Updated employee's manager")
};

/****************************************
Update Role
****************************************/
function UpdateEmployeeRole(empID,newRole){
  db.query(`update employee set role_id = '${newRole}' where id='${empID}'`)
   console.log("Updated employee's role")
};

/****************************************
Get Choices
****************************************/
function inqChoices(){
    db.query('SELECT id,first_name,last_name FROM employee', function (err, results) {
      return(results);});
  }

/****************************************
Exports
 ****************************************/
module.exports= {ViewAllEmployees,AddEmployee,UpdateEmployeeManager,UpdateEmployeeRole,inqChoices}