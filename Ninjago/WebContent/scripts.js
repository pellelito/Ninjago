/**
 * 
 */

let correctAnswer = [];
let userAnswer = [];
let num = 0;
let ninjas =[1,2,3,4,5,6];

/* Call checkAnswer when pressing a ninja */
document.getElementById("1").addEventListener("click", function(){
	checkAnswer('1');
});
document.getElementById("2").addEventListener("click", function(){
	checkAnswer('2');
});
document.getElementById("3").addEventListener("click", function(){
	checkAnswer('3');
});
document.getElementById("4").addEventListener("click", function(){
	checkAnswer('4');
});
document.getElementById("5").addEventListener("click", function(){
	checkAnswer('5');
});
document.getElementById("6").addEventListener("click", function(){
	checkAnswer('6');
});
/* Load the first rounds of ninjas */
document.addEventListener('DOMContentLoaded', function() {
	
	ninjas = [1, 2, 3, 4, 5, 6].shuffle();
	document.getElementById("11").style.backgroundImage = 'url("lib/' + ninjas[0] + '.png")';
	document.getElementById("22").style.backgroundImage = 'url("lib/' + ninjas[1] + '.png")';
	document.getElementById("33").style.backgroundImage = 'url("lib/' + ninjas[2] + '.png")';
	document.getElementById("44").style.backgroundImage = 'url("lib/' + ninjas[3] + '.png")';
	document.getElementById("55").style.backgroundImage = 'url("lib/' + ninjas[4] + '.png")';
    
}, false);

//add answers to arrays and show five random ninjas
function checkAnswer(val) {
 
    if (num < 5) {
    	userAnswer.push(val);
    	correctAnswer.push(ninjas[5]);
    	ninjas = [1, 2, 3, 4, 5, 6].shuffle();
    	document.getElementById("11").style.backgroundImage = 'url("lib/' + ninjas[0] + '.png")';
    	document.getElementById("22").style.backgroundImage = 'url("lib/' + ninjas[1] + '.png")';
    	document.getElementById("33").style.backgroundImage = 'url("lib/' + ninjas[2] + '.png")';
    	document.getElementById("44").style.backgroundImage = 'url("lib/' + ninjas[3] + '.png")';
    	document.getElementById("55").style.backgroundImage = 'url("lib/' + ninjas[4] + '.png")';
    	num = num + 1; 
    } else{
   		// Do nothing
    }	// ends game and reveals the result button
    if (num == 5) {
			alert("Game Over");
	    	document.getElementById('hidden_userAnswer').value = userAnswer;
	    	document.getElementById('hidden_correctAnswer').value = correctAnswer;
	    	document.getElementById('submit').setAttribute('style', 'display:block');
	    	document.getElementById('submit').setAttribute('style', 'text-align:center');
			} ;
}
// randomize the ninja array
Array.prototype.shuffle = function() {
	  let m = this.length, i;
	  while (m) {
	    i = (Math.random() * m--) >>> 0;
	    [this[m], this[i]] = [this[i], this[m]]
	  }
	  return this;
	}