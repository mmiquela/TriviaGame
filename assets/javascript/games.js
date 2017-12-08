var number=60;
var countSkippedAnswer=0;
var countWrongAnswers=0;
var countCorrectAnswers=0;

//jQuery detects this state of readiness for you. Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.
$(document).ready(function() {
    $("#questions_container").hide();
    $("#results_container").hide();
    window.scrollTo(0, 600);

//When user clicked the Start button , this will run
    $("#start_button").on("click", function() {
        $("#first_container").hide();
        $("#questions_container").show();
        window.scrollTo(0,700);
        startTimer();
        return;
    })

//The Timer will start to count from 60 and decrements by 1 second. 
    function startTimer() {
        setInterval(countdown, 1000);
    }
//This function helps decrements the timer by 1 second and displays the remaining seconds in the browser 
    function countdown() {
        number--;
        $("#timer_remaining").html(number + " Seconds");
//User can click Submit Button. If it happens the timer count (number) resets to 0
        $("#done_button").on("click", function() {
                number = 0;
                return;
       });
        // if its times out or user clicks the submit button above, the questions containers will be hidden.
        // Before it displays the result, there is a functions which validates user answers.
        if(number==-1){
            	checkValues();
            	$("#questions_container").hide();
            }
        }
//This functions gets the value from the questions container. The method
//input:radio[name="q[n]"]:checked.val() is used and stored in variable
//The variable will be used later for correct answers count, incorrect answers count
// and those questions skipped count
    function checkValues() {
        var answer1 = $('input:radio[name="q1"]:checked').val();
		var answer2 = $('input:radio[name="q2"]:checked').val();
		var answer3 = $('input:radio[name="q3"]:checked').val();
		var answer4 = $('input:radio[name="q4"]:checked').val();
		var answer5 = $('input:radio[name="q5"]:checked').val();
		var answer6 = $('input:radio[name="q6"]:checked').val();
		var answer7 = $('input:radio[name="q7"]:checked').val();
		var answer8 = $('input:radio[name="q8"]:checked').val();
		var answer9 = $('input:radio[name="q9"]:checked').val();
		var answer10 = $('input:radio[name="q10"]:checked').val();
// if question is skipped countSkippedAnswer increments
// if the answer is correct countCorrectAnswers increments
// it the answer is selected but not the correct one  countWrongAnswers increments
        if (answer1 == undefined) { countSkippedAnswer++;} 
        else if (answer1 == "The Great Wall of China") 
        	{countCorrectAnswers++;} 
        else {countWrongAnswers++;}
  
        if (answer2 == undefined) { countSkippedAnswer++;} 
        else if (answer2 == "Taj Mahal") 
        	{countCorrectAnswers++;} 
        else {countWrongAnswers++;}
  
        if (answer3 == undefined) { countSkippedAnswer++;} 
        else if (answer3 == "Big Ben") 
        	{countCorrectAnswers++;} 
        else {countWrongAnswers++;}

        if (answer4 == undefined) { countSkippedAnswer++;} 
        else if (answer4 == "Easter Island Moai") 
        	{countCorrectAnswers++;} 
        else {countWrongAnswers++;}

        if (answer5 == undefined) { countSkippedAnswer++;} 
        else if (answer5 == "The Great Sphinx of Giza") 
        	{countCorrectAnswers++;} 
        else {countWrongAnswers++;}

        if (answer6 == undefined) { countSkippedAnswer++;} 
        else if (answer6 == "The Leaning Tower of Pisa") 
        	{countCorrectAnswers++;} 
        else {countWrongAnswers++;}

        if (answer7 == undefined) { countSkippedAnswer++;} 
        else if (answer7 == "The Parthenon") 
        	{countCorrectAnswers++;} 
        else {countWrongAnswers++;}

        if (answer8 == undefined) { countSkippedAnswer++;} 
        else if (answer8 == "True") 
        	{countCorrectAnswers++;} 
        else {countWrongAnswers++;}

        if (answer9 == undefined) { countSkippedAnswer++;} 
        else if (answer9 == "Stonehenge") 
        	{countCorrectAnswers++;} 
        else {countWrongAnswers++;}

        if (answer10 == undefined) { countSkippedAnswer++;} 
        else if (answer10 == "Machu Picchu") 
        	{countCorrectAnswers++;} 
        else {countWrongAnswers++;}
//Here we display in the browser the results 

    $("#correct_answers").html(": " + countCorrectAnswers);
    $("#wrong_answers").html(": " + countWrongAnswers);
    $("#unanswered").html(": " + countSkippedAnswer);
    $("#results_container").show();
    window.scrollTo(0, 600);
}
});



