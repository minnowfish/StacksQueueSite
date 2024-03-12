/*function IsHighscore(){
    //This module is useless without file handling so it will randomly return true or false

    let rand = Math.floor(Math.random()*2);
    if (rand == 1){
    //unfortunately, as node.js modules does not work on github pages, this won't work 
        console.log("Congrats! You have achieved a new highscore!") //change html when html is finished
        }
    }
     /*append score

        var fs = require('fs');
        const NewLine = email+'\t'+name+'\t'+score+'\n'
        fs.appendFile(ScoreFile , NewLine , function(err){
            if (err) return 1;
            console.log("Score appended successfully")
        });
*/


function main(){

    //Get email, name and newline from user (requires html/css to code)
    //Get user's choice (event listen for button click)
    document.getElementById('queueBtn').addEventListener('click', function() {
        console.log("Queue Function Ran");
    });
    document.getElementById('stackBtn').addEventListener('click', function(){
        console.log("Stack Function Ran");
    });
}

main()