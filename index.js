#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import { createSpinner } from 'nanospinner';


const sleep = (ms = 2000) => new Promise((res) => setTimeout(res, ms));
const lg = (msg) => console.log(msg) 
const lgGreen = (msg) => console.log(chalk.green(msg))
const lgBlue = (msg) => console.log(chalk.blue(msg))
const continueInFrench = () => lgGreen("Selectionner les sujets dont vous aurez besoin pour votre projet RN")
const continueInEnglish = () => lgBlue("Select the topics that you will need for your project")

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
await welcome()
await selectLanguage()

async function selectLanguage() {
  
  const answers = await inquirer.prompt({
    name: 'user_lang',
    type: 'list',
    message: "Which language would you like to continue with",
    choices: [
      "English",
      "Français"
    ],
  });

  return handleListSelection(answers.user_lang === "English" )
}
async function handleListSelection(isEnglish){
  lg(chalk.green("This only supports english and french for now"))
  const spinner = createSpinner(`Setting the selected language`).start();
  if (isEnglish) {
    spinner.success({
      text: "Next!"
    })
    continueInEnglish()
  } else {
    spinner.success({
      text: "Vous allez continuer en Français"
    })
    continueInFrench()
  }
  await sleep()
  
}



