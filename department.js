// Include packages needed for this application
const mysql = require('mysql2');
const consoleTable = require('console.table');
const dbfunc = require('./dbfunctions');


/****************************************
View Departments 
****************************************/
function ViewAllDepartments(){
  const db=dbfunc.connecttodb();
  db.query('SELECT * FROM department', function (err, results)
  {
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
  const db=dbfunc.connecttodb();
  db.query('SELECT id,name FROM department', function (err, results)
  {
    if(err){
      console.log(err);
    }
    else{
      dbfunc.closedb(db);
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