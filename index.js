#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import gradient from 'gradient-string';
import DATA, { topicsTranslations } from './prompts.js';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';


//The Promise SetTimeout Function
const sleep = (ms = 2000) => new Promise((res) => setTimeout(res, ms));

//Console Logging Helpers
const lg = (msg) => console.log(msg)
const lgGreen = (msg) => console.log(chalk.green(msg))
const lgBlue = (msg) => console.log(chalk.blue(msg))

const lgFinal = (msg) => console.log("\n\nYou selected the following options:\n\n", gradient.pastel(msg))


const lgGreenFinal = (msg) => lgGreen(`\n\nYou selected the following options:\n\n${(msg)}`)
const lgBlueFinal = (msg) => lgGreen(`\n\nYou selected the following options:\n\n${(msg)}`)
const logFinal = (msg) => lg(`\n\nYou selected the following options:\n\n${(msg)}`)

// for (const topic of await selectTopics(await selectLanguage())) {
//     let topicCamel = topic.toLowerCase().replace(/ /g, '_');
//     lg(DATA.selected_topic_options[topicCamel])
// }


// lg(DATA.selected_topic_options[topic.toLowerCase()])



//CLI run script for the v1
await welcome();
const language = await selectLanguage();
const topics = await selectTopics(language);
const selectedOptions = await selectLibraries(topics, language);
const handleOptions = await handleTopicsSelection(selectedOptions, language);
await tdevOut()


//Welcome Function
async function welcome() {
  const rainbowGreetings = chalkAnimation.rainbow(
    "You're welcome in the TdevDebug CLI for generating boilerplate templates \n"
  );

  await sleep();
  rainbowGreetings.stop();

  lg(`
    ${chalk.bgBlue(' INFORMATIONS \n')} 
    This is not generating any template yet
    It's still in ${chalk.yellow('Development process')}
    So if you find it useful you can support us or contribute.

  `);
}


async function selectLanguage() {
  const { language } = await inquirer.prompt({
    name: 'language',
    type: 'list',
    message: "Select the language for the prompts",
    choices: [
      "English",
      "French"
    ],
  });
  return language.toLowerCase();
}

async function selectTopics(language) {
  const { selectedTopics } = await inquirer.prompt({
    name: 'selectedTopics',
    type: 'checkbox',
    message: DATA.libs_selection[language].topics_selection,
    choices: DATA.topics_options[language],
  });
  return selectedTopics;
}

async function selectLibraries(topics, language) {
  const selections = {};
  for (const topic of topics) {
    const topicCamelCaseParse = topicsTranslations[topic] || topic.toLowerCase().replace(/ /g, '_');
    const { selection } = await inquirer.prompt({

      name: 'selection',
      type: 'list',
      message: DATA.libs_selection[language].topics[topicCamelCaseParse],
      choices: DATA.selected_topic_options[topicCamelCaseParse],
    });
    selections[topic] = selection;
  }
  return selections;
}


//This function is the one responsible for the final console output
async function handleTopicsSelection(topics, selectedLanguage) {

  let output = "";
  output += "This is the @tdev228/cli configuration\n";
  output += "@tdev228.config.js = { \n";
  output += `lang: ${selectedLanguage},\n`;
  output += "topics: [\n";
  for (const topic in topics) {
    output += `    ${topic}: ${topics[topic]}\n`;
  }
  output += "  ]\n";
  output += "}\n";
  return output;
}


//Fake Template Generator
function tdevOut() {
  figlet('TDEV 228 template', async function (err, data) {
    const spinner = createSpinner('Template generate...\n').start();
    await sleep();

    if (err) {
      spinner.error({ text: "It seems like this template is not yet implemented\n You can contribute to our repository if you want this template\n Otherwise select another configuration" });
      process.exit(1);
    } else {
      spinner.success({ text: lgFinal(data) });

      lgBlueFinal(handleOptions)
      process.exit(0)
    }
  });
}


//IT WILL BE IMPLEMENTED AFTER PEOPLE VALIDATE IF THE STRUCTURE IS GOOD
function generateTemplate(options, language) {
}

