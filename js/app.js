function handleInstructionsModal() {
	// when users click on the element with
	// `.js-what` class, we'll fade in
	// the instructions modal
	$('.js-what').click(function() {
		$('.overlay').fadeIn(1000);
	});

	// when users click on the element with the
	// `.js-close` class, we'll fade out
	// the instructions modal
	$('.js-close').click(function(){
  		$(".overlay").fadeOut(1000);
  	});
}

//Generates a random number
var randomNumber = Math.floor((Math.random() * 100) +1);

//on click of '.new-js-new-game' class the game 
//starts over
function newGame(){
 $('.new-js-new-game').click(function() {
 	console.log(randomNumber);	
 	$('#guessList').html("");
 	$('#feedback').css('background-color','#cc324b').html('Make your Guess!');
 });
}


// `$(document).ready` lets you specify a
// function that should execute when all the
// resources required by your web page have loaded.
// This code says, when the document is ready, run the
// `handleInstructionsModal` and 'newGame'.
$(document).ready(function(){
	handleInstructionsModal();
	newGame();

	$('#js-guess-submit').click(function(event) {
		event.preventDefault();
		//number entered into input
		var i = $('#js-user-guess').val();
		
		if (i > 100){
			alert('Please enter a number between 1 & 100.')	
		}
		else if (i < 1){	
			alert('Please enter a number between 1 & 100.')	
		} 
		else if (i == randomNumber){
			$('#feedback').html('You are a Winner!').css('background-color', 'green');
		}
		else if (i === ""){
			alert('Please enter a number between 1 & 100.')
		}
		else if (i <= randomNumber + 10 && i >= randomNumber - 10){
			$('#feedback').html('Very warm');
		}
		else if (i <= randomNumber + 20 && i >= randomNumber - 20){
			$('#feedback').html('Warm');
		}
		else if (i <= randomNumber + 30 && i >= randomNumber - 30){
			$('#feedback').html('Cold');
		}
		else {
			$('#feedback').html('Freezing');	
		}

		//displays numbers already guessed
		$('#guessList').append("<li>"+ i + "</li> <br>");
		
		//clears input text after entry
		$('#guess')[0].reset();
	
	})		

});


