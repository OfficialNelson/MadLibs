// script.js
function generateMadLib() {
    // Get user inputs and convert them to uppercase
    var pluralNoun = document.getElementById("pluralNoun").value.toUpperCase();
    var noun1 = document.getElementById("noun1").value.toUpperCase();
    var noun2 = document.getElementById("noun2").value.toUpperCase();
    var song = document.getElementById("song").value.toUpperCase();
    var verb = document.getElementById("verb").value.toUpperCase();

    // Create the Mad Lib story using user inputs
    var madLibStory = `Once upon a time, in a world filled with ${pluralNoun}, 
        there lived a ${noun1} and a ${noun2}. They loved to ${verb} while 
        listening to their favorite song, "${song}."`;

    // Display the Mad Lib story
    var madLibOutput = document.getElementById("madLibOutput");
    madLibOutput.textContent = madLibStory;

    // Show the "Go Again" button and hide the submit button
    var submitButton = document.getElementById("submitButton");
    var goAgainButton = document.getElementById("goAgainButton");
    submitButton.style.display = "none";
    goAgainButton.style.display = "block";

    // Show the result container
    var resultContainer = document.getElementById("result");
    resultContainer.style.display = "block";
}

function resetMadLib() {
    // Clear input fields and reset their values to empty strings
    document.getElementById("pluralNoun").value = "";
    document.getElementById("noun1").value = "";
    document.getElementById("noun2").value = "";
    document.getElementById("song").value = "";
    document.getElementById("verb").value = "";

    // Hide the "Go Again" button and result container
    var submitButton = document.getElementById("submitButton");
    var goAgainButton = document.getElementById("goAgainButton");
    var resultContainer = document.getElementById("result");
    submitButton.style.display = "block";
    goAgainButton.style.display = "none";
    resultContainer.style.display = "none";
}

// Attach click event listeners to the buttons
document.getElementById("submitButton").addEventListener("click", generateMadLib);
document.getElementById("goAgainButton").addEventListener("click", resetMadLib);
