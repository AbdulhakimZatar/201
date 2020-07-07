"use strict";
//Welcoming user
var userName = prompt('Hi, what is your name?');
alert('Hi '+userName+', are you ready for quick quiz about me? answer using yes or no');

//asking user and make sure he/she answer with yes/no
var a1 = prompt('Do i love coding?').toLocaleLowerCase();
if((a1 == "yes") || (a1 == "y")){
    alert('Correct');
    console.log('First answer is correct');
} else if((a1 == "no") || (a1 == "n")) {
    alert('Wrong');
    console.log('First answer is wrong');
} else {
    alert('Please use yes/no or y/n');
    console.log('Wrong value');
}

var a2 = prompt('Am i a gamer?').toLocaleLowerCase();
if((a2 == "yes") || (a2 == "y")){
    alert('Correct');
    console.log('Second  answer is correct');
} else if((a2 == "no") || (a2 == "n")) {
    alert('Wrong');
    console.log('Second answer is wrong');
} else {
    alert('Please use yes/no or y/n');
    console.log('Wrong value');
}

var a3 = prompt('Is travel my favorite hobby?').toLocaleLowerCase();
if((a3 == "yes") || (a3 == "y")){
    alert('Correct');
    console.log('Third answer is correct');
} else if((a3 == "no") || (a3 == "n")) {
    alert('Wrong');
    console.log('Third answer is wrong');
} else {
    alert('Please use yes/no or y/n');
    console.log('Wrong value');
}

var a4 = prompt("I don't like food, is this right?").toLocaleLowerCase();
if((a4 == "yes") || (a4 == "y")){
    alert('Wrong');
    console.log('fourth answer is wrong');
} else if((a4 == "no") || (a4 == "n")) {
    alert('Correct');
    console.log('Fourth answer is correct');
} else {
    alert('Please use yes/no or y/n');
    console.log('Wrong value');
}

var a5 = prompt("Last country i visited was France, is that right?").toLocaleLowerCase();
if((a5 == "yes") || (a5 == "y")){
    alert('Wrong');
    console.log('Fifth answer is wrong');
} else if((a5 == "no") || (a5 == "n")) {
    alert('Correct');
    console.log('Fifth answer is correct');
} else {
    alert('Please use yes/no or y/n');
    console.log('Wrong value');
}

alert('Thanks '+userName+' for your answers, come back later for more quizes');