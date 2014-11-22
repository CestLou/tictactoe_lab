document.addEventListener('DOMContentLoaded', function(){
	var allDivs = document.querySelectorAll('.div');
	document.querySelector('.div').addEventListener('click', function(){
		for (i = 0; i<allDivs.length; i++){	
			allDivs[i].addEventListener('click', function(){ 
			// clickBehavior(this);
			document.querySelector('#makeitclick').innerHTML = "X";
			});
		}
// 		document.querySelector("h2").innerText = input + "\xb0F is equal to " + output + "\xB0C"
	});
});

