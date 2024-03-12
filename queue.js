let error = false; //boolean
let answer =[];
let InProgress = false;
let score;
let thisPoints;

function QueueGame(){
    if (InProgress) return;
    InProgress = true;
    let startPointer, endPointer; 
    const queueLength = 10;
    score = 0;

//Questions meant to be stored in a file but since file handling doesn't work on pages, I will use a user defined data structure instead
    const questions = [
        {question: "Show what the outcome will be of the following processes is performed on this queue. Enqueue(“Dolphin”) Dequeue()", answer: "+Dolphin#-", points: 2},
        {question: "Show what the outcome will be if the following processes are performed on this queue. Enqueue(“Capybara”) Enqueue(“dog”) Dequeue()", answer: "+Capybara#+dog#-", points:3},
        {question: "Show what the outcome will be if the following processes are performed on this queue. Enqueue(“Capybara”) Enqueue(“Roblox”) Dequeue() Enqueue(“Dog”)", answer: "+Capybara#+Roblox#-#+Dog", points: 4},
        {question: "Show what the outcome will be if the following processes are performed on this queue.  Enqueue(“Cat”)Dequeue() Enqueue(“Dog”) Dequeue() Enqueue(“Penguin”)", answer: "+Cat#-#+Dog#-#+Penguin", points : 5},
        {question: "Show what the outcome will be if the following processes are performed on this queue. Enqueue(“Cat”) Enqueue(“Dog) Enqueue(“Penguin”) Dequeue() Enqueue(“Tetris”) Enqueue(“Dinosaurs”) Dequeue() Dequeue()", answer: "+Cat#+Dog#+Penguin#-#+Tetris#+Dinosaurs#-#-", points: 7}
    ];
    const words = ["Cat", "Dog", "Penguin", "Tetris", "Dinosaurs", "Snake Game", "Minesweeper", "Roblox", "Pokemon", "Capybara"];


        startPointer = 1;
        endPointer = 0;

//initialise arrays
        let queue =[];
        answer = [];

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
        thisPoints = questions[rand].points;
        const operations = thisOperations.split("#")

        console.log(thisQuestion)
        document.getElementById("htmlquestion").innerText = thisQuestion

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
        for (let i = 0 ; i < queue.length ; i++){
            document.getElementById(i+1).innerText = queue[i];
        }
}


function checkAnswer(error, answer){
    let userAnswer = [];
    let i = 10;
    let userInput;

    while (i > 0) {
        userInput = document.getElementById("index_" + i).value.trim();
        if (userInput === "") {
          break;
        }
        userAnswer.push(userInput);
        i--;
}

    if (error){
        if (userAnswer[0] == "ERROR"){
            score += thisPoints;
            document.getElementById("textmessage").innerText = "correct!";
        } else {
            document.getElementById("textmessage").innerText = "wrong :(";
        }
    } else{
        if (userAnswer.toString() == answer.toString()){
            score += thisPoints;
            document.getElementById("textmessage").innerText = "correct!";
        } else {
            document.getElementById("textmessage").innerText = "wrong :(";
        }
    }
    InProgress = false;
}

document.getElementById("submit").addEventListener("click", function() {
    checkAnswer(error, answer);
});

QueueGame()