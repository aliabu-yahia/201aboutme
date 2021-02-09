'use strict';

let score = 0, answer;
let randNum = Math.floor(Math.random() * 100);
let dishes = ['moussaka', 'biryani', 'brownies', 'fettuccine alfredo', 'granola bars', 'musakhan', 'apple crumble'];
let userName = prompt('What\'s your name?');
alert('Hello, ' + userName + '! Let\'s play a guessing game!');

// Q1

let myName = prompt('Is my name Shahed?');
switch (myName.toLowerCase()) {
    case 'yes':
    case 'y':
        // console.log('That\'s correct!');
        alert('That\'s correct!');
        score++;
        break;
    case 'no':
    case 'n':
        // console.log('Sorry, That\'s incorrect');
        alert('Sorry, That\'s incorrect');
        break;
    default:
        break;
}

// Q2

let country = prompt('Do I live in USA?');
switch (country.toLowerCase()) {
    case 'no':
    case 'n':
        // console.log('That\'s correct!');
        alert('That\'s correct!');
        score++;
        break;
    case 'yes':
    case 'y':
        // console.log('Sorry, That\'s incorrect');
        alert('Sorry, That\'s incorrect');
        break;
    default:
        break;
}

// Q3

let age = prompt('Am I 24 years old?');
switch (age.toLowerCase()) {
    case 'no':
    case 'n':
        // console.log('That\'s correct!');
        alert('That\'s correct!');
        score++;
        break;
    case 'yes':
    case 'y':
        // console.log('Sorry, That\'s incorrect');
        alert('Sorry, That\'s incorrect');
        break;
    default:
        break;
}

// Q4

let coding = prompt('Am I coding right now?');
switch (coding.toLowerCase()) {
    case 'yes':
    case 'y':
        // console.log('That\'s correct!');
        alert('That\'s correct!');
        score++;
        break;
    case 'no':
    case 'n':
        // console.log('Sorry, That\'s incorrect');
        alert('Sorry, That\'s incorrect');
        break;
    default:
        break;
}

// Q5

let favColor = prompt('Is my favorite color blue?');
switch (favColor.toLowerCase()) {
    case 'yes':
    case 'y':
        // console.log('That\'s correct!');
        alert('That\'s correct!');
        score++;
        break;
    case 'no':
    case 'n':
        // console.log('Sorry, That\'s incorrect');
        alert('Sorry, That\'s incorrect');
        break;
    default:
        break;
}

// Q6

for (let i = 3; i >= 0; i--) {
    let number = prompt('Guess a number');
    if (number > randNum) {
        alert('Too high. You have ' + i + ' trials left.');
    } else if (number < randNum) {
        alert('Too low. You have ' + i + ' trials left.');
    } else if (number === randNum) {
        alert('You guessed it right!');
        score++;
        break;
    }
    // console.log('Guess a number', number);
}
alert('The correct answer is '+randNum+'.');

// Q7

for (let k = 5; k >= 0; k--) {
    let dish = prompt('What do you think is a favorite dish of mine?');
    for (let j = 0; j <= dishes.length; j++) {
        if (dish.toLowerCase() === dishes[j]) {
            alert('That\'s surely a fav!');
            score++;
            answer = 'correct';
            break;
        } else if (dish.toLowerCase() !== dishes[j]) {
            if (j === dishes.length) {
                alert('Not that one. You have ' + k + ' trials left.');
            }
        }
    }
    if (answer) {
        break;
    }
    // console.log('What do you think is a favorite dish of mine?', dish);
}

alert('My favorite dishes are ' + dishes);
alert('Your score is ' + score + ' out of 7. Thank you ' + userName + ' for playing!');



