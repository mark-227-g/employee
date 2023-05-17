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
function ViewAllRoles(){
    console.log("3 start view all roles")
    console.log("3 View All Roles id title department_id, salary")
    dbQuery("select * from role")
      .then((results) => {
        console.table(results)
      })
      .catch((err)=>{
        console.log(err)
      })
    console.log("3 end view all roles")
    return
    
  }
  


/****************************************
 ****************************************/
const roleQuestions = [
    {
      type: "input",
      name: "inputRoleName",
      message: "What is the name of the role: "
    },
    {
      type: "input",
      name: "inputRoleSalary",
      message: "What is the salary of the role? "
    },
    {
      type: "input",
      name: "inputRoleDepartment",
      message: "Which department does the role belong to? "
      // show list of departments
    }
  ];
  
  function AddRole(){
    console.log("4 addrole")
    inquirer
    .prompt(roleQuestions)
    .then((answers) => {
      console.log("answers " + answers.inputAction);
    })
}
    /*
      .catch((error)=>{
        console.log("1 Error " + error)
        //return
      });
     // performAction(answers)
      //console.log("1 askmain after perform action")
      //return
      })
*/


  

  
exports.ViewAllRoles = ViewAllRoles  
exports.AddRole = AddRole