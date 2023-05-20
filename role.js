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
View Roles
****************************************/
function ViewAllRoles(){
    db.query('SELECT * FROM role', function (err, results) {
      console.table(results);
    });
}

/****************************************
Add Role
****************************************/
function AddRole(roleName,roleSalary,roleDepartment){
  db.query(`insert into role (title,salary,department_id) values('${roleName}','${roleSalary}','${roleDepartment}')`)
  console.log(`Added ${roleName} to the database`) 
}
/****************************************

Exports
 ****************************************/
module.exports={ViewAllRoles,AddRole}