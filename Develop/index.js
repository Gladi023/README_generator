// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const util = require('util');
const generate = require('./utils/generateMarkdown.js');
const path = require('path');
//const writeFileAsync = util.promisify(fs.writeFile);



// TODO: Create an array of questions for user input
//const init = () =>
inquirer
  .prompt([
      {
          type:"input",
          name: "author",
          message: "What is the author's name?"
      },
      {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?"
      },
      {
        type: "input",
        name: "title",
        message: "What is your project title?"
      },
      {
        type: "input",
        name: "description",
        message: "Please write a brief description of your project:"
      },
      {
        type: "list",
        name: "license",
        message: "What kind of license shopuld your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
      },
      {
        type: "input",
        name: "installations",
        message: "What command should be run to install dependencies?"
      },
      {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?"
      },
      {
        type: "input",
        name: "usage",
        message: " What does the user need to know about using the repo?"
      },
      {
        type: "input",                                                                                     
        name: "contribute",
        message: "What does the user need to know about contributing to the repo?"
      },
  ])

  .then((response) => {
    console.log({response});
    filesystem.writeFile("README.md", JSON.stringify(exclamation + closer, null, '\t' ), (err) =>
    err ? console.log(err) : console.log('success!')
    );
    return fs.writeFileSync(path.join (process.cwd(), "README.md"), generate(response));
  });

  


  //init()
//.then((data) => writeFileAsync('generateREADME.md', generateMD(data)))
  //.then(() => console.log('succesfully wrote to index.html'))
  //.catch((err) => console.error(err));

  //function generateMD(data){
    //return`# ${data.title}
    //${badge}
    //${data.description}
   // ## Table of contents:
  //   * [Installation](#installation)
  //   * [Usage](#usage)
  //   * [License](#license)
  //   [Contributing](#contributing)
  //   * [Tests](#tests)
  //   * [Questions](#questions)
  //   ### Installation:
  //   In order to install the necessary dependencies, open the console and run the following :
  //   \`\`\`${data.installations}\`\`\`
  //   ### Usage:
  //   ${data.usage}
  //   ### License:
  //   This project is licensed under:
  //   ${data.license}
  //   ### Contributing:
  //   ${data.contribute}
  //   ### Tests:
  //   In order tko test open the console and run the following:
  //   \`\`\`${datat.tests}\`\`\`
  //   ### Questions:
  //   If you have questions contact me on [GitHub](https://github.com/${data.username}) or contact ${data.author} at ${data.email}`
  // }


  //.then((response) => {

    // Use user feedback for... whatever!!
//return fs.writeFileSync(path.join (process.cwd(), "README.md"), generate(response));
//});

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app


// Function call to initialize app
//init();
