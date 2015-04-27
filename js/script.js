// Variables
var map;

// Methods
function loadMap(){
	var mapOptions = {
		zoom: 11,

		center: new google.maps.LatLng(50.633333, 5.566667)
	};
	var mapid = document.getElementById('gmap');
	map = new google.maps.Map(mapid, mapOptions);
}

// Main Code
google.maps.event.addDomListener(window,'load',loadMap());