setInterval(function(){
	
},1000);

function Event(name, date) {
	var event = this;
	event.date = date;
	event.name = name;
	event.getTimeLeft = function(){
		return Date.now() - event.date; 
	};
	return this;
}

function Tile(event) {
	var tile = this;
	tile.event = new Event("Новый год", );
	return {
		title: "",
		date: ""
	};
}