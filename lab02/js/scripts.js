"use strict";
//Welcoming user
var userName = prompt('Hi, what is your name?');
alert('Hi '+userName+', are you ready for quick quiz about me? answer using yes or no');

//asking user and make sure he/she answer with yes/no
var a1 = prompt('Do i love coding?');
if(a1.toLocaleLowerCase() == ("yes" || "y")){
    alert('Correct');
    console.log('First answer is correct');
} else if(a1.toLocaleLowerCase() == ("no" || "n")) {
    alert('Wrong');
    console.log('First answer is wrong');
} else {
    alert('Please use yes/no or y/n');
    console.log('Wrong value');
}

var a2 = prompt('Am i a gamer?');
if(a2.toLocaleLowerCase() == ("yes" || "y")){
    alert('Correct');
    console.log('Second  answer is correct');
} else if(a2.toLocaleLowerCase() == ("no" || "n")) {
    alert('Wrong');
    console.log('Second answer is wrong');
} else {
    alert('Please use yes/no or y/n');
    console.log('Wrong value');
}

var a3 = prompt('Is travel my favorite hobby?');
if(a3.toLocaleLowerCase() == ("yes" || "y")){
    alert('Correct');
    console.log('Third answer is correct');
} else if(a3.toLocaleLowerCase() == ("no" || "n")) {
    alert('Wrong');
    console.log('Third answer is wrong');
} else {
    alert('Please use yes/no or y/n');
    console.log('Wrong value');
}

var a4 = prompt("I don't like food, is this right?");
if(a4.toLocaleLowerCase() == ("yes" || "y")){
    alert('Wrong');
    console.log('fourth answer is wrong');
} else if(a4.toLocaleLowerCase() == ("no" || "n")) {
    alert('Correct');
    console.log('fourth answer is correct');
} else {
    alert('Please use yes/no or y/n');
    console.log('Wrong value');
}

alert('Thanks '+userName+' for your answers, come back later for more quizes');