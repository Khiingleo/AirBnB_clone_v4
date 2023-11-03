$(document).ready(function() {
	var amenities = {};

	$('input[type="checkbox"]').on('change', function () {
		if (this.checked) {
			amenities[this.dataset.name] = this.dataset.id;
		} else {
			delete amenities[this.dataset.name]
		}

		updateAmenitiesList();
	});
	function updateAmenitiesList() {
		var amenitiesList = Object.keys(amenities).join(', ');
		$(".amenities h4").text(amenitiesList);
	}
});
