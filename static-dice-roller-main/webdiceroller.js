function rollDice(){
    //rolls the dice from the server
    fetch('https://server-dice-roller-ra.azurewebsites.net/randomGenerator')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            var dice1 = data.randomNumber1;
            var dice2 = data.randomNumber2;
            var sum = dice1 + dice2;

            document.getElementById("sum").innerHTML = `Dice 1: ${dice1} <br> Dice 2: ${dice2} <br> Result: ${sum}`;
            if (sum === 7 || sum === 11) {
                document.getElementById("game-status").innerHTML = "Winner!";
            } else {
                document.getElementById("game-status").innerHTML = "You Lose!";
            }

            document.getElementById("result").style.display = "block";
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error.message);
        });
}

//rolls the dice when the page loads
window.onload = function() {
    rollDice();
};

//event listenter so the dice are rolled when enter is pressed
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        rollDice();
    }
});
