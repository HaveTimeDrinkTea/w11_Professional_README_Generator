//-- initialized  repository with a `package.json` file by running `npm init -y`.
//-- installed inquirer and added it to list of dependencies by running `npm i inquirer --save`.
//--PW Inquirer v9 and higher are native esm modules, this mean you cannot use the commonjs syntax require('inquirer') anymore. 



// get fs
import * as fs from 'fs';

// get path
import * as path from 'path';

import inquirer from 'inquirer';

import * as util from 'util';

const writeFileAsync = util.promisify(fs.writeFile);

const readFileAsync = util.promisify(fs.readFile);

import generateMarkdown from './utils/generateMarkdown.js';

import { licenseArr } from './utils/license.js'; 

// import { readFile } from 'node:fs';

const fileNum = await readFileAsync('./utils/fileNumCounter.log', 'utf8');



// let fileNum;
//       fs.readFile('./utils/fileNumCounter.log', 'utf8', function (err, data) {
//          if (err) {
//             fileNum = 1;
//          }
//          console.log("data:",data);
//          console.log(typeof data);
//          fileNum = data;
//          console.log("fileNum:",fileNum );
//       });



let fileName = `README` + fileNum + `.md`;
console.log("fileName:",fileName);



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

      let fileNumNext = (parseInt(fileNum)+1).toString();

      await writeFileAsync(`./utils/fileNumCounter.log`, fileNumNext);

      console.log(`Successfully wrote `, fileNumNext, `to log file.`);


   } catch (err) {
      console.log(err);
   }
};

init();


