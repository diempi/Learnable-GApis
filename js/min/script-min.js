function loadMap(){var e={zoom:11,center:new google.maps.LatLng(50.633333,5.566667),mapTypeControl:!0,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.DROPDOWN_MENU,mapTypeIds:[google.maps.MapTypeId.ROADMAP,google.maps.MapTypeId.SATELLITE,google.maps.MapTypeId.HYBRID,google.maps.MapTypeId.TERRAIN],position:google.maps.ControlPosition.TOP_RIGHT},mapTypeId:google.maps.MapTypeId.TERRAIN,tilt:30,zoomControl:!0,zoomControlOptions:{style:google.maps.ZoomControlStyle.SMALL,position:google.maps.ControlPosition.RIGHT_TOP},panControl:!0,panControlOptions:{position:google.maps.ControlPosition.TOP_LEFT},streetViewControl:!0,overviewMapControl:!0,overviewMapControlOptions:{opened:!0},styles:shadeofgrey},o=document.getElementById("gmap");map=new google.maps.Map(o,e),updateCurrentLatLng(map.getCenter()),updateUrlLocation(map.getCenter(),map.getZoom()),mapEventListeners(),addMarker()}function mapEventListeners(){var e=google.maps.event.addListener(map,"mousemove",function(e){updateCurrentLatLng(e.latLng)}),o=google.maps.event.addListener(map,"rightclick",function(e){var o=map.getZoom()+1;map.setZoom(16>o?o:11),map.setCenter(e.latLng)}),t=google.maps.event.addListenerOnce(map,"idle",function(){}),a=google.maps.event.addListener(map,"dragend",function(){updateUrlLocation(map.getCenter(),map.getZoom())}),n=google.maps.event.addListener(map,"zoom_changed",function(){updateUrlLocation(map.getCenter(),map.getZoom())})}function updateCurrentLatLng(e){lat.innerHTML=e.lat(),lng.innerHTML=e.lng()}function updateUrlLocation(e,o){var t="?lat="+e.lat()+"&lon="+e.lng()+"&zoom="+o;window.history.pushState({center:e,zoom:o},"map center",t)}function addMarker(){var e=new google.maps.Marker({position:new google.maps.LatLng(50.633333,5.566667),icon:{url:"img/airplane-green.png",size:new google.maps.Size(32,32),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(16,32),scaledSize:new google.maps.Size(32,32)}});return e.setMap(map),e.setVisible(!0),e}var map,lat=document.getElementById("latcoords"),lng=document.getElementById("longcoords"),mapStyle=[{stylers:[{saturation:-100},{gamma:1}]},{elementType:"labels.text.stroke",stylers:[{visibilty:"off"}]},{featureType:"road",elementType:"geometry",stylers:[{visibilty:"simplified"}]},{featureType:"water",stylers:[{visibilty:"on"},{saturation:50},{gamma:0},{hue:"#50a5d1"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#e2e2e2"}]}];google.maps.event.addDomListener(window,"load",loadMap());