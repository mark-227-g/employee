// Include packages needed for this application
const mysql = require('mysql2');
const consoleTable = require('console.table')
const dbfunc = require('./dbfunctions');


/****************************************
View Roles
****************************************/
function ViewAllRoles(){
  const db=dbfunc.connecttodb();
  db.query('SELECT * FROM role', function (err, results) {
    console.log("");
    if(err){
      console.log(err);
      return;
    }
    else{
    console.table(results);
    dbfunc.closedb(db);
    }
  })
  return;
}

/****************************************
Add Role
****************************************/
function AddRole(roleName,roleSalary,roleDepartment){
  const db=dbfunc.connecttodb();
  db.query(`insert into role (title,salary,department_id) values('${roleName}','${roleSalary}','${roleDepartment}')`, 
  function (err, results) {
    if(err){
      console.log(err);
    }
    else{
      console.log(`Added ${roleName} to the database`)
      dbfunc.closedb(db);
    }
  });
}

/****************************************
Exports
 ****************************************/
module.exports={ViewAllRoles,AddRole}