// function diff(value) {
//     if (value > 27)
//         return (value - 27) * 2;
//     else
//         return 27 - value;
// }

// console.log(diff(42));
// console.log(diff(20));

// function add(val1, val2) {
//     if (val1 == val2)
//         return (val1 * 6);
//     else
//         return val1 + val2;
// }

// console.log(add(12, 12));
// console.log(add(12, 10));

// function forty(val1, val2) {
//     if (val1 == 40 || val2 == 40 || val1 + val2 == 40)
//         return true;
//     else
//         return false;
// }

// console.log(forty(40, 40));
// console.log(forty(20, 20));
// console.log(forty(30, 25));
// console.log(forty(35, 5));

// function takeAStringAsParam(str) {
//     const result = str.match(/[0-9]/g);
//     return result == null ? 0 : result.map(x => parseInt(x)).reduce((cum, cur) => cum += cur);
// }

// console.log(takeAStringAsParam("3GH2U87A7"));

var rs = require("readline-sync");

// Handle the secret text (e.g. password).
// var favFood = rs.question("What is your favorite food? ", {
//     hideEchoBack: true, // The typed text on screen is hidden by `*` (default).
// });
// console.log("Oh, " + userName + " loves " + favFood + "!");

const hobbies = [];
var areYouSure = false;
var moreHobbies = 0;

function getHobbyCount() {
    moreHobbies = rs.questionInt("How many more hobbies do you have? ");
}

function addHobbies(numHobbies) {
    let counter = 0;
    while (counter < numHobbies) {
        var input = rs.prompt();
        hobbies.push(input);
        counter += 1;

        if (counter < numHobbies) {
            console.log(
                `--Awesome ${userName}! "${input}" is so much fun! What are the other ${
          numHobbies - counter
        }?`
            );
        } else {
            console.log(`Ok, thanks. It's fun to do ${hobbies}`);
        }
    }
}

const userName = rs.question("May I have your name? ");
const favHobby = rs.question("What is your favorite hobby? ");

hobbies.push(favHobby);
getHobbyCount();

if (moreHobbies > 0) {
    console.log("Cool! What are they?");
    addHobbies(moreHobbies);
} else {
    areYouSure = rs.keyInYN(
        `Are you sure ${hobbies[0]} is the only thing you like to do? `
    );
}

if (!areYouSure && hobbies.length <= 1) {
    getHobbyCount();
    console.log("Cool! What are they?");
    addHobbies(moreHobbies);
} else if (areYouSure) {
    console.log(`${hobbies} is cool, good for you!`);
}