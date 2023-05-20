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
 ****************************************/
function ViewAllEmployees(){
    db.query('SELECT * FROM employee', function (err, results) {
      console.table(results);
    });
}

/****************************************
 ****************************************/
function AddEmployee(employeeFirstName,employeeLastName,employeeRole,employeeManager){
  //db.query(`insert into department (name) values('${name}')`)
 //a="hello"
//  console.log(`insert into department (name) values('${departmentName}')`);
console.log(employeeFirstName+" : "+employeeLastName+" : "+employeeRole+" : "+employeeManager)
console.log(`Added ${employeeFirstName} to the database`) 
}

/*
function AddEmployee(){
  
    inquirer
    .prompt(employeeQuestions)
    .then(response => {
      console.log(response);
      //createLogo(response);
      })
      
      console.log('Added <firstname> <lastname> to database');
  };
  */

/****************************************
 ****************************************/
function UpdateEmployeeManager(empID,newManager){
  console.log(empID+" : "+newManager)
  console.log("Updated employee's manager")
  // Which role do you want to assign the selected employee?
};
  
module.exports= {ViewAllEmployees,AddEmployee,UpdateEmployeeManager}