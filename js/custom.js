// Füge slideDown animation zu dropdown hinzu
$('.dropdown').on('show.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown('fast');
});

// Füge slideUp animation zuu dropdown hinzu
$('.dropdown').on('hide.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp('fast');
});
//aktiviere Bootstrap-Popover
$(function () {
  $('[data-toggle="popover"]').popover({html : true})
})