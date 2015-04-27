// Variables
var map;

// Methods
	// Creating the map
function loadMap(){
	var mapOptions = {
		// Map Zoom - Required
		zoom: 18,

		// Map Center - Required
		center: new google.maps.LatLng(50.633333, 5.566667),

		// Limit Zoom
		// minZoom: 10,
		// maxZoom: 19,

		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			mapTypeIds: [
				google.maps.MapTypeId.ROADMAP,
				google.maps.MapTypeId.SATELLITE,
				google.maps.MapTypeId.HYBRID,
				google.maps.MapTypeId.TERRAIN
			],
			position: google.maps.ControlPosition.TOP_RIGHT
		},

		//Set default Maptype
		mapTypeId: google.maps.MapTypeId.HYBRID,

		//0 to 45deg only valid for satellite and terrain
		//tilt: 30,

		// Zoom Controls
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL,
			position: google.maps.ControlPosition.RIGHT_TOP
		},

		// Pan Controls
		panControl: true,
		panControlOptions: {
			position: google.maps.ControlPosition.TOP_LEFT
		},

		// Streetview Control
		streetViewControl: true,

		// Overview Map
		overviewMapControl: true,
		overviewMapControlOptions: {
			opened: true
		},
	};

	var mapid = document.getElementById('gmap');
	map = new google.maps.Map(mapid, mapOptions);
}

// Main Code
google.maps.event.addDomListener(window,'load',loadMap());