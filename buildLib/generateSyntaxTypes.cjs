const fs = require('fs');

async function generateSyntaxTypes() {
  try {
    const response = await fetch('https://dpaste.com/api/v2/syntax-choices/');
    const syntaxChoices = await response.json();

    const syntaxKeys = Object.keys(syntaxChoices);

    const syntaxFileContent = `export type Syntax =\n  | '${syntaxKeys.join("'\n  | '")}';\n`;

    fs.writeFileSync('./src/types/syntax.ts', syntaxFileContent, {
      encoding: 'utf-8',
      flag: 'w',
      flush: 'sync',
    });

    console.info('syntax.ts file generated successfully!');
  } catch (error) {
    console.error('Error generating syntax.ts file:', error);
  }
}

generateSyntaxTypes();
