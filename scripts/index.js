$(document).ready(function(){
  console.log('document ready');
  $(window).scroll(function(){
    console.log('scrolled');
    let window_height = $(this).innerHeight();
    let window_top_position = $(this).scrollTop();
    let window_bottom_position = window_height + window_top_position;
    console.log('window height ' + window_height + ', window top position ' + window_top_position);
    console.log(window_bottom_position);
    let animated_elements = $('.animated');
    console.log(animated_elements.html());
    $.each(animated_elements, function() {
      let element = $(this);
      console.log(element.html());
      let element_height = element.outerHeight();
      console.log(element_height);
      let element_top_position = element.offset().top;
      console.log('element top position ' + element_top_position);
      let element_bottom_position = element_top_position + element_height;
      console.log(element_bottom_position);
      if ((element_top_position <= window_bottom_position) && (element_bottom_position >= window_top_position)) {
        console.log('in view');
        element.addClass('active');
        console.log(element.attr('class'));
      } else {
        element.removeClass('active')
        console.log('not in view');
      }
    });
  });
  $('#menuIcon').on('click', function(){
    $('.fa-angle-double-up').toggle();
    $('.fa-angle-double-down').toggle();
    $('#menubar').slideToggle(100);
  });
});