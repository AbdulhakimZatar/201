"use strict";
//Welcoming user
var userName = prompt('Hi, what is your name?');
alert('Hi '+userName+', are you ready for quick quiz about me? answer using yes or no');

//counter for correct answers + Array for top four games i love.
var correctAnswers = 0;
var topGames = ['gta','arma','squad','fifa'];

//asking user and make sure he/she answer with yes/no
var a1 = prompt('Do i love coding?');
if(a1.toLocaleLowerCase() == ("yes" || "y")){
    alert('Correct');
    console.log('First answer is correct');
    correctAnswers++;
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
    correctAnswers++;
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
    correctAnswers++;
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
    console.log('Fourth answer is correct');
    correctAnswers++;
} else {
    alert('Please use yes/no or y/n');
    console.log('Wrong value');
}

var a5 = prompt("Last country i visited was France, is that right?");
if(a5.toLocaleLowerCase() == ("yes" || "y")){
    alert('Wrong');
    console.log('Fifth answer is wrong');
} else if(a5.toLocaleLowerCase() == ("no" || "n")) {
    alert('Correct');
    console.log('Fifth answer is correct');
    correctAnswers++;
} else {
    alert('Please use yes/no or y/n');
    console.log('Wrong value');
}

//Update for the about me game, adding q6 + q7


for(var q6_Attempts = 1; q6_Attempts <= 4; q6_Attempts++)
{
    var a6 = prompt("What rating would i give for game called 'Squad', rating should be between 0-10");
    if(a6 == '8'){
        alert('Correct');
        console.log('Sixth answer is correct');
        correctAnswers++;
        break;
    }else {
        alert('Try again this is your '+q6_Attempts+'/4 attempt.');
        if(q6_Attempts == '4'){
            alert('You used all your opportunities, the correct answer is 8.');
        }
    }
}

for(var q7_Attempts = 1; q7_Attempts <= 6; q7_Attempts++)
{
    var a7 = prompt("Name one of the top four games i love!");
    var i = 0; // counter to check all array topGames data.

    for(i; i <= topGames.length; i++){
    if(a7 == topGames[i]){
        break;
    }}

    if(a7 == topGames[i]){
        alert('Correct, you got one of the correct answers, these the top 4 games i love Arma, GTA, Squad and Fifa.');
        console.log('Seventh answer is correct');
        correctAnswers++;
        break;
    }else {
        alert('Try again this is your '+q7_Attempts+'/6 attempt.');
        if(q7_Attempts == '6'){
            alert('You used all your opportunities, the correct answers are Arma, GTA, Squad and Fifa.');
        }
    }
}


alert('Thanks '+userName+' for your answers, you got '+correctAnswers+'/7, come back later for more quizes');


