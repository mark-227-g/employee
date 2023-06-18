// Include packages needed for this application
const mysql = require('mysql2');
const dbfunc = require('./dbfunctions');

/****************************************
View Employees
****************************************/
function ViewAllEmployees(){
  console.log("viewallemployees")
  const db=dbfunc.connecttodb();
  //connection.query('SELECT e.first_name "First Name", e.last_name "Last Name", r.title "Title", m.first_name "Manager First Name", m.last_name "Manager Last Name" FROM employee e,employee m, role r where (e.role_id = r.id) AND (e.manager_id=m.id)', await function (err, results) {
    db.query('SELECT e.first_name "First Name", e.last_name "Last Name", r.title "Title", m.first_name "Manager First Name", m.last_name "Manager Last Name" FROM employee e,employee m, role r where (e.role_id = r.id) AND (e.manager_id=m.id)',  (err, results) => {
      if (err) {
        console.log("select error " +err);
        return;
      }
      
      console.table(results)
  
      db.end((err)=> {
        if (err) {
          console.log("Error "+err)
        }
        console.log("closed")
        return;
      })
    })
  };



/****************************************
Add Employee
****************************************/
function AddEmployee(employeeFirstName,employeeLastName,employeeRole,employeeManager){
  const db=dbfunc.connecttodb();
  //connection.query(`insert into employee (first_name,last_name,role_id,manager_id) values('${employeeFirstName}','${employeeLastName}','${employeeRole}','${employeeManager}')`, 
  db.query(`insert into employee (first_name,last_name,role_id,manager_id) values('${employeeFirstName}','${employeeLastName}','${employeeRole}','${employeeManager}')`, 
  function (err, results) {
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
function UpdateEmployeeManager(empID,newManager){
  const db=dbfunc.connecttodb();
//  db.query(`update employee set manager_id = '${newManager}' where id='${empID}'`)
  //connection.query(`update employee set manager_id = '${newManager}' where id='${empID}'`, await function (err, results){
    db.query(`update employee set manager_id = '${newManager}' where id='${empID}'`, function (err, results){
  console.log("");
  if(err){
    console.log(err);
  }
  else{
  console.log("Updated employee's manager")
  dbfunc.closedb(db);
}
});
}

/****************************************
Update Role
****************************************/
function UpdateEmployeeRole(empID,newRole){
  const db=dbfunc.connecttodb();
  //connection.query(`update employee set role_id = '${newRole}' where id='${empID}'`, await function (err, results){
    db.query(`update employee set role_id = '${newRole}' where id='${empID}'`, function (err, results){
  console.log("");
  if(err){
    console.log(err);
  }
  else {
  console.log("Updated employee's role")
  dbfunc.closedb(db);
};
});
}


/****************************************
Exports
 ****************************************/
module.exports= {ViewAllEmployees,AddEmployee,UpdateEmployeeManager,UpdateEmployeeRole}