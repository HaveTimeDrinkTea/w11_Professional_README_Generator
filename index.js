//-- initialized  repository with a `package.json` file by running `npm init -y`.
//-- installed inquirer and added it to list of dependencies by running `npm i inquirer --save`.
//--PW Inquirer v9 and higher are native esm modules, this mean you cannot use the commonjs syntax require('inquirer') anymore. 

//--========================================================
//-- 1. Get all the relevant packages
//--========================================================

//-- 1.1 Get fs
import * as fs from 'fs';


//-- 1.2 Get path
import * as path from 'path';


//-- 1.3 get inquirer

import inquirer from 'inquirer';


//-- 1.4 Get util 

import * as util from 'util';

const writeFileAsync = util.promisify(fs.writeFile);

const readFileAsync = util.promisify(fs.readFile);


//-- 1.5 Get generateMarkdown code and the license list

import generateMarkdown from './utils/generateMarkdown.js';

import { licenseArr } from './utils/license.js'; 

//-- 1.6 Get the README.md version number from ./utils/fileNumCounter.log and set the file name for current run

const fileNum = await readFileAsync('./readmes/fileNumCounter.log', 'utf8');

let fileName = `README` + fileNum + `.md`;
console.log("fileName:",fileName);


//--========================================================
//-- 2. Set standard messages for rendering
//--========================================================

//-- Set welcome and good bye messages

let welcomeMsg = `\n\n\n✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷ \n\n`
   + `                 👯‍♂️🕺🏻👯‍♀️ GOOD DAY GOOD DAY! 👯‍♀️🕺🏻👯‍♂️\n`
   + `  Let's get WERKING and write an ELEGANZA EXTRAVAGANZA README.md! \n \n`
   + `✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷ \n\n`

let goodByeMsg = `\n\n\n✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷ \n\n`
   + `                🏅  ConDRAGtulations! 🏅 \n`
   + `                 I am impressed, my dear!  \n`
   + ` You have successfully created a very dashing ` + fileName + `! \n`
   + `               Now, you can SHASHAY away! \n \n`
   + `✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷✤∷❁∷ \n\n`   



//--========================================================
//-- 3. Set Set Question for inquirer.js
//--========================================================   

