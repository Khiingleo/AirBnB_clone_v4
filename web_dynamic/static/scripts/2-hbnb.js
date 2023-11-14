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
});
