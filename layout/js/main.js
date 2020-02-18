$('document').ready(function () {

  // nav
  $('.nav .toggle-btn').click(function () {
    $(this).toggleClass('active');
    $('.nav ul').toggleClass('toggled');
  });

  $('.nav a, .home .header a').click(function (e) {
    if ($(this).attr('data-link') != undefined) {

      if ($($(this).data('link')).length != 0) {

        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).data('link')).offset().top - 50
          },1000);

      }

    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
      $('.nav').addClass('fixed');
    } else {
      $('.nav').removeClass('fixed');
    }
  });

});