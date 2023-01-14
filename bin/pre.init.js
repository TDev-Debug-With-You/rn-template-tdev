import readline from "node:readline"

export const preInit = () =>{


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let libraries = {
    navigation: 'react-navigation V6',
    stateManagement: 'redux',
    stateManagement2: '@reduxjs/toolkit',
    maps: 'react-native-maps'
}

console.log("Please choose the libraries you want to install in your project:")
console.log("1: " + libraries.navigation)
console.log("2: " + libraries.stateManagement)
console.log("3: " + libraries.stateManagement2)
console.log("4: " + libraries.maps)
rl.question("Enter the number of the library you want to install: ", (answer) => {
    switch (answer) {
        case '1':
            console.log("You have chosen to install: " + libraries.navigation);
            break;
        case '2':
            console.log("You have chosen to install: " + libraries.stateManagement);
            break;
        case '3':
            console.log("You have chosen to install: " + libraries.stateManagement2);
            break;
        case '4':
            console.log("You have chosen to install: " + libraries.maps);
            break;
        default:
            console.log("Invalid choice, please enter a number between 1 and 4")
    }
    rl.close();
});
}
