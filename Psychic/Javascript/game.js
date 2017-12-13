var wins = 0;
var losses = 0;


var guessesLeft = 9;
var guessesSoFar = []; 
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from
    

    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 
        var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
        guessesSoFar.push(userGuess); 
       
        if (userGuess == computerGuess) {
            wins++;
            guessesLeft = 9; 
            guessesSoFar.length = 0; 
        }


        else if (guessesLeft == 0){
            losses++;
            guessesLeft = 9;
            guessesSoFar.length = 0;

        }
        else if (userGuess !== computerGuess){
            guessesLeft--; 
        }  

        console.log(userGuess)
        
        document.getElementById('Wins').innerHTML = "Wins: " + wins;        
        document.getElementById('Losses').innerHTML = "Losses: " + losses;
        document.getElementById('Guesses-left').innerHTML = "Guesses left: " + guessesLeft;
        document.getElementById('Guesses-so-far').innerHTML = "Your guesses so far: " + guessesSoFar;


     

}
