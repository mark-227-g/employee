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
View Departments 
****************************************/
function ViewAllDepartments(){
    db.query('SELECT * FROM department', function (err, results) {
    console.table(results);});
}
/****************************************
Add Department 
****************************************/
function AddDepartment(departmentName){
  db.query(`insert into department (name) values('${departmentName}')`)
  console.log(`Added ${departmentName} to the database`) 
}
/****************************************
Get Choices
****************************************/
/*
async function inqChoicesSQL(){
  const response=  function(ms){
    return new Promise(function (res){
      db.query('SELECT id,name FROM department');
      return(res)
    })
  }
  return(response);
}
*/
const inqChoicesSQL = function (){
  return new Promise(function(){
    //return db.query('SELECT id,name FROM department');
    return("this is the query return");
  })
  

}

async function inqChoices(){
  await inqChoices();
  return(response);
}







/****************************************
Exports
 ****************************************/
module.exports={ViewAllDepartments,AddDepartment,inqChoices}