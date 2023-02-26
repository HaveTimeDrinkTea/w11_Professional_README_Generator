// const fs = require("fs");
// const path = require('path');
// const inquirer = require("inquirer");


//-- initialized  repository with a `package.json` file by running `npm init -y`.
//-- installed inquirer and added it to list of dependencies by running `npm i inquirer --save`.
//--PW Inquirer v9 and higher are native esm modules, this mean you cannot use the commonjs syntax require('inquirer') anymore. 



// get fs
import * as fs from 'fs';

// get path
import * as path from 'path';

import generateMarkdown from './utils/generateMarkdown.js';

// import licenseArr from './utils/license.js';

import { licenseArr } from './utils/license.js'; 

// import file num counter

// import * as locStorage from 'node-persist';

import ls from 'local-storage';

let test1 = ls.get('foo');
console.log("test1:", test1);

ls('foo', 'bar');
// <- true
let test2 = ls.get('foo');
// <- 'bar'

console.log("test2:", test2);

let fileNumStored = ls.get('fileNumStored');

console.log("fileNumStored from LS:", fileNumStored);

if (fileNumStored === null) {
   fileNumStored = 1;
   console.log("fileNumStored in true:", fileNumStored);
} else {
   fileNumStored = parseInt(fileNumStored) + 1;
   console.log("fileNumStored in else:", fileNumStored);
};

ls.set('fileNumStored', fileNumStored);

let fileName = `README` + fileNumStored + `.md`;

console.log("fileName before questions:", fileName);


// await locStorage.init();
// let fileNumStored = await locStorage.getItem('fileNum'); 

// if (fileNumStored === undefined) {
//    fileNumStored = 1;
//    await storage.setItem('fileNum', parseInt(fileNumStored));
// };
// console.log("here:", await locStorage.getItem('fileNum')); 

// let fileNum = fs.readFile('./utils/fileNumCounter.js');

// let fileName = `README` + fileNum + `.md`;

// console.log(licenseArr);

// console.log("What is generateMarkdown:", generateMarkdown);

import inquirer from 'inquirer';

// const generateMarkdown = require("./utils/generateMarkdown");

// const util = require('util');

import * as util from 'util';

const writeFileAsync = util.promisify(fs.writeFile);



// array of questions for user
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
   //    message: 'Provide instructions and examples for use. Path for  screenshots to be provided in next prompt.',
   //    name: 'projUsage',
   //    validate(text) {
   //       if (text.split('\n').length < 2) {
   //          return 'Must be at least 2 lines.';
   //       }
   //       return true;
   //    },
   //    waitUserInput: true,
   // }, 
   // {
   //    type: 'input',
   //    message: 'What is the path and file name of the screen dump of your project?',
   //    name: 'projScreenDump',
   // }, 
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

const promptUser = () => {
   return inquirer.prompt(questionsArr)
};

// const generateMarkdown= (userResponses) =>
//    `# blah blah
//    and second lien
//    and third line
//    bye! My name is ${userResponses.userName}`


// Bonus using async/await and try/catch
const init = async () => {
   console.log('hi');
   try {
      const userResponses = await promptUser();
      console.log("inside ini:", generateMarkdown);

      console.log("userResponses",userResponses);
      
      const readMeFile = generateMarkdown(userResponses);
      
      await writeFileAsync(`./output/`+ fileName, readMeFile);
      
      console.log("Successfully wrote to " + fileName);

   } catch (err) {
      console.log(err);
   }
};

init();


