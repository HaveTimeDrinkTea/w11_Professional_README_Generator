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

console.log("What is generateMarkdown:", generateMarkdown);

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
   {
      type: 'editor',
      message: 'Write a short description explaining the what, why, and how of your project.',
      name: 'projDesc',
      validate(text) {
         if (text.split('\n').length < 2) {
            return 'Must be at least 2 lines.';
         }
         return true;
      },
      waitUserInput: true,
   }, 
   {
      type: 'editor',
      message: 'Provide a step-by-step description of how to get the development environment running:',
      name: 'projInstall',
      validate(text) {
         if (text.split('\n').length < 2) {
            return 'Must be at least 2 lines.';
         }
         return true;
      },
      waitUserInput: true,
   }, 
   {
      type: 'editor',
      message: 'Provide instructions and examples for use. Include screenshots as needed.',
      name: 'projUsage',
      validate(text) {
         if (text.split('\n').length < 2) {
            return 'Must be at least 2 lines.';
         }
         return true;
      },
      waitUserInput: true,
   }, 
];

console.log("questionsArr:", questionsArr);

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
      
      await writeFileAsync('./output/README1.md', readMeFile);
      
      console.log('Successfully wrote to readme1.md');
   } catch (err) {
      console.log(err);
   }
};

init();


