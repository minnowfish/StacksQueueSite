function QueueGame(){
    let startPointer, endPointer; 
    let questionNumber;
    let score = 0;
    let error = false; //boolean
    const queueLength = 10;

//Questions meant to be stored in a file but since file handling doesn't work on pages, I will use a user defined data structure instead
    const questions = [
        {question: "Show what the outcome will be of the following processes is performed on this queue. Enqueue(“Dolphin”) Dequeue()", answer: "+Dolphin#-", points: 2}
    ];
    const words = ["Cat", "Dog", "Penguin", "Tetris", "Dinosaurs", "Snake Game", "Minesweeper", "Roblox", "Pokemon", "Capybara"];

    for (questionNumber = 0 ; questionNumber < 3 ; questionNumber++ ){
        startPointer = 1;
        endPointer = 0;

//initialise arrays
        let queue =[];
        let answer =[];
        let userAnswer =[];

        let rand = Math.floor(1 + Math.random()*4);
        for (let i = 0 ; i < rand ; i++){
            let thisWord = words[Math.floor(Math.random()*words.length)];
            queue.push(thisWord);
            answer.push(thisWord);
            endPointer++;
        }

        rand = Math.floor(Math.random()*questions.length);
        let thisQuestion = questions[rand].question;
        let thisOperations = questions[rand].answer;
        let thisPoints = questions[rand].points;
        const operations = thisOperations.split("#")

        for (let i = 0 ; i < operations.length ; i++){
            if (operations[i][0] == "+"){
                if (endPointer == queueLength){
                    error = true;
                } else{
                    endPointer++;
                    answer.push(operations[0].slice(1));
                }
            } else {
                if (endPointer == 0){
                    error = true;
                } else{
                    endPointer--;
                    answer.shift();
                }
            }
        }

        //output question to user on site
        //get user answer on site (maybe use prompt?)
        userAnswer = input.split(",");
        if (error){
            if (userAnswer[0] == "ERROR"){
                score += thisPoints;
                console.log("Correcto!!!");
            } else {
                console.log("Wrong >:(");
            }
        } else{
            if (userAnswer.toString() == answer.toString()){
                score += thisPoints;
                console.log("Correcto!!!");
            } else {
                console.log("Wrong >:(");
            }
        }
    }
    IsHighscore();
    return score;
}

function StackGame(){
    let startPointer, endPointer; 
    let questionNumber;
    let score = 0;
    let error = false; //boolean
    const queueLength = 10;

//Questions meant to be stored in a file but since file handling doesn't work on pages, I will use a user defined data structure instead
    const questions = [
        {question: "Show what the outcome will be of the following processes is performed on this queue. Enqueue(“Dolphin”) Dequeue()", answer: "+Dolphin#-", points: 2}
    ];
    const words = ["Cat", "Dog", "Penguin", "Tetris", "Dinosaurs", "Snake Game", "Minesweeper", "Roblox", "Pokemon", "Capybara"];

    for (questionNumber = 0 ; questionNumber < 3 ; questionNumber++ ){
        startPointer = 1;
        endPointer = 0;

//initialise arrays
        let queue =[];
        let answer =[];
        let userAnswer =[];

        let rand = Math.floor(1 + Math.random()*4);
        for (let i = 0 ; i < rand ; i++){
            let thisWord = words[Math.floor(Math.random()*words.length)];
            queue.push(thisWord);
            answer.push(thisWord);
            endPointer++;
        }

        rand = Math.floor(Math.random()*questions.length);
        let thisQuestion = questions[rand].question;
        let thisOperations = questions[rand].answer;
        let thisPoints = questions[rand].points;
        const operations = thisOperations.split("#")

        for (let i = 0 ; i < operations.length ; i++){
            if (operations[i][0] == "+"){
                if (endPointer == queueLength){
                    error = true;
                } else{
                    endPointer++;
                    answer.push(operations[0].slice(1));
                }
            } else {
                if (endPointer == 0){
                    error = true;
                } else{
                    endPointer--;
                    answer.pop();
                }
            }
        }

        //output question to user on site
        //get user answer on site (maybe use prompt?)
        userAnswer = input.split(",");
        if (error){
            if (userAnswer[0] == "ERROR"){
                score += thisPoints;
                console.log("Correcto!!!");
            } else {
                console.log("Wrong >:(");
            }
        } else{
            if (userAnswer.toString() == answer.toString()){
                score += thisPoints;
                console.log("Correcto!!!");
            } else {
                console.log("Wrong >:(");
            }
        }
    }
    IsHighscore();
    return score;
}

function IsHighscore(){
    //This module is useless without file handling so it will randomly return true or false

    let rand = Math.floor(Math.random()*2);
    if (rand == 1){
    //unfortunately, as node.js modules does not work on github pages, this won't work 
        let highscore = IsHighscore()
        if (highscore = true){
            console.log("Congrats! You have achieved a new highscore!") //change html when html is finished
        }
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

function main(){
    let score;

    //Get email, name and newline from user (requires html/css to code)
    //Get user's choice (event listen for button click)
    document.getElementById('queueBtn').addEventListener('click', function() {
        console.log("Queue Function Ran");
        score = QueueGame();
    });
    document.getElementById('stackBtn').addEventListener('click', function(){
        console.log("Stack Function Ran");
        score = StackGame();
    });
}

main()