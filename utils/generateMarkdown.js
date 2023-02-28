//--========================================================
//-- 1. Get list of license 
//--========================================================   
import { licenseTypesObj } from '../utils/license.js'; 


//--========================================================
//-- 2. Prepare the standard rendering components of README.MD 
//--========================================================   

const lineBreak = `\n`;
const lineBreak2 = `\n \n`;
const lineBreak3 = `\n \n \n`;


const toc = `## Table of Contents` + lineBreak2
+ `- [Installation](#installation)` + lineBreak
+ `- [Usage](#usage)` + lineBreak
+ `- [Credits](#credits)` + lineBreak
+ `- [License](#license)` + lineBreak
+ `- [Features](#features)` + lineBreak 
+ `- [Future Developments](#developments)` + lineBreak 
+ `- [How To Contribute](#contribute)` + lineBreak 
+ `- [Tests](#tests)` + lineBreak 
+ `- [Questions](#questions)` + lineBreak 
+ lineBreak3 ;

//-- Create markdown for 2nd and/or third screen dump path/file name
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
    // if projScreenDumpNum === "None"
      projScreenDump2_3 = lineBreak;
  } ;
  return projScreenDump2_3
}

//-- Create markdown for any question prompt where 
//-- user indicated that no details are required ==> render N.A.
//-- user wants some details ==> render details.

let projDetailsRender;

function getDetails (projInc, projDetails) {
  if (projInc === "Oh yes please!") {
    projDetailsRender = projDetails;
  } else { 
    projDetailsRender = "N.A.";
  }; 
  return projDetailsRender;
}

//-- Create markdown for author email and github profile

let authorDetails;

function getAuthorDetails(userGithub, userEmail) {
  authorDetails = 
  `If you have any issues regarding this application, please:`
  + `\n  * visit my GitHub profile at [` + userGithub + `](https://github.com/` + userGithub + `) or`
  + `\n  * email me at <`+ userEmail +`>`;
  return authorDetails;
}



//--========================================================
//-- 3. Prepare generateMarkdown() and export it
//--========================================================   

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
    + `## Developments` + lineBreak2 
    + getDetails (userResponses.projFutureInc, userResponses.projFuture) + lineBreak3
    + `## Contribute` + lineBreak2 
    + getDetails (userResponses.projContributeInc, userResponses.projContribute) + lineBreak3
    + `## Tests` + lineBreak2 
    + getDetails (userResponses.projTestsInc, userResponses.projTests) + lineBreak2
    + `## Questions` + lineBreak2 
    + getAuthorDetails(userResponses.projGitHub, userResponses.projEmail) + lineBreak3
  ;
  return readMeText;
}

