// Include packages needed for this application
const mysql = require('mysql2');
console.log("env: "+process.env);
const consoleTable = require('console.table');
const dbfunc = require('./dbfunctions');


/****************************************
View Departments 
****************************************/
function ViewAllDepartments(){
  //connection.query('SELECT * FROM department', await function (err, results) 
  console.log('run query')
  const db=dbfunc.connecttodb();
  db.query('SELECT * FROM department', function (err, results)
  {
    console.log("");
    if(err){
      console.log(err);
    }
    else{
      console.table(results)
    }
   dbfunc.closedb(db);
  });
}

/****************************************
View Departments 
****************************************/
function getDepartments(){
  //connection.query('SELECT * FROM department', await function (err, results) 
  console.log('run query')
  const db=dbfunc.connecttodb();
  db.query('SELECT id,name FROM department', function (err, results)
  {
    console.log("");
    if(err){
      console.log(err);
    }
    else{
      dbfunc.closedb(db);
      console.log(results)
      return (results);
    }
   
  });
}

/****************************************
Add Department 
****************************************/
function AddDepartment(departmentName){
  //connection.query(`insert into department (name) values('${departmentName}')`, 
  //await function (err, results) 
  const db=dbfunc.connecttodb();
  db.query(`insert into department (name) values('${departmentName}')`, function (err, results)
  {
    console.log("");
    if(err){
      console.log(err);
    }
    else{
    console.log(`Added ${departmentName} to the database`)
    }
  });
  dbfunc.closedb(db)
}


/****************************************
Exports
 ****************************************/
module.exports={ViewAllDepartments,AddDepartment}