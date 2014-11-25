$(function() {
	$('.gamePiece').on ('click', function(){
		event.preventDefault;
		if ($(this).text() === "") {
			count+=1
			$(this).text( (count%2 === 1) ? "X": "O" );
			$(this).css('color', (count%2 === 1) ? '#0AE2FF': '#5E7C7F' );

		};
		checkWinner();
	});
});

var reset = function() {
	for (var i = 0; i < $('.gamePiece').length; i++) {
		$('.gamePiece').text('');
	}
	var count = 0;
}

var count = 0;

var winner = [['#box0', '#box1', '#box2'],['#box3', '#box4', '#box5'],['#box6', '#box7', '#box8'],['#box0', '#box3','#box6'],['#box2','#box4','#box6'], ['#box1', '#box4','#box7'],['#box2', 'box5', '#box8'],['#box0','#box4','#box8']];



var checkWinner = function(){
	
  // event.preventDefault;
  	for (var i = 0; i < winner.length; i++) {
		var win1 = $(winner[i][0]);
		var win2 = $(winner[i][1]);
		var win3 = $(winner[i][2]);
		if ((win1.text() === 'X') && (win2.text() === 'X') && (win3.text() === 'X')) {
			alert('X Is The Winner!');
		}
		else if ((win1.text() === 'O') && (win2.text() === 'O') && (win3.text() === 'O')) {
			alert('O Is The Winner!');
		}
	}
}
