const inquirer = require('inquirer');

const fs = require('fs');

const questions = [
    {
        name: 'title',
        message: 'Please enter the title of your project.'
    },
    {
        name: 'project description',
        message: 'Please enter a discription of your project.'
    },
    {
        name: 'table of Contents',
        message: 'Please enter a table of Contents.'
    },
    {
        name: 'installation',
        message: 'Please enter how to install your project.'
    },
    {
        name: 'usage',
        message: 'Please enter the usage of your project.'
    },
    {
        name: 'license',
        message: 'Please enter any license agreement that are applicable with your project.'
    },
    {
        name: 'contributors',
        message: 'Please enter names of people who helped with your project.'
    },
    {
        name: 'questions',
        message: 'Please enter any questions you have for the project.'
    },
]

inquirer.prompt(questions).then((data) => {
console.log(data)
});