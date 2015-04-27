// Variables
var map;
var lat = document.getElementById('latcoords');
var lng = document.getElementById('longcoords');

	// Style Map Elements
	var mapStyle = [
		{
			'stylers' :[
				{'saturation': -100},
				{'gamma':1}
			]
		},
		{
			'elementType': 'labels.text.stroke',
			'stylers': [
				{'visibilty': 'off'}
			]
		},
		{
			'featureType': 'road',
			'elementType': 'geometry',
			'stylers': [
				{'visibilty': 'simplified'}
			]
		},
		{
			'featureType': 'water',
			'stylers': [
				{'visibilty': 'on'},
				{'saturation': 50},
				{'gamma':0},
				{'hue': '#50a5d1'}
			]
		},
		{
			'featureType': 'landscape',
			'elementType': 'all',
			'stylers':[
				{'color':'#e2e2e2'}
			]
		},
	];


// Methods
	// Creating the map
function loadMap(){
	var mapOptions = {
		// Map Zoom - Required
		zoom: 14,

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
		mapTypeId: google.maps.MapTypeId.TERRAIN,

		//0 to 45deg only valid for satellite and terrain
		tilt: 30,

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

		// Set The map style
		styles: shadeofgrey
	};

	var mapid = document.getElementById('gmap');
	map = new google.maps.Map(mapid, mapOptions);
	updateCurrentLatLng(map.getCenter());

	mapEventListeners();
}

function updateCurrentLatLng(latLng){
	lat.innerHTML = latLng.lat();
	lng.innerHTML = latLng.lng();
}

function mapEventListeners(){
	var mouseMoveChanged = google.maps.event.addListener(map,'mousemove',
		function(event){
			updateCurrentLatLng(event.latLng);
		});
}

// Main Code
google.maps.event.addDomListener(window,'load',loadMap());