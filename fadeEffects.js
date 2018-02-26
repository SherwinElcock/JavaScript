

// Send in one parameter argument is the div you are targeting for the fade in or out
	// Element is variable name - will refer to either of the div's
	
var fade_in_from = 0;
var fade_out_from = 10;


	function fadeIn(element){
		var target = document.getElementById(element);
		target.style.display="block"; //to make sure it is displayed
		var newSetting = fade_in_from / 10;
		target.style.opacity = newSetting;
		// Opacity ranges from 0 + 1 (0 - .1 - .2 - .3  ...)
		fade_in_from++;
		if(fade_in_from==10){
			target.style.opacity = 1;
			clearTimeout(loopTimer);
			fade_in_from = 0;
			return false;
		}
	var loopTimer = setTimeout('fadeIn(\''+element+'\')',50);
}

	function fadeOut(element){
		var target = document.getElementById(element);
		// target.style.display="block"; //to make sure it is displayed
		var newSetting = fade_out_from / 10;
		target.style.opacity = newSetting;
		// Opacity ranges from 0 + 1 (0 - .1 - .2 - .3  ...)
		fade_out_from--;
		if(fade_out_from == 0){ // If it equals 0 - its at the end of the function stop
			target.style.opacity = 0;
			target.style.display = "none"; // To make sure element goes away - remove to make it keep the space
			clearTimeout(loopTimer);
			fade_out_from = 10;
			return false;
		}
	var loopTimer = setTimeout('fadeOut(\''+element+'\')',50);
}