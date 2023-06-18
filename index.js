// Include packages needed for this application

const mysql = require('mysql2');
const inquirer = require('inquirer');
const dbfunc = require('./dbfunctions');
const department = require("./department")
const role = require("./role")
const employee = require("./employee")

var figlet = require("figlet");
//const connection = require("./connection");

const { default: Choices } = require("inquirer/lib/objects/choices");


/**************************************
 * department list for updating department
 ****************************************/
let departmentList=[];
function getDepartments(){ 
  const db=dbfunc.connecttodb();
  db.query('SELECT CAST(id AS CHAR) id, name FROM department', function (err, results)
  {
    console.log("");
    if(err){
      console.log(err);
    }
    else{
      departmentList.length=0;
      for (const row of results) {
        departmentList.push(row);
      }
    }
  })
    console.log( "after return "+departmentList )
    dbfunc.closedb(db);
  }
   
/**************************************
 * role list for updating role
 ****************************************/
var roleList=[];
function getRoles(){ 
  const db=dbfunc.connecttodb();
  db.query('SELECT CAST(id AS CHAR) id, name FROM roles', function (err, results)
  {
    roleList.length=0;
    if(err){
      console.log(err);
    }
    else{
      for (const row of results) {
        roleList.push(row);
        const id = row.id;
        const name = row.name;
      }
    }
    })
      dbfunc.closedb(db);
  }

/**************************************
 * employee list for updating manager
 ****************************************/
var employeeList=[];
function getEmployees(){ 
  const db=dbfunc.connecttodb();
  db.query('SELECT CAST(id AS CHAR) id, name FROM employees', function (err, results)
  {
    employeeList.length=0;
    if(err){
      console.log(err);
    }
    else{
      for (const row of results) {
        employeeList.push(row);
        const id = row.id;
        const name = row.name;
      }
    }
    })
    dbfunc.closedb(db);
}

/**************************************
 ****************************************/
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
  } ,
  
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
    choices:departmentList,
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
  }
]

/****************************************
 ****************************************/
function performAction(response)
{
  console.log('**performaction*****');
  getDepartments();
  getDepartments();
  
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
         role.AddRole(response.AddRole.inputRoleName,response.AddRole.inputRoleSalary, 
                      getIdByName(response.AddRole.inputRoleDepartment,departmentList))
          break;
    case 'AddEmployee': 
          employee.AddEmployee(response.AddEmployee.inputEmployeeFirstName,response.AddEmployee.inputEmployeeLastName,
                    getIdByName(response.AddEmployee.inputEmployeeRole,roleList),getIdByName(response.AddEmployee.inputEmployeeManager,employeeList));
          break;
    case 'UpdateEmployeeRole': 
          employee.UpdateEmployeeRole(getIdByName(response.UpdateEmployeeRole.Employee,employeeList),
                getIdByName(response.UpdateEmployeeRole.newRole,roleList));
          break;
    case  'UpdateEmployeeManager':
          employee.UpdateEmployeeManager(getIdByName(response.UpdateEmployeeManager.Employee,employeeList),
                getIdByName(response.UpdateEmployeeManager.newEmployeeManager,employeeList));
          break;
    case "Quit":
          process.exit(1)
          break;
  }
  console.log("done")
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

   // getChoices();
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