// Include packages needed for this application

const mysql = require('mysql2');
const inquirer = require('inquirer');

const department = require("./department")
//const role = require("./role")
//////const employee = require("./employee")

var figlet = require("figlet");
//const connection = require("./connection");

const { default: Choices } = require("inquirer/lib/objects/choices");
/*
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME

});
/*
let departmentChoices = departments.map((department) => {
                  return {name: department.name, value: department.id};
              });
*/

/**************************************
 * role list for updating role
 ****************************************/
let roleList=[
  {id:'1',name:'Sales Lead'},
  {id:'2',name:'Lead Engineer'},
  {id:'3',name:'Accountant'}
];
/**************************************
 * department list for updating department
 ****************************************/
var departmentList=[
  {id:'1',name:'Sales'},
  {id:'2',name:'Engineering'},
  {id:'3',name:'Finance'}
];

/**************************************
 * employee list for updating manager
 ****************************************/
let employeeList=[
  {id:'1',name:'bob'},
  {id:'2',name:'sam'},
  {id:'3',name:'sally'}
];

/****************************************
Get Department list
****************************************/
/*
async function getDepartmentList(){
  connection.query('SELECT id, name FROM department', await function (err, results) {

    if(err){
      console.log(err);
    }
    else{
      //console.log( results);
      //departmentList=results;

      console.log("results: "+results)
      return results
      //departmentList=[results]
      //departmentList=results.map()
      
    
    console.log("mapped " + departmentList)
    console.log("mapped " + results)
    }

  });
}
function getChoices(){
  getDepartmentList()
}
function getIdByName(searchName,searchArr){
console.log(searchName);
console.log(searchArr)
function isName(list){
    return list.name===searchName;
  }
  const obj = searchArr.find(isName);
  if(obj){
    return obj.id;
  }
  else {
    return -1;
  }
}
/**************************************
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

 
const mainQuestions = [
  {
    type: "list",
    name: "inputAction",
    message: "What would you like to do?",
    choices: actionTypes
  } 
  /*
  {
    type: "input",
    name: "AddRole.inputRoleName",
    message: "What is the name of the role: ",
    when:(answers)=>{return answers.inputAction == 'AddRole'}
  },
  {
    type: "input",
    name: "AddRole.inputRoleSalary",
    message: "What is the salary of the role? ",
    when:(answers)=>{return answers.inputAction == 'AddRole'}
  },
  {
    type: "list",
    name: "AddRole.inputRoleDepartment",
    message: "Which department does the role belong to? ",
    choices: getDepartmentList(),
    when:(answers)=>{return answers.inputAction == 'AddRole'}
    
  },
  {
    type: "input",
    name: "AddDepartment.inputDepartmentName",
    message: "What is the name of the department? ",
    when:(answers)=>{return answers.inputAction == 'AddDepartment'}
  } ,
  {
    type: "input",
    name: "AddEmployee.inputEmployeeFirstName",
    message: "What is the employee's first name? ",
    when:(answers)=>{return answers.inputAction == 'AddEmployee'}
  },
  {
    type: "input",
    name: "AddEmployee.inputEmployeeLastName",
    message: "What is the employee's last name? ",
    when:(answers)=>{return answers.inputAction == 'AddEmployee'}
  },
  {
    type: "list",
    name: "AddEmployee.inputEmployeeRole",
    message: "What is the employee's role? ",
    choices: roleList,
    when:(answers)=>{return answers.inputAction == 'AddEmployee'}

  },
  {
    type: "list",
    name: "AddEmployee.inputEmployeeManager",
    message: "Who is the employee's manager? ",
    choices:employeeList,
    when:(answers)=>{return answers.inputAction == 'AddEmployee'}

  },
  {
    type: "list",
    name: "UpdateEmployeeManager.Employee",
    message: "Which employee? ",
    choices: employeeList,
    when:(answers)=>{return answers.inputAction == 'UpdateEmployeeManager'}
  },
  {
    type: "list",
    name: "UpdateEmployeeManager.newEmployeeManager",
    message: "Who is the employee's manager? ",
    choices: employeeList,
    when:(answers)=>{return answers.inputAction == 'UpdateEmployeeManager'}

  },
  {
    type: "list",
    name: "UpdateEmployeeRole.Employee",
    message: "Which employee? ",
    choices: employeeList,
    when:(answers)=>{return answers.inputAction == 'UpdateEmployeeRole'}
  },
  {
    type: "list",
    name: "UpdateEmployeeRole.newRole",
    message: "Which role do you want to assign the selected employee? ",
    choices: roleList,
    when:(answers)=>{return answers.inputAction == 'UpdateEmployeeRole'}
  },
  */
]

/****************************************
 ****************************************/
function performAction(response)
{
  console.log('*******');
  switch (response.inputAction) 
  {
    case 'ViewAllDepartments':
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
          role.AddRole(response.AddRole.inputRoleName,response.AddRole.inputRoleSalary
            ,getIdByName(response.AddRole.inputRoleDepartment,departmentList))
          break;
    case 'AddEmployee': 
          employee.AddEmployee(response.AddEmployee.inputEmployeeFirstName,response.AddEmployee.inputEmployeeLastName,getIdByName(response.AddEmployee.inputEmployeeRole,roleList),getIdByName(response.AddEmployee.inputEmployeeManager,employeeList));
          break;
    case 'UpdateEmployeeRole': 
          employee.UpdateEmployeeRole(getIdByName(response.UpdateEmployeeRole.Employee,employeeList),getIdByName(response.UpdateEmployeeRole.newRole,roleList));
          break;
    case  'UpdateEmployeeManager':
          employee.UpdateEmployeeManager(getIdByName(response.UpdateEmployeeManager.Employee,employeeList),getIdByName(response.UpdateEmployeeManager.newEmployeeManager,employeeList));
          
          break;
    case "Quit":
          process.exit(1)
          break;
  }

  main();
} 

/****************************************
 Use inquirer to ask the questions
 ****************************************/
  
  /****************************************
   The main function is run when the process 
   starts. It is the first thing run when
   the node application begins
   ****************************************/
  
  const main = () =>{
    console.log("env: "+process.env.DB_HOST);
    console.log("env: "+process.env.DB_USER);
    console.log("env: "+process.env.DB_PASSWORD);
   // getChoices();
    console.log("")
    inquirer
    .prompt(mainQuestions) 
    .then((answers) => {
      console.log (answers),
      performAction(answers)
      })
  }
  
  function splash(){
    console.log(figlet);
    main();
  }
  main();