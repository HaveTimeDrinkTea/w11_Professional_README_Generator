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

import { licenseTypesObj } from '../utils/license.js'; 

const lineBreak = `\n`;
const lineBreak2 = `\n \n`;
const lineBreak3 = `\n \n \n`;

const desc = `## Description` + lineBreak2



const toc = `## Table of Contents` + lineBreak2
+ `- [Installation](#installation)` + lineBreak
+ `- [Usage](#usage)` + lineBreak
+ `- [Credits](#credits)` + lineBreak
+ `- [License](#license)` + lineBreak3 
+  `## Installation` + lineBreak2

let projScreenDump2_3;

function getMoreScreenDumps(NumScreenDump, url2, url3) {
  
  if (NumScreenDump === "2") {

    projScreenDump2_3 = 
      `![Project Screen Dump 2](` + url2 + `)` + lineBreak3;
  
  } else if (NumScreenDump === "3") {
  
    projScreenDump2_3 = 
      `![Project Screen Dump 2](` + url2 + `)` + lineBreak2
    + `![Project Screen Dump 3](` + url3 + `)` + lineBreak3;
  
  } else {
    // projScreenDumpNum === "None"
    projScreenDump2_3 = lineBreak;
} }


export default function generateMarkdown(userResponses) {
  const licenseImg = userResponses.projLicense;

  projScreenDump2_3 = getMoreScreenDumps(userResponses.projScreenDumpNum, userResponses.projScreenDump2, userResponses.projScreenDump3);








  const readMeText = 
  `# ` + userResponses.projName + lineBreak2
    // + desc + userResponses.projDesc + lineBreak3
    // + `[Deployment link:](` + projDeployURL + `)` + lineBreak3
    // + toc
    // + userResponses.projInstall + lineBreak3
    // + `## Usage` + lineBreak2 
    // + userResponses.projUsage + lineBreak2
    + `![Project Screen Dump](` + userResponses.projScreenDump + `)` + lineBreak2
    + projScreenDump2_3
    + `## Credits` + lineBreak2 
    // + userResponses.projCredits + lineBreak3
    + `## License` + lineBreak2 
    + licenseTypesObj[licenseImg] + lineBreak3
    // + `## Features` + lineBreak2 
    // + userResponses.projFeatures + lineBreak2
    // + `### Future Developments` + lineBreak2 
    // + userResponses.projFuture + lineBreak3
    // + `## How to Contribute` + lineBreak2 
    // + userResponses.projContribute + lineBreak3
    // + `## Tests` + lineBreak2 
    // + userResponses.projTests + lineBreak3
  ;
  return readMeText;
}
