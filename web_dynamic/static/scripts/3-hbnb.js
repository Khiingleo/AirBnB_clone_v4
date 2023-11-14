$(document).ready(function () {
  const amenities = {};

  $('input[type="checkbox"]').on('change', function () {
    if (this.checked) {
      amenities[this.dataset.name] = this.dataset.id;
    } else {
      delete amenities[this.dataset.name];
    }

    updateAmenitiesList();
  });
  function updateAmenitiesList () {
    const amenitiesList = Object.keys(amenities).join(', ');
    $('.amenities h4').text(amenitiesList);
  }

  $.getJSON('http://localhost:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });

  // fetch data
  $.post({
        url: 'http://localhost:5001/api/v1/places_search',
        data: JSON.stringify({}),
        contentType: 'application/json',
        headers: {
			"Content-Type": "application/json",
		},
        success: function(response) {
            for (let place of response) {
                let article = `
                <article>
                    <div class="title_box">
                        <h2>${place.name}</h2>
                        <div class="price_by_night">$${place.price_by_night}</div>
                    </div>
                    <div class="information">
                        <div class="max_guest">${place.max_guest} Guest${place.max_guest !== 1 ? 's' : ''}</div>
                        <div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms !== 1 ? 's' : ''}</div>
                        <div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? 's' : ''}</div>
                    </div>
                    <div class="description">${place.description}</div>
                </article>
                `;
                $('section.places').append(article);
            }
        }
    });
});
