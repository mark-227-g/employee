// Include packages needed for this application
const inquirer = require("inquirer");
const { default: Choices } = require("inquirer/lib/objects/choices");


/****************************************
 ****************************************/
 const actionTypes=[
  {id:'actionViewAllDepartments',name:'View All Departments'},
  {id:'actionViewAllRole',name:'View All Roles'},
  {id:'actionViewAllEmployees',name:'View All Employees'},

  {id:'actionAddDepartment',name:'Add Department'},
  {id:'actionAddRole',name:'Add Role'},
  {id:'actionAddEmployee',name:'Add Employee'},

  {id:'actionUpdateEmployeeRole',name:'Update Employee Role'},
  {id:'actionQuit',name:'Quit'}
];

/****************************************
 Create an array of questions for user input
 ****************************************/
const questions = [
  {
    type: "list",
    name: "inputAction",
    message: ": ",
    choices: actionTypes
  }
]

/****************************************
 ****************************************/
function ViewAllRole(){
  // id title department dsalary
};

/****************************************
 ****************************************/
function ViewAllDepartments(){
    // id   name
};

/****************************************
 ****************************************/
function ViewAllEmployees(){
  // id first_name last_name title department salary manager
};



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
    console.log('Added <name> to database');

};

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
  inquirer
  .prompt(roleQuestions)
  .then(response => {
    console.log(response);
    //createLogo(response);
    })
    console.log('Added <name> to the database');
};

/****************************************
 ****************************************/
const employeeQuestions = [
  {
    type: "input",
    name: "inputEmployeeFirstName",
    message: "What is the employee's first name? "
  },
  {
    type: "input",
    name: "inputEmployeeLastName",
    message: "What is the employee's last name? "
  },
  {
    type: "input",
    name: "inputEmployeeRole",
    message: "What is the employee's role? "
    //list of roles
  },
  {
    type: "input",
    name: "inputEmployeeFirstName",
    message: "Who is the employee's manager? "
    // list of managers
  }
]
function AddEmployee(){

  inquirer
  .prompt(employeeQuestions)
  .then(response => {
    console.log(response);
    //createLogo(response);
    })
    console.log('Added <firstname> <lastname> to database');
};

/****************************************
 ****************************************/
function UpdateEmployeeRole(){
// Which employee's role do yu want to update?
// Which role do you want to assign the selected employee?
    console.log("Updated emplooyee's role")
};
/****************************************
 ****************************************/
function UpdateEmployeeManager(){
    console.log("Updated employee's role")
    // Which role do you want to assign the selected employee?
};


/****************************************
 ****************************************/
  function performAction(response)
  {
    console.log("action" + (response.inputAction))
    switch (response.inputAction) 
    {
      case "Quit": {
        console.log("return true")
        return true;
      }
    }
    console.log("return False")
    return false;
    
  }

/****************************************
 Use inquirer to ask the questions
 ****************************************/
 function askQuestions(){
   
  inquirer
  .prompt(questions)
  .then(response => {
    console.log("ask Questions" +response.inputAction);
    return performAction(response);
    })
};
/****************************************
 function to initialize app init will first
 ask the questions. if the function is 
 successful then write the readme file
 ****************************************/
 function init() {
  console.log("init program")
  var done=false
    while(!done)
    {done=askQuestions()
    };
 
  }
  
  /****************************************
   The init function is run when the process 
   starts. It is the first thing run when
   the node application begins
   ****************************************/
  init();