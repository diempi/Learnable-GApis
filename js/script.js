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
		zoom: 11,

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

	//Update the url with the current location and zoom
	updateUrlLocation(map.getCenter(), map.getZoom());

	mapEventListeners();
	addMarker();
}



function mapEventListeners(){
	var mouseMoveChanged = google.maps.event.addListener(map,'mousemove',
		function(event){
			updateCurrentLatLng(event.latLng);
		});


	// Use the right click to set the zoom to 11
	var mouseDoubleClick = google.maps.event.addListener(map, 'rightclick',
		function (event) {
			var z = map.getZoom() + 1;
			if(z<16){
				map.setZoom(z);
			}
			else{
				map.setZoom(11);
			}

			map.setCenter(event.latLng);
		}
	);

	// Wait for map to load
	var listenerIdle = google.maps.event.addListenerOnce(map, 'idle',
		function(){
			
			//alert('Map is ready!');
		}
	);

	//Drag end
	var listenerDragEnd = google.maps.event.addListener(map, 'dragend',
		function(){
			updateUrlLocation(map.getCenter(),map.getZoom());
		}
	);

	//Zoom Changed
	var listenerZoomChanged = google.maps.event.addListener(map, 'zoom_changed',
		function(){
			updateUrlLocation(map.getCenter(), map.getZoom());
		}
	);
}

function updateCurrentLatLng(latLng){
	lat.innerHTML = latLng.lat();
	lng.innerHTML = latLng.lng();
}


// Updating the URL with the map center and zoom
function updateUrlLocation(center,zoom){
	var url= '?lat='+center.lat()+'&lon='+center.lng()+'&zoom='+zoom;

	// Set the URL
	window.history.pushState({center: center, zoom: zoom},'map center', url);
}

// =========== MARKERS ===========

	// Add a marker to the map
	function addMarker(){

		// Create tthe marker
		var marker = new google.maps.Marker({
			
			//Position of marker
			position: new google.maps.LatLng(50.633333, 5.566667),
			
			map: map,	

			icon: {

				url: 'img/airplane-green.png',

				size: new google.maps.Size(32,32),

				origin: new google.maps.Point(0,0),

				anchor: new google.maps.Point(16,32),

				scaledSize: new google.maps.Size(32,32)

			}

		});

		return marker;
	}
	

// ===============================



// Main Code
google.maps.event.addDomListener(window,'load',loadMap());