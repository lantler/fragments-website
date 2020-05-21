$(document).foundation()
$('.breadcrumb-counter-nav-item').click(function () {
  $('.breadcrumb-counter-nav-item').removeClass('current');
  $(this).addClass('current');
});

// NOTE: SEARCH//
$(document).foundation();

$(function() {
  $('.search')
    .bind('click', function(event) {
      $(".search-field").toggleClass("expand-search");

      // if the search field is expanded, focus on it
      if ($(".search-field").hasClass("expand-search")) {
        $(".search-field").focus();
      }
    })
});
