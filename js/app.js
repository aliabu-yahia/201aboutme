'use strict';

let score = 0, answer;
let randNum = Math.floor(Math.random() * 100) + 1;
let dishes = ['moussaka', 'biryani', 'brownies', 'fettuccine alfredo', 'granola bars', 'musakhan', 'apple crumble'];
let userName = prompt('What\'s your name?');
alert(`Hello, ${userName}! Let\'s play a guessing game!`);

// Q1
function q1() {
    let question1 = prompt('Is my name Shahed?');
    switch (question1.toLowerCase()) {
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
}

// Q2

function q2() {
    let question2 = prompt('Do I live in USA?');
    switch (question2.toLowerCase()) {
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
}
// Q3
function q3() {
    let question3 = prompt('Am I 24 years old?');
    switch (question3.toLowerCase()) {
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
}

// Q4
function q4() {
    let question4 = prompt('Am I coding right now?');
    switch (question4.toLowerCase()) {
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

}
// Q5
function q5() {
    let question5 = prompt('Is my favorite color blue?');
    switch (question5.toLowerCase()) {
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
}


// Q6
function q6() {
    for (let i = 3; i >= 0; i--) {
        let number = prompt('Guess a number between 1 and 100');
        if (number > randNum) {
            alert('Too high. You have ' + i + ' tries left.');
        } else if (number < randNum) {
            alert('Too low. You have ' + i + ' tries left.');
        } else if (number == randNum) {
            alert('You guessed it right!');
            score++;
            break;
        }
        // console.log('Guess a number between 1 and 100', number);
        if (i == 0) {
            alert(`The correct answer is ${randNum}.`);
        }
    }
}



// Q7
function q7() {
    for (let k = 5; k >= 0; k--) {
        let dish = prompt('What do you think is a favorite dish of mine?');
        for (let j = 0; j <= dishes.length; j++) {
            if (dish.toLowerCase() === dishes[j]) {
                alert('That\'s surely a fav!');
                score++;
                k = 0;
                break;
            } else if (dish.toLowerCase() !== dishes[j]) {
                if (j === dishes.length) {
                    alert('Not that one. You have ' + k + ' tries left.');
                }
            }
        }
        // console.log('What do you think is a favorite dish of mine?', dish);
    }
    alert(`My favorite dishes are ${dishes}`);
}
q1();
q2();
q3();
q4();
q5();
q6();
q7();
alert(`Your score is ${score} out of 7. Thank you ${userName} for playing!`);





