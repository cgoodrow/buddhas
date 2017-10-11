/* A simple and scalable hamburger menu using css transitions. */
$(document).ready(function() {
  var isActive = false;

  $('.js-menu').on('click', function() {
    console.log("click");
    if (isActive) {
      $(this).removeClass('active');
      $('body').removeClass('menu-open');
    } else {
      $(this).addClass('active');
      $('body').addClass('menu-open');
    }

    isActive = !isActive;
  });
});
