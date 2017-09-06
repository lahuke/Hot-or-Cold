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
var randomNumber = Math.floor(Math.random() * 100) +1;


//on click of '.new-js-new-game' class the game 
//starts over
function newGame(){
 $('.new-js-new-game').click(function() {
 	console.log(randomNumber);	
 	$('#guessList').html("");
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
		//displays numbers already guessed
		$('#guessList').append("<li>"+ i + "</li> <br>");
		//resets input field
		$('#guess')[0].reset();

	})

});


