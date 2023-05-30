$(document).ready(function() {
    $(window).on('scroll', function() {
        $('.section').each(function() {
            if($(window).scrollTop() + $(window).height() > $(this).offset().top + $(this).height() / 2) {
                $(this).find('h2').removeClass('invisible').addClass('appear');
            }
        });
    });
});

$(document).mousemove(function(e) {
    $('#glowstick').css({
      left:  e.pageX,
      top:   e.pageY
    });
  });
  
