$(function () {
	console.log("dom");


	//adding a 'on click' to the vegan/vegetarian/friendly buttons


	var $slideshow = $(".cb-slideshow");
	var $fixedDiv = $(".fixed");
	var $menu = $("section").find(".menu");

	var $veganBtn = $(".vegan").find("img");
	var $vegetarianBtn = $('.vegetarian').find("img");
	var $friendlyBtn = $('.friendly').find("img");
	var $section = $("section");
	var $map = $("#map");
	var $footer = $("footer");
	var $legend = $("#legend");

	var currentType = "";


	//console.log($veganBtn, $header, $slideshow, $fixedDiv);

	$veganBtn.on("click", function () {
		currentType = "vegan";
		loading();
		$slideshow.slideUp(2000);
		$fixedDiv.slideUp(2000, function () {
			$footer.removeClass("no-display").delay(2000);
			$map.removeClass("no-display").delay(2000);
			$legend.removeClass("no-display").delay(2000);
			google.maps.event.trigger(map, 'resize');
		});
		$menu.addClass('changeDisplay').delay(3000);
		$section.addClass('changeDisplay').delay(3000);

	});

	$vegetarianBtn.on("click", function () {
		currentType = "vegetarian";
		loading();
		$map.removeClass("no-display").delay(2000);
		$footer.removeClass("no-display").delay(2000);
		$legend.removeClass("no-display").delay(2000);
		$slideshow.slideUp(2000);
		$fixedDiv.slideUp(2000, function () {
			//initMap();
			google.maps.event.trigger(map, 'resize');
		});
		$menu.addClass('changeDisplay').delay(3000);
		$section.addClass('changeDisplay').delay(3000);

	});

	$friendlyBtn.on("click", function () {
		currentType = "vege-friendly";
		loading();
		$map.removeClass("no-display").delay(2000);
		$legend.removeClass("no-display").delay(2000);
		$footer.removeClass("no-display").delay(2000);
		$slideshow.slideUp(2000);
		$fixedDiv.slideUp(2000, function () {
			//initMap();
			google.maps.event.trigger(map, 'resize');
		});
		$menu.addClass('changeDisplay').delay(3000);
		$section.addClass('changeDisplay').delay(3000);
	});


	var placesUrl = "data.json";
	var itemsLoading1 = $(".restaurants");
	var itemsLoading2 = $(".stores");

	function insertContent(places) {
		$.each(places, function (index, content) {
			if (content.category.includes(currentType)) {


				var $div = $("<div>").addClass("item");
				var $title = $("<h3>").text(content.name);
				var $address = $("<h4>").text(content.address);
				$address.attr("data-icon", content.icon);
				console.log('h4', content.icon);
				var $image = $("<img>").attr("src", "img/" + content.image);
				var $desc = $("<p>").text(content.desc);

				$div.append($title).append($address).append($image).append($desc);


				if (content.type === "store") {
					itemsLoading2.append($div);
				} else if (content.type == "restaurant") {
					itemsLoading1.append($div);
				}
			}
		});

		geocodeAddress();

	}


	function loading() {
		$.ajax({
			url: placesUrl,
			type: "GET",
			dataType: "json",
		}).done(function (response) {
			console.log(response.places);
			insertContent(response.places);
		}).fail(function (error) {
			console.log(error)
		});

	}


});