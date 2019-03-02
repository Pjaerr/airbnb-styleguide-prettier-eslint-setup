# airbnb-styleguide-prettier-eslint-setup
A nodejs script that will setup Prettier and ESLint using the Airbnb styleguide inside of a project.

## Prerequisites
* You must have npm version 5+ installed so that the script can utilise the `npx` command.
* For the changes to fully take effect, you must have the prettier extension installed in your text editor (only tested on vscode)

## Running the script
1. Once you have cloned the repo, run `npm install` to install the loading spinner (the script will still work without this, but it gives you more visual feedback as to the progress of the script)

2. Navigate to your project into the folder where your `package.json` is and run `node ~/airbnb-styleguide-prettier-eslint-setup/setup-airbnb-styleguide.js`

Hopefully your project now utilises the Airbnb styleguide and will format when running your respective format command, or formatting on save etc in your text editor.

This has only been tested on vscode and was just a quicker way of following the tutorial written by Jeffrey Zhen (https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a) without having to go and read it every time.

*Note This will work out of the box for formatting your code, but if you want ESLint to actively show you errors based on the AirBnb style guide, you will need to enable Eslint in your text editor.
