/* A simple and scalable hamburger menu using css transitions. */
$(document).on('turbolinks:load', function() {
  $('.your-class').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

  console.log(isActive);
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
