(function(){
	var tiles = document.querySelectorAll(".tile");

	function getDistance(countDownDate) {
		var now = new Date().getTime();
		var tmp = new Date((new Date()).getFullYear() + "-" + countDownDate).getTime();
		var countDownDate = (tmp > now) ?  tmp : new Date(((new Date()).getFullYear() + 1) + "-" + countDownDate).getTime();
	    var distance = Math.floor((countDownDate - now) / (1000 * 60 * 60 * 24));
	    if(distance === 364) {
	    	return { days: "Сегодня" }
	    };
		return {
			days: distance + " " + declOfNum(distance, ["днень","дня","дней"]),
	    	hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
	    	minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
	    	seconds: Math.floor((distance % (1000 * 60)) / 1000)
		};
	}

	var x = setInterval(function() {
	    render();
	}, 1000);

	function render() {
		for (var index in tiles) {
	    	var tile = tiles[index];
	    	if(tile !== null) {
		    	var countDownDate = tile && tile.dataset && tile.dataset.date;
		    	if(tile.querySelector) {
			    	var daysBlock = tile && tile.querySelector(".days");
			    	var distance = getDistance(countDownDate)
			    	if(daysBlock && daysBlock.innerHTML !== null) daysBlock.innerHTML = "<div class='days'>" + distance.days + "</div>";
		    	}
	    	}
	    	// + "<div class='time'>" + distance.hours + ":" + distance.minutes + ":" + distance.seconds + "</div>";
	    };
	    
	    // if (distance < 0) {
	    //     clearInterval(x);
	    //     document.getElementById("tiles").innerHTML = "EXPIRED";
	    // }
	}

	function declOfNum(number, titles)  
	{  
	    cases = [2, 0, 1, 1, 1, 2];  
	    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
	}


	render();
})();