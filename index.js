// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { toNamespacePath } = require('path');

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "What license would you like to use?",
    "What is the description of your project?",
    "Please provide detailed instructions for the installation of your project.",
    "Explain how to use for this application.",
    "What are the contribution guidelines for your project?",
    "What are the test instructions for your project?",
    "What is your Github username?",
    "What is your email address?",
    "Please provide the link to your application."
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
        if (err) {
            throw err;
        }
        console.log("README file has been generated!")
    });
};

// TODO: Create a function to initialize app
function init() {
    const [title, license, description, installation, usage, contribution, tests, github, email, link] = questions;
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: questions[0],
        },
        {
            type: "list",
            name: "license",
            message: questions[1],
            choices: ["MIT", "Apache", "GPL", "BSD", "None"],
        },
        {
            type: "input",
            name: "description",
            message: questions[2],
        },
        {
            type: "input",
            name: "installation",
            message: questions[3],
        },
        {
            type: "input",
            name: "usage",
            message: questions[4],
        },
        {
            type: "input",
            name: "contribution",
            message: questions[5],
        },
        {
            type: "input",
            name: "tests",
            message: questions[6],
        },
        {
            type: "input",
            name: "github",
            message: questions[7],
        },
        {
            type: "input",
            name: "email",
            message: questions[8],
        },
        {
            type: "input",
            name: "link",
            message: questions[9],
        },
    ])
        .then((data) => generateMarkdown(data))
        .then((data) => writeToFile("README.md", data))
    };

// Function call to initialize app
init();
