// game.js

$("#beginBtn").click(function() {
    $("#question").removeClass("hide");
    $(this).addClass("hide");
    
    var playerName = prompt("Enter your nickname: ");
    var playerNameLetters = playerName.split("");

    // Limit length that 'playerName' can be to 20 characters
    if (playerNameLetters.length > 20) {
        alert("working");
        var shortName = [];
        for (var i = 0; i < 20; i++) {
            shortName.push(playerNameLetters[i]);
        }

        playerName = shortName.join("") + "...";
    }

    startQuiz(playerName);
});

var allQuestions = [
    {   // # '[0]' or 1
        question: "How do you enter a room filled with chickens?", 
        choices: [
            "Run around like crazy", "Pet all the pretty birdies", 
            "Start bocking like a chicken with them"
        ],
        choiceRating: [2, 1, 8] // a lower rating => more mammals, more intelligent. a higher rating => more reptiles, less intelligent.
    },
    {   // # '[1]' or 2
        question: "Are worms an animal?",
        choices: ["yes", "no"],
        choiceRating: [200, 0]
    },
    {   // # '[2]' or 3
        question: "Do you care about other peoples feelings?",
        choices: ["yes", "depends on the day", "no"],
        choiceRating: [1, 3, 8]
    },
    {   // # '[3]' or 4
        question: "Morning or evening person?",
        choices: ["morning", "evening"],
        choiceRating: [2, 3]
    },
    {   // # '[4]' or 5
        question: "Does a full moon just get you going or nah?",
        choices: ["wow so true", "nah"],
        choiceRating: [1, 5]
    },
    {   // # '[5]' or 6
        question: "Berry smoothie or chocolate shake?",
        choices: ["berrie smoothie", "chocolate shake"],
        choiceRating: [5, 3]
    }
] // end of 'allQuestions'

var userAnswers = [];
var userChoiceRatings = [];

function startQuiz(playerName) {
    $("#nickname").text(playerName);
    displayQ(0);
}

function displayQ(qNum) {
    if (qNum <= allQuestions.length) {
        // display question
        $("#questionNum").text(qNum + 1);
        $("#questionText").html("<p>" + allQuestions[qNum].question + "</p>");

        // loop through and add each choice as a list element to the DOM
        for (var i = 0; i < allQuestions[qNum].choices.length; i++) {
            $("#choices").append("<input type='radio' name='chooseone' value='" + i + "'><label for='" + i + "'>&nbsp;" + allQuestions[qNum].choices[i] + "</label><br/>");
        }

        var nextQ = qNum + 1;
        $("#submitA").click(function() {
            $("#choices").html("");
            displayQ(nextQ);
        });

    } else {
        totalQuiz();
    }  
}

function  totalQuiz() {

}