// Include packages needed for this application
const inquirer = require("inquirer");
const mysql = require('mysql2');
const consoleTable = require('console.table')
const department = require("./department")
const role = require("./role")
const employee = require("./employee")

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

//const { default: Choices } = require("inquirer/lib/objects/choices");


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

function AddEmployee(){
/*
  inquirer
  .prompt(employeeQuestions)
  .then(response => {
    console.log(response);
    //createLogo(response);
    })
    */
    console.log('Added <firstname> <lastname> to database');
};

/****************************************
 ****************************************/
function UpdateEmployeeRole(){
// Which employee's role do yu want to update?
// Which role do you want to assign the selected employee?
    console.log("Updated employee's role")
};
/****************************************
 ****************************************/
function UpdateEmployeeManager(){
    console.log("Updated employee's manager")
    // Which role do you want to assign the selected employee?
};

/****************************************
 ****************************************/
  function performAction(response)
  {
    console.log("2 start perform action")
    console.log("2 action" + (response.inputAction))
    
    switch (response.inputAction) 
    {
      case 'View All Departments': 
            department.ViewAllDepartments();
            console.log("2 done")
            break;
      case 'View All Roles':
            role.ViewAllRoles(); 
            console.log("2 done")
            break;
      case 'View All Employees':
            employee.ViewAllEmployees(); 
            console.log("2 done")
            break;
      case 'Add Department':
            AddDepartment(); 
            break;
      case 'Add Role': 
            role.AddRole();
            break;
      case 'Add Employee': 
            AddEmployee();
            break;
      case 'Update Employee Role': 
            UpdateEmployeeRole();
            break;
      case  'Update Employee Manager':
            UpdateEmployeeManager();
            break;
      case "Quit":
            process.exit
            break;
    }
   // console.log("return False")
    
   // return false;

   console.log ("2 end perform action")
   askMainQuestions()
   return;
    
  }



/****************************************
 ****************************************/
const actionTypes=[
  'ViewAllDepartments',
  'ViewAllRoles',
  'ViewAllEmployees',

  'AddDepartment',
  'AddRole',
  'AddEmployee',

  'UpdateEmployeeRole',
  'UpdateEmployeeManager',
  'Quit'
];

/****************************************
 ****************************************/
 const mainQuestions = [
  {
    type: "list",
    name: "inputAction",
    message: "What would you like to do?",
    choices: actionTypes
  },
  {
    type: "input",
    name: "AddRole.inputRoleName",
    message: "What is the name of the role: "
  },
  {
    type: "input",
    name: "AddRole.inputRoleSalary",
    message: "What is the salary of the role? "
  },
  {
    type: "input",
    name: "AddRole.inputRoleDepartment",
    message: "Which department does the role belong to? "
    // show list of departments
  },
  {
    type: "input",
    name: "AddDepartment.inputDepartmentName",
    message: "What is the name of the department? "
  },
  {
    type: "input",
    name: "AddEmployee.inputEmployeeFirstName",
    message: "What is the employee's first name? "
  },
  {
    type: "input",
    name: "AddEmployee.inputEmployeeLastName",
    message: "What is the employee's last name? "
  },
  {
    type: "input",
    name: "AddEmployee.inputEmployeeRole",
    message: "What is the employee's role? "
    //list of roles
  },
  {
    type: "input",
    name: "AddEmployee.inputEmployeeManager",
    message: "Who is the employee's manager? "
    // list of managers
  },
  {
    type: "input",
    name: "UpdateEmployeeRole.inputEmployeeManager",
    message: "Who is the employee's manager? "
    // list of managers
  },
  {
    type: "input",
    name: "UpdateEmployeeManager.updateEmployeeRole",
    message: "Which role do you want to assign the selected employee? "
    // list of managers
  },



  

]

/****************************************
 Use inquirer to ask the questions
 ****************************************/
 function askMainQuestions(){
  console.log("1 start askmain")
  inquirer
  .prompt(mainQuestions)
  .then((answers) => {
    console.log("Action " + answers.inputAction);
    performAction(answers)
    console.log("1 askmain after perform action")
    //return
    })
  .catch((error)=>{
      console.log("1 Error " + error)
      //return
    });
    console.log("1 end askmain")
    //return




};
/****************************************
 
 ****************************************/
 function main() {
  console.log("***** Start main ******")

  askMainQuestions();
  console.log("***** end main ********")
  return;

  
  }
  
  /****************************************
   The main function is run when the process 
   starts. It is the first thing run when
   the node application begins
   ****************************************/
  main();