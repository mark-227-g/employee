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
function ViewAllDepartments(){
    db.query('SELECT * FROM department', function (err, results) {
      console.table(results);
    });
}
/****************************************
 ****************************************/
function AddDepartment(departmentName){
  //db.query(`insert into department (name) values('${name}')`)
 a="hello"
 // console.log(`insert into department (name) values('${departmentName}')`);
 console.log(`Added ${departmentName} to the database`) 
}
module.exports={ViewAllDepartments,AddDepartment}