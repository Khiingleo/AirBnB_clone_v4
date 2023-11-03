$(document).ready(function () {
  let amenityIds = [];

  $('input[type="checkbox"]').on('change', function () {
    const name = $(this).attr('data-name');
    if ($(this).is(':checked')) {
      amenityIds.push(name);
    } else {
      amenityIds = amenityIds.filter(amen => amen !== name);
    }
    $('.amenities h4').text(amenityIds.join(', '));
  });
});
