// Variables
var map;

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


// =========== MARKERS ===========

	// Add a marker to the map
	function addMarker(airport){

		// Create tthe marker
		var marker = new google.maps.Marker({
			
			//Position of marker
			position: new google.maps.LatLng(airport.lat, airport.lng),
			
			//map: map,	

			icon: {

				// Url of the image
				url: 'img/airplane-green.png',

				// Sets the image size
				size: new google.maps.Size(32,32),

				// Sets the origin of the image(top left)
				origin: new google.maps.Point(0,0),

				// Sets the anchor(middle, bottom)
				anchor: new google.maps.Point(16,32),

				// Scales the image
				scaledSize: new google.maps.Size(32,32)

			},

			// Sets the title when mouse hovers
			title: airport.airport,




		});

		marker.setMap(map);
		marker.setVisible(true);
		return marker;
	}
	
	// INfowindow 
	function addInfoWindow(marker){

		var contentString = '<div class="infowindowcontent">'+
      '<div class="row">' +
      '<p class="total greenbk">78.3%</p>'+
      '<p class="location">LIÈGE</p>'+
      '<p class="code">LG</p>'+
      '</div>'+
      '<div class="data">'+
      '<p class="tagbelow">Avg On-Time</p>'+
      '<p class="label">Arrivées</p>'+
      '<p class="details">76% (8,590)</p>' +
      '<p class="label">Départs</p>'+
      '<p class="details">80.5% (8,589)</p>' +
      '<p class="coords">50.633333, 5.566667</p>' +
      '</div>' +
     '</div>';

		var InfoWindow = new google.maps.InfoWindow({

			content: contentString,

			disableAutoPan: false,

			maxWidth: 300,

			zIndex: 1

		});

		google.maps.event.addListener(marker, 'click',function(e){

			InfoWindow.open(map, marker);
		});
	}


// ===============================

	// Creating the map
function loadMap(){
	var mapOptions = {
		// Map Zoom - Required
		zoom: 4,

		// Map Center - Required
		center: new google.maps.LatLng(39.828127,-98.579404),

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
		//styles: shadeofgrey
	};

	//Get the id of the map container
	var mapid = document.getElementById('gmap');

	// Create the map
	map = new google.maps.Map(mapid, mapOptions);

	for (var i = 0; i<airportData.length; i++) {

		var airport = airportData[i];

        //Avg percentage
        airport.totalper = (airport.aper + airport.dper)/2;
        
        //Total flights
        airport.totalflights = (airport.aop + airport.dop);
        
        //Set the icon color
        airport.icon = 'green'; 
        
        //Set the icon size
        airport.iconsize = new google.maps.Size(32,32);

		// Marker creation
		var newMarker = this.addMarker(airport);

		newMarker.airport = airport;

		// Add Info Window
		addInfoWindow(newMarker);

	}

}



// Main Code
google.maps.event.addDomListener(window,'load',loadMap());