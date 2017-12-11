var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = []; // array to push user choices to
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from
    

    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //taking in user guess
        var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; //computer selects random letter
        guessesSoFar.push(userGuess); //pushing user guess to guesses so far
       
        if (userGuess == computerGuess) {
            wins++;
            guessesLeft = 9; //reseting the guesses back to 9 so that the user can play again
            guessesSoFar.length = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
        }


        else if (guessesLeft == 0){
            losses++;
            guessesLeft = 9;
            guessesSoFar.length = 0;

        }
        else if (userGuess !== computerGuess){
            guessesLeft--; //decrementing the guesses left
        }  

        console.log(userGuess)
        
        document.getElementById('Wins').innerHTML = "Wins: " + wins;        
        document.getElementById('Losses').innerHTML = "Losses: " + losses;
        document.getElementById('Guesses-left').innerHTML = "Guesses Left: " + guessesLeft;
        document.getElementById('Guesses-so-far').innerHTML = "Your Guesses so far: " + guessesSoFar;


     

}
