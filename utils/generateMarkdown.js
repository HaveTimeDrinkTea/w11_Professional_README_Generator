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


const toc = `## Table of Contents` + lineBreak2
+ `- [Installation](#installation)` + lineBreak
+ `- [Usage](#usage)` + lineBreak
+ `- [Credits](#credits)` + lineBreak
+ `- [License](#license)` 
+ lineBreak3 ;


let projScreenDump2_3;

function getMoreScreenDumps(NumScreenDump, url2, url3) {
  
  if (NumScreenDump === "One more, please!") {
    
      projScreenDump2_3 = 
      `![Project Screen Dump 2](` + url2 + `)` + lineBreak3;
  
  } else if (NumScreenDump === "Two more, please!") {
  
    projScreenDump2_3 = 
      `![Project Screen Dump 2](` + url2 + `)` + lineBreak2
    + `![Project Screen Dump 3](` + url3 + `)` + lineBreak3;
  
  } else {
    // if rojScreenDumpNum === "None"
      projScreenDump2_3 = lineBreak;
  } ;
  return projScreenDump2_3
}


let projDetailsRender;

function getDetails (projInc, projDetails) {
  if (projInc === "Oh yes please!") {
    projDetailsRender = projDetails;
  } else { 
    projDetailsRender = "N.A.";
  }; 
  return projDetailsRender;
}




export default function generateMarkdown(userResponses) {
  const licenseImg = userResponses.projLicense;


  const readMeText = 
  `# ` + userResponses.projName + lineBreak2
    + `## Description` + lineBreak2
    + userResponses.projDesc + lineBreak2
    + `[Deployment link:](` + userResponses.projDeployURL + `)` + lineBreak3
    + toc
    +  `## Installation` + lineBreak2
    + userResponses.projInstall + lineBreak3
    + `## Usage` + lineBreak2 
    + userResponses.projUsage + lineBreak2
    + `![Project Screen Dump](` + userResponses.projScreenDump1 + `)` + lineBreak2
    + getMoreScreenDumps(userResponses.projScreenDumpNum, userResponses.projScreenDump2, userResponses.projScreenDump3)
    + `## Credits` + lineBreak2 
    + getDetails (userResponses.projCreditInc, userResponses.projCredits) + lineBreak3
    + `## License` + lineBreak2 
    + licenseTypesObj[licenseImg] + lineBreak3
    + `## Features` + lineBreak2 
    + userResponses.projFeatures + lineBreak3
    + `## Future Developments` + lineBreak2 
    + getDetails (userResponses.projFutureInc, userResponses.projFuture) + lineBreak3
    + `## How to Contribute` + lineBreak2 
    + getDetails (userResponses.projContributeInc, userResponses.projContribute) + lineBreak3
    + `## Tests` + lineBreak2 
    + getDetails (userResponses.projTestsInc, userResponses.projTests) + lineBreak2
  ;
  return readMeText;
}
