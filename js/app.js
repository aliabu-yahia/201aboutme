'use strict';

function factRight(answer) {
    switch (answer.toLowerCase()) {
        case 'yes':
        case 'y':
            // console.log(answer, 'That\'s correct!');
            alert('That\'s correct!');
            break;
        case 'no':
        case 'n':
            // console.log(answer, 'Sorry, that\'s incorrect.');
            alert('Sorry, that\'s incorrect.');
            break;
        default:
            break;
    }
}

function factWrong(answer) {
    switch (answer.toLowerCase()) {
        case 'yes':
        case 'y':
            // console.log(answer, 'Sorry, that\'s incorrect.');
            alert('Sorry, that\'s incorrect.');
            break;
        case 'no':
        case 'n':
            // console.log(answer, 'That\'s correct!');
            alert('That\'s correct!');
            break;
        default:
            break;
    }
}

let userName = prompt('What\'s your name?');
alert('Hello, ' + userName + '! Let\'s play a guessing game!');

let myName = prompt('Is my name Shahed?');
factRight(myName);

let country = prompt('Do I live in USA?');
factWrong(country);

let age = prompt('Am I 24 years old?');
factWrong(age);

let coding = prompt('Am I coding right now?');
factRight(coding);

let favColor = prompt('Is my favorite color blue?');
factRight(favColor);

alert('Thank you '+userName+' for playing!');
