//-- initialized  repository with a `package.json` file by running `npm init -y`.
//-- installed inquirer and added it to list of dependencies by running `npm i inquirer --save`.
//--PW Inquirer v9 and higher are native esm modules, this mean you cannot use the commonjs syntax require('inquirer') anymore. 



// get fs
import * as fs from 'fs';

// get path
import * as path from 'path';

// get inquirer

import inquirer from 'inquirer';

// get util 

import * as util from 'util';

const writeFileAsync = util.promisify(fs.writeFile);

const readFileAsync = util.promisify(fs.readFile);

// get generateMarkdown code and the license list

import generateMarkdown from './utils/generateMarkdown.js';

import { licenseArr } from './utils/license.js'; 

// get the README.md version number from ./utils/fileNumCounter.log and set the file name for current run

const fileNum = await readFileAsync('./readmes/fileNumCounter.log', 'utf8');

let fileName = `README` + fileNum + `.md`;
console.log("fileName:",fileName);

// Set welcome messages

let welcomeMsg = `\n\n\n✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷ \n\n`
   + `                 👯‍♂️🕺🏻👯‍♀️ GOOD DAY GOOD DAY! 👯‍♀️🕺🏻👯‍♂️\n`
   + `  Let's get WERKING and write an ELEGANZA EXTRAVAGANZA README.md! \n \n`
   + `✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷ \n\n`

let goodByeMsg = `\n\n\n✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷ \n\n`
   + `                🏅  ConDRAgtulations! 🏅 \n`
   + `  You have successfully created a very Dashing` + fileName + `! \n`
   + `               Now, you can shashay away! \n \n`
   + `✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷ \n\n`   

// set array of questions objects for the user to be used by inquirer

const questionsArr = [
   {
      type: 'input',
      message: 'What is the name of your super duper project?',
      name: 'projName',
   }, 
   // {
   //    type: 'editor',
   //    message: 'Write a short description explaining the what, why, and how of your project.',
   //    name: 'projDesc',
   //    validate(text) {
   //       if (text.split('\n').length < 2) {
   //          return 'Must be at least 2 lines.';
   //       }
   //       return true;
   //    },
   //    waitUserInput: true,
   // }, 
   {
      type: 'input',
      message: 'What is the URL of your deployed project (enter full path including https://)?',
      name: 'projDeployURL',
   }, 
   // {
   //    type: 'editor',
   //    message: 'Provide a step-by-step description of how to get the development environment running:',
   //    name: 'projInstall',
   //    validate(text) {
   //       if (text.split('\n').length < 2) {
   //          return 'Must be at least 2 lines.';
   //       }
   //       return true;
   //    },
   //    waitUserInput: true,
   // }, 
   // {
   //    type: 'editor',
   //    message: 'Provide instructions and examples for use. Path of screenshots to be provided in next prompt.',
   //    name: 'projUsage',
   //    validate(text) {
   //       if (text.split('\n').length < 2) {
   //          return 'Must be at least 2 lines.';
   //       }
   //       return true;
   //    },
   //    waitUserInput: true,
   // }, 
   {
      type: 'input',
      message: 'What is the path and file name of your first screen dump of your project?',
      name: 'projScreenDump1',
   }, 
   {
      type: 'list',
      name: 'projScreenDumpNum',
      message: "How many more screen dumps would you like to include?",
      choices: ["Two more", "Three more", "No more, dear!"],
   }, 
   {
      type: 'input',
      message: 'and the path/filename of your second screen dump:',
      name: 'projScreenDump2',
      when: (answers) => ((answers.projScreenDumpNum === "Two more") || (answers.projScreenDumpNum === "Three more")),
   }, 
   {
      type: 'input',
      message: '... and the third screen dump?',
      name: 'projScreenDump3',
      when: (answers) => answers.projScreenDumpNum === "Three more",
   }, 
   // {
   //    type: 'editor',
   //    message: 'List your collaborators, any third-party assets requiring attribution.',
   //    name: 'projCredits',
   //    validate(text) {
   //       if (text.split('\n').length < 2) {
   //          return 'Must be at least 2 lines.';
   //       }
   //       return true;
   //    },
   //    waitUserInput: true,
   // }, 
   {
      type: 'list',
      message: 'Choose a suitable license for your project:',
      name: 'projLicense',
      choices: licenseArr,
   },
   // {
   //    type: 'editor',
   //    message: 'List all the fabulous features of your project: ',
   //    name: 'projFeatures',
   //    validate(text) {
   //       if (text.split('\n').length < 2) {
   //          return 'Must be at least 2 lines.';
   //       }
   //       return true;
   //    },
   //    waitUserInput: true,
   // }, 
   // {
   //    type: 'editor',
   //    message: '... and any other future developments for your project: ',
   //    name: 'projFuture',
   //    validate(text) {
   //       if (text.split('\n').length < 2) {
   //          return 'Must be at least 2 lines.';
   //       }
   //       return true;
   //    },
   //    waitUserInput: true,
   // }, 
   // {
   //    type: 'editor',
   //    message: 'If you would like other developers to contribute to it, you can include guidelines for how to do so: ',
   //    name: 'projContribute',
   //    validate(text) {
   //       if (text.split('\n').length < 2) {
   //          return 'Must be at least 2 lines.';
   //       }
   //       return true;
   //    },
   //    waitUserInput: true,
   // }, 
   // {
   //    type: 'editor',
   //    message: 'Device testings for your application and provide examples on how to run them:',
   //    name: 'projTests',
   //    validate(text) {
   //       if (text.split('\n').length < 2) {
   //          return 'Must be at least 2 lines.';
   //       }
   //       return true;
   //    },
   //    waitUserInput: true,
   // },    
];


// console.log("questionsArr:", questionsArr);

// asynchronously call inquirer.js and write to the file and increment file number for the next run.

const promptUser = () => {
   return inquirer.prompt(questionsArr)
};


const init = async () => {
   console.log(welcomeMsg);
   try {

      // call inquirer.js
      const userResponses = await promptUser();
      
      console.log("inside ini:", generateMarkdown);
      console.log("userResponses",userResponses);
      
      // generate the markdown file
      const readMeFile = generateMarkdown(userResponses);
      await writeFileAsync(`./readmes/`+ fileName, readMeFile);
      console.log("Your fabulous " + fileName + " is done! Go to /readmes directory to collect it!");

      // set next file version number.
      let fileNumNext = (parseInt(fileNum)+1).toString();
      await writeFileAsync(`./readmes/fileNumCounter.log`, fileNumNext);
      console.log(`Your next readme.md file version is `, fileNumNext, ` and it will be waiting for you in /readmes/fileNumCounter.log`);

      console.log(goodByeMsg);

   } catch (err) {
      console.log(err);
   }
};

// run the script on load node
init();


