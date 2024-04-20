#! /usr/bin/env node

import inquirer from "inquirer"
let todos =[];
let condition = true

while (condition)

{let addTask =await inquirer.prompt([{
    name:"task",
    type:"input",
    message:"what you want to add in todo list?"
},

{name:"addMore",
type:"confirm",
message:"do you want to add more ?",
default:"false"}]);

todos.push(addTask.task);
condition = addTask.addMore;
console.log(todos);
}