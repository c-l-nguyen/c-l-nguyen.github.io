// Toggling nav menu on click
$(document).on('click', '.mobile-nav-toggle', function(e) {
  $('body').toggleClass('mobile-nav-active');
  $('.mobile-nav-toggle i');
});
  
// Click outside toggle button to collapse 
$(document).click(function(e) {
  var container = $(".mobile-nav-toggle");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    if ($('body').hasClass('mobile-nav-active')) {
      $('body').removeClass('mobile-nav-active');
      $('.mobile-nav-toggle i');
    }
  }
});