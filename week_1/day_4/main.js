const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
   ]

let userguess = document.getElementById('guess');
let clue = document.getElementById("clue");
let hint = document.getElementById("hint");
let guessesLeft = document.getElementById("guessesLeft");
let count = 10;
let currentMovieIndex = Math.round(count * Math.random());
clue.innerHTML = movies[currentMovieIndex].explanation;
let guessCount = 3;




   function makeGuess(event) {
    event.preventDefault();
        console.log(userguess.value);
    if (userguess.value.toLowerCase() == movies[currentMovieIndex].title.toLowerCase()) {
        console.log("correct answer");
        updateGame();
        return;
    }
    console.log("incorrect");
    userguess.value = "";
    guessCount--;
    if (guessCount < 1) {
        resetGame();
        return;
    }

    console.log(guessCount);
    console.log(guessesLeft);
    guessesLeft.innerHTML = "Sorry, incorrect! " + guessCount + " guesses remaining.";
    
   }

   function resetGame() {
    guessesLeft.innerHTML = "Sorry, out of guesses. The correct answer was " + movies[currentMovieIndex].title + ".";
    guessCount = 3;
    hint.innerHTML = "";
    userguess.value = "";
    currentMovieIndex = Math.round(10 * Math.random());
    console.log("Movie number " + currentMovieIndex + " is " + movies[currentMovieIndex].title);
    clue.innerHTML = movies[currentMovieIndex].explanation;
        
   }

   function updateGame() {
    guessCount = 3;
    hint.innerHTML = "";
    userguess.value = "";
    guessesLeft.innerHTML = "";
    currentMovieIndex = Math.round(10 * Math.random());
    console.log("Movie number " + currentMovieIndex + " is " + movies[currentMovieIndex].title);
    clue.innerHTML = movies[currentMovieIndex].explanation;
        
   }

  

   document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    var button = document.getElementById("hintButton");
  
    // Attach an event listener to the button
    button.addEventListener("click", function() {
      // Call your desired function here
      showHint();
    });
  
    // Define your desired function
    function showHint() {
      hint.innerHTML = "Hint: " + movies[currentMovieIndex].hint;
    }
  });