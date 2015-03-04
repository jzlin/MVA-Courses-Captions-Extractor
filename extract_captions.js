(function () {

	// set closed captions on
	var closedCpations = document.querySelector('.closedCaptions .on');
	if (closedCpations !== null) {
		// console.log(closedCpations);
		closedCpations.click();
	}

	// set playback speed fast
	var speed = document.querySelector('.speed .Fast');
	if (speed !== null) {
		// console.log(speed);
		speed.click();
	}

	// log captions
	var captions = document.querySelector('.captions');
	if (captions !== null) {
		var lastCaption = '';
		var allCaptions = '';

		var captionsChangedEvent = function () {
	    if (captions.innerText.trim().length > 0 && 
	    	captions.innerText.trim() !== lastCaption.trim()) {
	    	lastCaption = captions.innerText.trim();
	    	allCaptions += lastCaption;
	    	console.log(lastCaption);
	    }
		};

		captions.removeEventListener("DOMSubtreeModified", captionsChangedEvent);
		captions.addEventListener("DOMSubtreeModified", captionsChangedEvent);
	}

	// start play video
	var play = document.querySelector('.controls .play:not(.pause)');
	if (play !== null) {
		// console.log(play);
		play.click();
	}

})();