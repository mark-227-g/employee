// Include packages needed for this application
const inquirer = require("inquirer");
const mysql = require('mysql2');

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
// make query a promise
function dbQuery(sql) {
    return new Promise((resolve,reject) => {
      db.query(sql,(err,results,fields) => {
        if (err) {
          reject(err)
        }
        else {
          resolve(results)
        }
      })
    })
  }

/****************************************
 ****************************************/
function ViewAllDepartments(){
    console.log("3 start view all department")
    console.log("3 View All Roles id title department_id, salary")
    dbQuery("select * from department")
      .then((results) => {
        console.table(results)
        return
      })
      .catch((err)=>{
        console.log(err)
      })
    console.log("3 end view all department")
    return
}

  /****************************************
   ****************************************/
  const departmentQuestions = [
    {
      type: "input",
      name: "inputDepartmentName",
      message: "What is the name of the department? "
    }
  ]
  function AddDepartment(){
    inquirer
    .prompt(departmentQuestions)
    .then(response => {
      console.log(response);
      //createLogo(response);
      })
      console.log('Added <department> to database');
  
  };

  exports.ViewAllDepartments = ViewAllDepartments
  