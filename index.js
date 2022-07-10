const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const fs = require('fs');

const createPage  = require('./template')

let employees =[]

inquirer.prompt([
    {
    type: 'input',
    name: "name",
    message:"What is the name of this manager?"
},
    {
    type: 'input',
    name: "email",
    message:"What is the email of this manager?"
},
    {
    type: 'input',
    name: "id",
    message:"What is the id of this manager?"
},
    {
    type: 'input',
    name: "phone",
    message:"What is the phone number of this manager?"
},

]).then(
    answers => {
        console.log(answers);
        const { name, id, email, phone } = answers;
        const newEmployee = new Manager(name, id, email, phone);
        employees.push(newEmployee);
        console.log(employees)
        ask()

    }
)

const ask = () => {
    inquirer.prompt(
        {
            type: "list",
            name: "role",
            choices: ["intern", "engineer", "create page"],
            message: "which other employee you want to generate or do you want to create page?"
        }
    ).then(
        answer => {
            {
                switch (answer.role) {
                    case "intern":
                        return generateIntern();
                    case "engineer":
                        return generateEngineer();
                    case "create page":
                        return createPage(employees);
                    
            }
        }}
    )
}

function generateIntern(){
inquirer.prompt([
    {
    type: 'input',
    name: "name",
    message:"What is the name of this intern?"
},
    {
    type: 'input',
    name: "email",
    message:"What is the email of this intern?"
},
    {
    type: 'input',
    name: "id",
    message:"What is the id of this intern?"
},
    {
    type: 'input',
    name: "school",
    message:"What is the school of this intern?"
},

]).then(
    answers => {
        console.log(answers);
        const { name, id, email, school } = answers;
        const newEmployee = new Intern(name, id, email, school);
        employees.push(newEmployee);
        console.log(employees);
        ask()
        

    }
)
}

function generateEngineer(){
inquirer.prompt([
    {
    type: 'input',
    name: "name",
    message:"What is the name of this engineer?"
},
    {
    type: 'input',
    name: "email",
    message:"What is the email of this engineer?"
},
    {
    type: 'input',
    name: "id",
    message:"What is the id of this engineer?"
},
    {
    type: 'input',
    name: "github",
    message:"What is the github of this engineer?"
},

]).then(
    answers => {
        console.log(answers);
        const { name, id, email, github } = answers;
        const newEmployee = new Engineer(name, id, email, github);
        employees.push(newEmployee);
        console.log(employees)
        ask()

    }
)
}
