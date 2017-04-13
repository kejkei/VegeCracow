var krakow = {
	lat: 50.06465,
	lng: 19.94498
};
var map;

function initMap() {
	//var krakow = {lat: 50.06465, lng: 19.94498};
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 14,
		center: krakow,
		mapTypeId: google.maps.MapTypeId.ROADMAP

	});

}

function geocodeAddress() {
	console.log("geocodeAddress");
	var geocoder = new google.maps.Geocoder();
	var address = document.querySelectorAll('h4');
	//console.log(address);

	//var markers = [];
	for (var i = 0; i < address.length; i++) {
		var text = address[i].innerText;
		let icon = $(address[i]).data("icon");
		console.log(icon);
		geocoder.geocode({
			'address': text
		}, function (results, status) {
			console.log(results, status);
			if (status === 'OK') {
				//console.log(map);

				map.setCenter(results[0].geometry.location);
				//var cloud = new google.maps.InfoWindow();

				var marker = new google.maps.Marker({
					map: map,
					position: results[0].geometry.location,
					animation: google.maps.Animation.DROP,
					icon: icon,

				});

				//marker.setMap(map);
				//markers.push(marker);

				console.log(marker.position.lat(), marker.position.lng(), 'marker');
			} else {
				alert('Geocode was not successful for the following reason: ' + status);
			}
		});
	}
}

