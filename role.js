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
function ViewAllRoles(){
    db.query('SELECT * FROM role', function (err, results) {
      console.table(results);
    });
}

function AddRole(roleName,roleSalary,roleDepartment){
  //db.query(`insert into department (name) values('${name}')`)
 //a="hello"
//  console.log(`insert into department (name) values('${departmentName}')`);
console.log(roleName+" : "+roleSalary+" : "+roleDepartment)
console.log(`Added ${roleName} to the database`) 
}

/****************************************
 ****************************************/
function UpdateEmployeeRole(empID,newRole){
  // Which employee's role do yu want to update?
  // Which role do you want to assign the selected employee?
  console.log(empID+" : "+newRole)
      console.log("Updated employee's role")
  };

module.exports={ViewAllRoles,AddRole,UpdateEmployeeRole}