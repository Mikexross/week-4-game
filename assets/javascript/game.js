$(document).ready(function() {
    console.log("ready!");

    // generate random number for player to guess
    var random = Math.floor(Math.random() * 102 + 19)
    console.log(random)
    $("#randomNumber").text(random);

    // set starting values for variables
    var wins = 0;
    var losses = 0;
    var gemNumbers = [];
    var gemSum = 0;

    // add/update game results to DOM

    $('#winCount').text(wins);
    $('#lossCount').text(losses);

    // function to reset values for gem numbers, gemsum, getnumbersarray
    function reset() {
    	random = Math.floor(Math.random() * 102 + 19);
        gemSum = 0;
        $("#randomNumber").text(random);
        
        console.log(random);

        gemNumbers = [];
        gemNumbersArray();
        $('#userNumber').text(gemSum);
    }
    console.log(reset)

    // generate random numbers for each gem and add to gemNumbers Array
    function gemNumbersArray() {
        for (var i = 0; i < 4; i++) {
            var num = Math.floor(Math.random() * 12 + 1);
            gemNumbers.push(num);
        }
        console.log(gemNumbers)
    }
    gemNumbersArray();


    // on click event for each gem and add to gemSum
    $('#red').on("click", function() {
        gemSum = gemSum + gemNumbers[0];
        $('#userNumber').text(gemSum);
        result();

    });

    $('#blue').on("click", function() {
        gemSum = gemSum + gemNumbers[1];
        $('#userNumber').text(gemSum);
        result();

    });

    $('#green').on("click", function() {
        gemSum = gemSum + gemNumbers[2];
        $('#userNumber').text(gemSum);
        result();

    });

    $('#yellow').on("click", function() {
        gemSum = gemSum + gemNumbers[3];
        $('#userNumber').text(gemSum);
        result();

    });


    // IF player is under randomNumber continue selecting gems, if over add to losses, if exact player wins
    function result() {

        if (gemSum === random) {
            wins++;
            $('#winCount').text(wins);
            reset();
            alert("You're a Crystal Collector! Keep playing.");


            // put a reset function here
        } else if (gemSum > random) {
            losses++;

            $('#lossCount').text(losses);
            reset();
            alert("Too much Crystal. You lose. Try again!");
        };

    };






});