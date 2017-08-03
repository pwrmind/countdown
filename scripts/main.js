(function(){
	var tiles = document.querySelectorAll(".tile");

	function getDistance(countDownDate) {
		var now = new Date().getTime();
		var tmp = new Date((new Date()).getFullYear() + "." + countDownDate).getTime();
		var countDownDate = (tmp > now) ?  tmp : new Date(((new Date()).getFullYear() + 1) + "." + countDownDate).getTime();
	    var distance = countDownDate - now;
		return {
			days: Math.floor(distance / (1000 * 60 * 60 * 24)),
	    	// hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
	    	// minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
	    	// seconds: Math.floor((distance % (1000 * 60)) / 1000)
		};
	}

	var x = setInterval(function() {
	    render();
	}, 1000);

	function render() {
		for (var index in tiles) {
	    	var tile = tiles[index];
	    	var countDownDate = tile && tile.dataset && tile.dataset.date;
	    	var name = tile && tile.dataset && tile.dataset.name;
	    	var distance = getDistance(countDownDate)
	    	tile.innerHTML = "<div class='name'>" + name + "</div>" + "<div class='days'>" + distance.days + " дней</div>";
	    	// + "<div class='time'>" + distance.hours + ":" + distance.minutes + ":" + distance.seconds + "</div>";
	    };
	    
	    // if (distance < 0) {
	    //     clearInterval(x);
	    //     document.getElementById("tiles").innerHTML = "EXPIRED";
	    // }
	}

	render();
})();