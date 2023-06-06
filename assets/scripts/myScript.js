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
  
  // define how many stars you want
var numberOfStars = 10;

// loop through that number
for (var i = 0; i < numberOfStars; i++) {
    // create a new div
    var star = document.createElement('div');

    // give it a class of 'star'
    star.className = 'star';

    // append it to the body
    document.body.appendChild(star);
}

document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('.section');

    function checkScroll() {
        var windowHeight = window.innerHeight;

        sections.forEach(function(section) {
            var sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < windowHeight * 0.8) {
                section.classList.add('animate');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();
});
