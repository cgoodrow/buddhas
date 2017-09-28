$(document).ready(function() {
  $('.section-container').hide();
  $('#one').show();

  $('.btn').click(function() {
    var target = $(this).data("target");
    var buttonTarget = $('.selected');
    var verticalBtn = $('.selected');

    $('.section-container').not(target).hide();
      $(target).show();

    if ($(buttonTarget).hasClass('selected')) {
      $(buttonTarget).removeClass('selected');
      $(this).addClass('selected');
      console.log("selectde");
    }    
  });
});
