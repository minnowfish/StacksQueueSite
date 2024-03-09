function QueueGame(){
    let startPointer, endPointer; 
    let questionNumber;
    const queueLength = 10;

//Questions meant to be stored in a file but since file handling doesn't work on pages, I will use a user defined data structure instead
    const questions = [
        {question: "", answer: "", points: 1}
    ];
    const words = ["Cat", "Dog", "Penguin", "Tetris", "Dinosaurs", "Snake Game", "Minesweeper", "Roblox", "Pokemon", "Capybara"];

    for (questionNumber = 0 ; questionNumber < 3 ; questionNumber++ ){
        startPointer = 1;
        endPointer = 0;

//initialise arrays
        let queue = new Array(10).fill(null);
        let answer = new Array(10).fill(null);
        let userAnswer = new Array(10).fill(null);

        let rand = Math.floor(Math.random()*4);
        for (let i = 0 ; i < rand ; i++){
            queue[i] = words[Math.floor(Math.random()*words.length)];
            endPointer++;
        }

        rand = Math.floor(Math.random()*questions.length);
        thisQuestion = questions[rand].question;
        thisOperations = questions[rand].answer;
        thisPoints = questions[rand].points;
        
    }
}

function StackGame(){

}

function IsHighscore(){
    //This module is useless without file handling so it will randomly return true or false
    //What it would've actually been:

    let rand = Math.floor(Math.random()*2);
    if (rand == 0){
        return false;
    } else{
        return true;
    }
}

function main(){
    let score;

    //Get email, name and newline from user (requires html/css to code)
    //Get user's choice (event listen for button click)
    QUEUEBUTTON.addEventListener('click', function() {
        score = QueueGame();
    });
    STACKBUTTON.addEventListener('click', function(){
        score = StackGame();
    });

    //unfortunately, as node.js modules does not work on github pages, this won't work 
    let highscore = IsHighscore(email, score)
    if (highscore = true){
        console.log("Congrats! You have achieved a new highscore!") //change html when html is finished
    }

    /* file handling, does not work on github pages so no highscore system :( 

    var fs = require('fs');
    const NewLine = email+'\t'+name+'\t'+score+'\n'
    fs.appendFile(ScoreFile , NewLine , function(err){
        if (err) return 1;
        console.log("Score appended successfully")
    });
    */
}