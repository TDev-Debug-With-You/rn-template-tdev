#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import { createSpinner } from 'nanospinner';


const sleep = (ms = 2000) => new Promise((res) => setTimeout(res, ms));
const lg = (msg) => console.log(msg)
const lgGreen = (msg) => console.log(chalk.green(msg))
const lgBlue = (msg) => console.log(chalk.blue(msg))

const frenchPrompts = {
    topics_selection: "Selectionner les sujets dont vous aurez besoin pour votre projet RN",
    topics_list: [
        "Typescript",
        "La Navigation",
        "Le State Management",
        "Le Stockage",
        "Les Gestuels",
        "Les Animations",
        "Les Maps(Geo localisation)",
        "Les permissions",
        "Le Traitement des Medias",
        "Les Notifications",
        "Le Style"
    ]
}

const englishPrompts = {
    topics_selection: "Select the topics that you will need for your project",
    topics_list: [
        "Typescript",
        "Navigation",
        "State Management",
        "Storage",
        "Gesture",
        "Animations",
        "Maps(Geo location)",
        "Permissions",
        "Medias",
        "Notifications",
        "Styling"
    ]
}

const continueInFrench = () => {

    return lgGreen(frenchPrompts.topics_selection)
}
const continueInEnglish = () => {

    return lgBlue("Select the topics that you will need for your project")
}

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

    return handleListSelection(answers.user_lang === "English")
}
async function handleListSelection(isEnglish) {
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
    process.exit(0);

}

async function selectTopics() {

    const topics = await inquirer.prompt({
        name: 'user_topics',
        type: 'checkbox',
        message: frenchPrompts.topics_selection,
        choices: frenchPrompts.topics_list,
    });

    sleep(10000)

}
await selectTopics()