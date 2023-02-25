// function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }
// module.exports = generateMarkdown;

// export default function generateMarkdown(userResponses) {
//   const readMeText = 
//   `# blah blah
//   and second lien
//   and third line
//   bye! My name is ${userResponses.userName}
//   and I am a ${userResponses.userGender}
//   `;
//   return readMeText;
// }

const lineBreak = `\n`;
const lineBreak2 = `\n \n`;
const lineBreak3 = `\n \n \n`;

const desc = `## Description` + lineBreak3


// console.log(`Provide a short description explaining the what, why, and how of your project.`);


const toc = `## Table of Contents` + lineBreak2
+ `- [Installation](#installation)` + lineBreak
+ `- [Usage](#usage)` + lineBreak
+ `- [Credits](#credits)` + lineBreak
+ `- [License](#license)` + lineBreak3 
+  `## Installation`

// console.log("What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.");



export default function generateMarkdown(userResponses) {
  const readMeText = 
  `# ` + userResponses.userName + lineBreak2
    + desc
    + toc
  ;
  return readMeText;
}

