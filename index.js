const questions = [
  
];

function writeToFile(fileName, data) {
 
}

function init() {

var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
    {
      type: "input",
      message: "What is your username?",
      name: "username"
    },
    {
        type: "list",
        message: "What is your favorite color?",
        name: "colors",
        choices: [
          "Green", 
          "Blue", 
          "Pink", 
          "Red"
        ]
    },
]).then(function(err) {
  
      if (err) {
        return console.log(err);
      }
  
      console.log(name);
      
    });
}    
init(); 