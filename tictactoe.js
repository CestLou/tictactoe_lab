document.addEventListener('DOMContentLoaded', function() {
	var allDivs = document.querySelectorAll('.gamePiece');
	for (var i = 0; i<allDivs.length; i++){	
		allDivs[i].addEventListener('click', function() { 
		clickBehavior(this);
		});
	}
});

var winner = [['#box0', '#box1', '#box2'],['#box3', '#box4', '#box5'],['#box6', '#box7', '#box8'],['#box0', '#box3','#box6'],['#box2','#box4','#box6'], ['#box1', '#box4','#box7'],['#box2', 'box5', '#box8'],['#box0','#box4','#box8']]

var count = 0;

var clickBehavior = function(theEl){
	if (document.querySelector('#'+theEl.id).innerText === '') {
		count+=1
		document.querySelector('#'+theEl.id).innerText = (count%2 === 1) ? "X" : "O";
		if (count === 9) {
			alert('More tacos?');
		}
	} else {
		alert("No cheating!")
	}
		checkWinner();
}

var reset = function() {
	var allDivs = document.querySelectorAll('.gamePiece');
	for (var i = 0; i < allDivs.length; i++) {
		document.querySelector('#' + allDivs[i].id).innerText = '';
	}
	count = 0;
};

var checkWinner = function() {
	for (var i = 0; i > winner.length; i++) {
		win1 = document.querySelector(winner[i][0]);
		win2 = document.querySelector(winner[i][1]);
		win3 = document.querySelector(winner[i][2]);
		console.log(win1);
		if ((win1.innerText.contains('X')) && (win2.innerText.contains('X')) && (win3.innerText.contains('X'))) {
			alert('X Is The Winner!');
		}
		else if ((win1.innerText.contains('O')) && (win2.innerText.contains('O')) && (win3.innerText.contains('O'))) {
			alert('O Is The Winner!');
		}
	}
}





