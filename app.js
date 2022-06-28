const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generate-site');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
              if (titleInput) {
                return true;
              } else {
                console.log('Please enter the title of your project!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'description',
            message: 'What is a description for your project? (Required)',
            validate: description => {
              if (description) {
                return true;
              } else {
                console.log('Please enter a description for your project!');
                return false;
              }
            }
          },
          {
            type: "input",
            message: "How do you Install your application?",
            name: "install",
            validate: installInput => {
                if (installInput) {
                  return true;
                } else {
                  console.log('Please enter how to install application!');
                  return false;
                }
              }
         },
         {
            type: "input",
            message: "How do you use your application?",
            name: "usageInput",
            validate: usageInput => {
                if (usageInput) {
                  return true;
                } else {
                  console.log('Please enter how to use application!');
                  return false;
                }
              }
         },
         {
            type: "checkbox",
            message: "What License did you use for this repository?",
            choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"],
            name: "license",
        },
        {
            type: "input",
            message: "How do users update the tests for this application?",
            name: "tests"
        },
          {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your GitHub username!');
                return false;
              }
            }
          },
          {
            type: "input",
            message: "What is your email address where users and contributors can send questions?",
            name: "email",
            validate: email => {
                if (email) {
                  return true;
                } else {
                  console.log('Please enter your email!');
                  return false;
                }
              }
        },
    ])
}

promptUser()

.then(pageHTML => {
    console.log(pageHTML);
    return writeFile(pageHTML);
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
})
.then(copyFileResponse => {
    console.log(copyFileResponse);
    return copyFile();
})
.then(copyFileResponse => {
    console.log(copyFileResponse);
})
.catch(err => {
    console.log(err);
});





  
