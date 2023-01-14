#!/usr/bin/env node

import {preInit} from "./pre.init.js";
import inquirer from 'inquirer';
import chalk from 'chalk';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import {createSpinner} from 'nanospinner';

const libraries = [
    {
        name: 'react-navigation V6',
        value: 'react-navigation'
    },
    {
        name: 'redux',
        value: 'redux'
    },
    {
        name: '@reduxjs/toolkit',
        value: 'reduxjs-toolkit'
    },
    {
        name: 'react-native-maps',
        value: 'react-native-maps'
    }
];



// await preInit()


inquirer
    .prompt([
        {
            type: 'checkbox',
            message: 'Select the libraries you want to include in your project:',
            name: 'libraries',
            choices: libraries
        }
    ])
    .then(answers => {
        // `answers.libraries` will be an array of the selected libraries
        console.log(chalk.cyan.bgYellowBright.bold(`You have selected: ${answers.libraries.join(', ')}`));
    });