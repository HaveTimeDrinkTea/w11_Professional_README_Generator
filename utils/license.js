//-- the following license list and the corresponding logos are take from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

const licenseTypesObj = 
   {
      "The MIT License": `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`, 
      //--Apache 2.0 License
      "Apache 2.0 License": `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
      //-- Boost Software License 1.0
      "Boost Software License 1.0": '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
      //-- BSD 3-Clause License
      "BSD 3-Clause License": `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,
      //-- BSD 2-Clause License
      "BSD 2-Clause License": `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`, 
      //-- CreativeCommons.org
      "Creative Commons CC0-1.0": `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`, 
      //-- Attribution 4.0 International
      "Attribution 4.0 International": `[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)`, 
      //-- Attribution-NonCommercial 4.0 International
      "CC BY-NC 4.0": `[![License: CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc/4.0/)`, 
      //-- Eclipse Public License 1.0
      "Eclipse Public License 1.0": `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`,
      //-- GNU GPL v3
      "GNU GPL v3": `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`, 
      //-- GNU GPL v2
      "GPL v2": `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`, 
      //-- The Hippocratic License 2.1
      "Hippocratic 2.1": `[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)`,
      //-- IBM Public License Version 1.0
      "IBM Public License Version 1.0": `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`, 
      //-- ISC License (ISC)
      "ICL": `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`,
      //-- Mozilla Public License 2.0
      "Mozilla Public License 2.0": `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`, 
      //-- Open Data Commons
      "Open Data Commons Attribution": `[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)`, 
      //-- Open Database License (ODbL)
      "ODbL": `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`,
      //-- The Perl License: Artistic-2.0
      "The Artistic License 2.0": `[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`, 
      //-- SIL Open Font License 1.1
      "SIL Open Font-1.1": `[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)`,
      //--The Unlicense
      "The Unlicense":`[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`,
      //--WTFPL
      "WTFPL": `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`,
      //-- Zlib
      "Zlib": `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`,
   };


const licenseArr = [];

for (const key in licenseTypesObj) {
      licenseArr.unshift(key);
};

// export default licenseArr for the inquirer prompt and the licenseTypesObj to be used by generateMarkdown()

export { licenseArr, licenseTypesObj };




