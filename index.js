
const fs = require('fs');
const axios = require("axios");
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML");
const pdf = require('html-pdf');


function init() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "username",
                message: "What is your github user name?"

            },
            {
                type: "list",
                name: "color",
                message: "What is your favorite color?",
                choices: ["green", "blue", "pink","red",]
            }
        ])
        .then(answers => {
            
            console.log(answers)

            axios.get('https://api.github.com/users/' + answers.username)
                .then(function (response) {
                    
                    // Get the response axios sent and set varibles to support pdf file generation
                    var color = answers.color
                    var starsUsers = 0
                    var filehtml = generateHTML({ ...answers, starsUsers, ...response.data })
                    const options = { format: 'Letter' };

                    // Generate pdf file
                    pdf.create(filehtml, options).toFile('./generateHTML.pdf', function (err, res) {
                        if (err) return console.log(err);
                        console.log(res);
                    })
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })


        });
}

init();