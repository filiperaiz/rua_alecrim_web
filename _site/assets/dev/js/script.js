// $(".button-trigger").click(function() {
//     $(".menu-trigger").slideToggle("fast");
// });


$('.button-trigger').click(function() {
    if($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $(this).addClass('active');
    }
    $('.menu-trigger').slideToggle();
});

 $(".user-info-pic").click(function() {
     $(".drop-user-info").toggle();
      });




$('.slide-banner').slick({
    infinite: true,
    slidesToShow: 1,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: true,
    pauseOnHover: false,
});


$('#products-gallery-list').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true
    }
});



$(document).foundation();
