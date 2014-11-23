document.addEventListener('DOMContentLoaded', function() {
	var allDivs = document.querySelectorAll('.div');
	for (var i = 0; i<allDivs.length; i++){	
		allDivs[i].addEventListener('click', function() { 
		clickBehavior(this);
		// document.querySelector('#makeitclick').innerHTML = "X";
		});
	}

});

var count = 0;

var clickBehavior = function(theEl){
	if (document.querySelector('#'+theEl.id).innerText === '') {
		count+=1
		document.querySelector('#'+theEl.id).innerText = (count%2 === 1) ? "X" : "O";
	} else {
		alert("No cheating!")
	}
}
var reset = function() {
	var allDivs = document.querySelectorAll('.div')
	for (var i = 0; i < allDivs.length; i++) {
		document.querySelector('#'+allDivs[i].id).innerText = ''
	}
	count = 0;
}