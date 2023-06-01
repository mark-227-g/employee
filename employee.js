// Include packages needed for this application
const mysql2 = require('mysql2');
const util = require("util");
const connection = require("./connection");
const consoleTable = require('console.table')

/****************************************
View Employees
****************************************/
async function ViewAllEmployees(){
  connection.query('SELECT * FROM employee', await function (err, results) {
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
async function AddEmployee(employeeFirstName,employeeLastName,employeeRole,employeeManager){
  connection.query(`insert into employee (first_name,last_name,role_id,manager_id) values('${employeeFirstName}','${employeeLastName}','${employeeRole}','${employeeManager}')`, 
  await function (err, results) {
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
async function UpdateEmployeeManager(empID,newManager){
//  db.query(`update employee set manager_id = '${newManager}' where id='${empID}'`)
  connection.query(`update employee set manager_id = '${newManager}' where id='${empID}'`, await function (err, results){
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
async function UpdateEmployeeRole(empID,newRole){

  connection.query(`update employee set role_id = '${newRole}' where id='${empID}'`, await function (err, results){
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