const questionsArr = [
   //-- Project name
   {
      type: 'input',
      message: 'Now, first things first: the name of your super duper project is?',
      name: 'projName',
      validate(text) {
         if (text === "" ) {
            return 'Oh dear! Blankety blank is not a good name! Please tell me the real project name!';
         }
         return true;
      },
      waitUserInput: true,
   }, 
   //--Description of Project 
   {
      type: 'editor',
      message: 'And now tell me a bit about your project, what motivates you to do this, why are you doing it and how did you do it:',
      name: 'projDesc',
      validate(text) {
         if (text.split('\n').length < 2) {
            return 'My dear! You need to type in at least 2 lines of description!';
         }
         return true;
      },
   },   
   //-- Set Deployment link
   {
      type: 'input',
      message: ' and the URL of your deployed project (type full path including https://)?',
      name: 'projDeployURL',
      validate(text) {
         if (text === "" ) {
            return 'My dear! Pray tell your project deployment path!';
         }
         return true;
      },
      waitUserInput: true,
   }, 
   //-- Set Installation instructions
   {
      type: 'editor',
      message: 'That is fabulous! Now my dear, give me a step-by-step run through on getting the application environment running:',
      name: 'projInstall',
      validate(text) {
         if (text.split('\n').length < 2) {
            return 'My dear! Surely your fabulous app has more than 2 steps to get it running! ';
         }
         return true;
      },
      waitUserInput: true,
   }, 
   //-- Set Project Usage
   {
      type: 'editor',
      message: 'And are there any instructions or examples for use. (Path of screenshot(s) to be provided in next prompt.)',
      name: 'projUsage',
      validate(text) {
         if (text.split('\n').length < 2) {
            return 'My dear! Surely you can do 2 lines of instructions!';
         }
         return true;
      },
      waitUserInput: true,
   }, 
   //-- Set First Screen Dump path/name
   {
      type: 'input',
      message: 'So my dear, what is the path and file name of the screen dump of your project?',
      name: 'projScreenDump1',
      validate(text) {
         if (text === "" ) {
            return 'My dear! If you do not tell me the path to your file, how am I going to find it?';
         }
         return true;
      },
      waitUserInput: true,
   }, 
      //-- Set second and/or third Screen Dump path/name
   {
      type: 'list',
      name: 'projScreenDumpNum',
      message: "How many more screen dumps would you like to include?",
      choices: ["One more, please!", "Two more, please!", "No more, dear!"],
   }, 
   {
      type: 'input',
      message: '... and the path/filename of your second screen dump is:',
      name: 'projScreenDump2',
      when: (answers) => ((answers.projScreenDumpNum === "One more, please!") || (answers.projScreenDumpNum === "Two more, please!")),
      validate(text) {
         if (text === "" ) {
            return 'My dear! If you do not tell me the path to your file, how am I going to find it!';
         }
         return true;
      },
      waitUserInput: true,
   }, 
   {
      type: 'input',
      message: '... and the third screen dump?',
      name: 'projScreenDump3',
      when: (answers) => answers.projScreenDumpNum === "Two more, please!",
      validate(text) {
         if (text === "" ) {
            return 'My dear! If you do not tell me the path to your file, how am I going to find it?';
         }
         return true;
      },
      waitUserInput: true,
   }, 
   //-- Set credits
   {
      type: 'list',
      name: 'projCreditInc',
      message: "Now, do tell us about your partners in drag (read: collaborators) and any third-party assets your want to dedicate your success to",
      choices: ["Huh? No thanks!", "Oh yes please!"],
   }, 
   {
      type: 'editor',
      message: '.... Great! And they are ... :',
      name: 'projCredits',
      when: (answers) => (answers.projCreditInc === "Oh yes please!"),
      validate(text) {
         if (text.split('\n').length < 2) {
            return 'Honey! Surely you can muster up 2 lines of text!';
         }
         return true;
      },
      waitUserInput: true,
   }, 
   //-- Set license
   {
      type: 'list',
      message: 'Now carefully choose a suitable license for your project:',
      name: 'projLicense',
      choices: licenseArr,
   },
   //-- Set features
   {
      type: 'editor',
      message: 'Honey! Here is the exciting part where you can list all the fabulous features of your project: ',
      name: 'projFeatures',
      validate(text) {
         if (text.split('\n').length < 2) {
            return 'Oh honey! You got to have more than 2 features!';
         }
         return true;
      },
      waitUserInput: true,
   },
   //-- Set future directions/developments 
   {
      type: 'list',
      name: 'projFutureInc',
      message: "Now, do tell us about any other future developments for your project:",
      choices: ["No It's a dead horse!", "Oh yes please!"],
   }, 
   {
      type: 'editor',
      message: '... fabulous! and these future developments are ...  ',
      name: 'projFuture',
      when: (answers) => ((answers.projFutureInc === "Oh yes please!")),
      validate(text) {
         if (text.split('\n').length < 2) {
            return 'Surely there is at least two other features you can further add to your project!';
         }
         return true;
      },
      waitUserInput: true,
   }, 
   //-- Set how to contribute   
   {
      type: 'list',
      name: 'projContributeInc',
      message: "If you would like other developers to contribute to it: ",
      choices: ["No! It is all mine!!!!", "Oh yes please!"],
   }, 
   {
      type: 'editor',
      message: '.. and how can they contribute ...',
      name: 'projContribute',
      when: (answers) => ((answers.projContributeInc === "Oh yes please!")),
      validate(text) {
         if (text.split('\n').length < 2) {
            return 'Must be at least 2 lines.';
         }
         return true;
      },
      waitUserInput: true,
   }, 
   //-- Set testings      
   {
      type: 'list',
      name: 'projTestsInc',
      message: "... and lastly, have you devised any testing for your project:",
      choices: ["No! Just leg it!", "Oh yes please!"],
   }, 
   {
      type: 'editor',
      message: '... great! and these tests are?',
      name: 'projTests',
      when: (answers) => ((answers.projTestsInc === "Oh yes please!")),
      validate(text) {
         if (text.split('\n').length < 2) {
            return 'Must be at least 2 lines.';
         }
         return true;
      },
      waitUserInput: true,
   },    
];



//--========================================================
//-- 4. Call inquirer.js
//--========================================================   

//-- asynchronously call inquirer.js 
//-- and write to the file and increment file number for the next run.

const promptUser = () => {
   return inquirer.prompt(questionsArr)
};


const init = async () => {
   console.log(welcomeMsg);
   try {

      // Call inquirer.js
      const userResponses = await promptUser();
      
      // Generate the markdown file
      const readMeFile = generateMarkdown(userResponses);

      await writeFileAsync(`./readmes/`+ fileName, readMeFile);

      console.log(`\n\n Your fabulous ` + fileName + ` is done! Go to ./readmes directory to collect it!`);

      // Set next file version number.
      let fileNumNext = (parseInt(fileNum)+1).toString();

      await writeFileAsync(`./readmes/fileNumCounter.log`, fileNumNext);

      console.log(`\n\n Your next readme.md file version will be `, parseInt(fileNumNext), ` and it will be waiting for you in ./readmes/fileNumCounter.log`);

      console.log(goodByeMsg);

   } catch (err) {
      console.log(err);
   }
};



//--========================================================
//-- 4. Run inquirer.js
//--========================================================   

init();


