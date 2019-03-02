const { exec } = require('child_process');
const fs = require('fs');
const ora = require('ora');

const eslintrc = `
{
  "extends": ["airbnb", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": ["error"]
  }
}`;

const prettierrc = `
{
  "printWidth": 100,
  "singleQuote": true
}
`;

console.log(
  'Ensure you have installed the Prettier extension for VSCode:\nhttps://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode \n\n'
);

const spinner = ora('npm install -D eslint prettier\n').start();

exec('npm install -D eslint prettier', (err, stdout, stderr) => {
  logExecInformation(err, stdout, stderr);

  spinner.text = 'npx install-peerdeps --dev eslint-config-airbnb\n';

  exec('npx install-peerdeps --dev eslint-config-airbnb', (err, stdout, stderr) => {
    logExecInformation(err, stdout, stderr);

    spinner.text = 'npm install -D eslint-config-prettier eslint-plugin-prettier\n';

    exec('npm install -D eslint-config-prettier eslint-plugin-prettier', (err, stdout, stderr) => {
      logExecInformation(err, stdout, stderr);

      createESLintRc()
        .then(createPrettierRc)
        .then(() => {
          spinner.stop();
          console.log(
            '\n\nProject setup to use the Airbnb Style Guide with Prettier and ESLint!\n\n'
          );
        })
        .catch(err => console.error(err));
    });
  });
});

const createESLintRc = () => {
  spinner.text = 'Creating .eslintrc.json';
  return new Promise((resolve, reject) => {
    fs.writeFile('.eslintrc.json', eslintrc, function(err, data) {
      if (err) reject(err);
      console.log('.eslintrc.json created');
      resolve();
    });
  });
};

const createPrettierRc = () => {
  spinner.text = 'Creating .prettierrc';
  return new Promise((resolve, reject) => {
    fs.writeFile('.prettierrc', prettierrc, function(err, data) {
      if (err) reject(err);
      console.log('.prettierrc created');
      resolve();
    });
  });
};

const logExecInformation = (err, stdout, stderr) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
};
