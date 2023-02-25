// function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }
// module.exports = generateMarkdown;

export default function generateMarkdown(userResponses) {
  const readMeText = 
  `# blah blah
  and second lien
  and third line
  bye! My name is ${userResponses.userName}
  and I am a ${userResponses.userGender}
  `;
  return readMeText;
}

// export { generateMarkdown };

