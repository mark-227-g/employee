// Include packages needed for this application
const inquirer = require("inquirer");
const mysql = require('mysql2');
const department = require("./department")
const role = require("./role")
const employee = require("./employee")
var figlet = require("figlet");

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

const { default: Choices } = require("inquirer/lib/objects/choices");


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
let empID=1;

/****************************************
 ****************************************/
const actionTypes=[
  {id:'ViewAllDepartments',name:'ViewAllDepartments'},
  {id:'ViewAllRoles',name:'ViewAllRoles'},
  {id:'ViewAllEmployees',name:'ViewAllEmployees'},

  {id:'AddDepartment',name:'AddDepartment'},
  {id:'AddRole',name:'AddRole'},
  {id:'AddEmployee',name:'AddEmployee'},

  {id:'UpdateEmployeeRole',name:"UpdateEmployeeRole"},
  {id:'UpdateEmployeeManager',name:'UpdateEmployeeManager'},
  {id:'Quit',name:'Quit'}
];

/****************************************
 ****************************************/
 const mainQuestions = [
  {
    type: "list",
    name: "inputAction",
    message: "What would you like to do?",
    choices: actionTypes
  } ,
  
  {
    type: "input",
    name: "AddRole.inputRoleName",
    message: "What is the name of the role: ",
   when:(answers)=>answers.inputAction == 'AddRole'
  },
  {
    type: "input",
    name: "AddRole.inputRoleSalary",
    message: "What is the salary of the role? ",
    when:(answers)=> answers.inputAction == 'AddRole'
  },
  {
    type: "input",
    name: "AddRole.inputRoleDepartment",
    message: "Which department does the role belong to? ",
   when:(answers)=>answers.inputAction == 'AddRole'
    // show list of departments
  },
  {
    type: "input",
    name: "AddDepartment.inputDepartmentName",
    message: "What is the name of the department? ",
    when:(answers)=>answers.inputAction == 'AddDepartment'
  } ,
  {
    type: "input",
    name: "AddEmployee.inputEmployeeFirstName",
    message: "What is the employee's first name? ",
   when:(answers)=>answers.inputAction === 'AddEmployee'
  },
  {
    type: "input",
    name: "AddEmployee.inputEmployeeLastName",
    message: "What is the employee's last name? ",
   when:(answers)=>answers.inputAction === 'AddEmployee'
  },
  {
    type: "input",
    name: "AddEmployee.inputEmployeeRole",
    message: "What is the employee's role? ",
   when:(answers)=>answers.inputAction === 'AddEmployee'
    //list of roles
  },
  {
    type: "input",
    name: "AddEmployee.inputEmployeeManager",
    message: "Who is the employee's manager? ",
   when:(answers)=>answers.inputAction === 'AddEmployee'
    // list of managers
  },
  {
    type: "input",
    name: "UpdateEmployeeManager.newEmployeeManager",
    message: "Who is the employee's manager? ",
   when:(answers)=>answers.inputAction === 'UpdateEmployeeManager'
    // list of managers
  },
  {
    type: "input",
    name: "UpdateEmployeeRole.newEmployeeRole",
    message: "Which role do you want to assign the selected employee? ",
   when:(answers)=>answers.inputAction === 'UpdateEmployeeRole'
    // list of managers
  },
]


/****************************************
 ****************************************/






/****************************************
 ****************************************/
function performAction(response)
{
  
  switch (response.inputAction) 
  {
    case 'ViewAllDepartments':
          console.log("going to call department function") 
          department.ViewAllDepartments();
          break;
    case 'ViewAllRoles':
          role.ViewAllRoles(); 
          break;
    case 'ViewAllEmployees':
          employee.ViewAllEmployees(); 
          break;
    case 'AddDepartment':
          department.AddDepartment(response.AddDepartment.inputDepartmentName); 
          break;
    case 'AddRole': 
          role.AddRole(response.AddRole.inputRoleName,response.AddRole.inputRoleSalary,response.AddRole.inputRoleDepartment);
          break;
    case 'AddEmployee': 
          employee.AddEmployee(response.AddEmployee.inputEmployeeFirstName,response.AddEmployee.inputEmployeeLastName,response.AddEmployee.inputEmployeeRole,response.AddEmployee.inputEmployeeManager);
          break;
    case 'UpdateEmployeeRole': 
          employee.UpdateEmployeeRole(empID,response.UpdateEmployeeRole.newEmployeeRole);
          break;
    case  'UpdateEmployeeManager':
          employee.UpdateEmployeeManager(empID,response.UpdateEmployeeManager.newEmployeeManager);
          break;
    case "Quit":
          process.exit(1)
          break;
  }


 askMainQuestions()
 return;
  
}

/****************************************
 Use inquirer to ask the questions
 ****************************************/
 function askMainQuestions(){
  console.log("1 start ask main")

  const choices = department.inqChoices();
  console.log(choices)


  console.log(role.inqChoices())

  console.log(employee.inqChoices())
  inquirer
  .prompt(mainQuestions)
  .then((answers) => {
    console.log(answers.inputAction);
    performAction(answers)
    console.log("1 askmain after perform action")
    })
  .catch((error)=>{
      console.log("1 Error " + error)

    });
    console.log("1 end askmain")
};

/****************************************
 
 ****************************************/
 function main() {
/*
    console.log("***** Start main ******")
    figlet.text(
      "Employee Manager", 
      {
        font:"Rectangles"
      },
      function (err, data) {
        if (err) {
          console.log("Something went wrong...");
          console.dir(err);
          return;
        }
        console.log(data);
    });
*/
const choices = department.inqChoices();
  console.log(choices)
    
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