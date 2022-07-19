const inquirer = require('inquirer');
const fs = require('fs');
// const path = require('path');

const questions = [
    {
        name: 'title',
        message: 'Please enter the title of your project.'
    },
    {
        name: 'description',
        message: 'Please enter a discription of your project.'
    },
    {
        name: 'toc',
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
        message: 'Please enter the email you would like users to email you questions.'
    }
];

inquirer.prompt(questions).then((data) => {
return generateMarkdown(data); 
})
.then((dataword) => {
    fs.writeFile('readme.md', dataword, (err) =>{ 
    err ? console.log(err) : console.log('itworked')}
)}); 

// const string = JSON.stringify(employee);
// console.log(string);

// fs.writeFile(fileName, fileData, (err) => 
// err ? console.err(err) : console.log(fileData)
// );

// fs.writeFile('readme.md', content, err => {
//     if (err) {
//       console.error(err);
//     }
//     // file written successfully
//   });

function generateMarkdown(data) {
    return `
${data.title}
=======

${data.description}  
-----------

<ul>Table of Contents: 
* ${data.toc}  

Installation: ${data.installation}  

Usage: ${data.usage}  

License: ${data.license}  

Contributors: ${data.contributors}  

If you have any questions, you can reach me at this email: [link](mailto:${data.questions}).

`;
}

// module.exports = generateMarkdown;


// fs.writeFile(fileName, fileData, (err) => 
// err ? console.err(err) : console.log(fileData)
// );

// fs.writeFile('readme.md', content, err => {
//     if (err) {
//       console.error(err);
//     }
//     // file written successfully
//   });

