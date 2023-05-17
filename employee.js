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
function ViewAllEmployees(){
    console.log("3 start view all employee")
    console.log("3 View All Roles id title department_id, salary")
    dbQuery("select * from employee")
      .then((results) => {
        console.table(results)
      })
      .catch((err)=>{
        console.log(err)
      })
    console.log("3 end view all employee")
    return
}
  
exports.ViewAllEmployees = ViewAllEmployees