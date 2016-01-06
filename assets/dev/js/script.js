// $(".button-trigger").click(function() {
//     $(".menu-trigger").slideToggle("fast");
// });


$('.button-trigger').click(function() {
    if ($(this).hasClass('active')) {
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

// fotos produto
$(document).ready(function() {
    $.uploadPreview({
        input_field: "#image-upload-1",
        preview_box: "#image-preview-1",
        label_field: "#image-label-1",
        label_default: "Adicionar foto",
        label_selected: "Trocar a foto",
        no_label: false
    });

    $.uploadPreview({
        input_field: "#image-upload-2",
        preview_box: "#image-preview-2",
        label_field: "#image-label-2",
        label_default: "Adicionar foto",
        label_selected: "Trocar a foto",
        no_label: false
    });

    $.uploadPreview({
        input_field: "#image-upload-3",
        preview_box: "#image-preview-3",
        label_field: "#image-label-3",
        label_default: "Adicionar foto",
        label_selected: "Trocar a foto",
        no_label: false
    });

    $.uploadPreview({
        input_field: "#image-upload-4",
        preview_box: "#image-preview-4",
        label_field: "#image-label-4",
        label_default: "Adicionar foto",
        label_selected: "Trocar a foto",
        no_label: false
    });

    $.uploadPreview({
        input_field: "#image-upload-5",
        preview_box: "#image-preview-5",
        label_field: "#image-label-5",
        label_default: "Adicionar foto",
        label_selected: "Trocar a foto",
        no_label: false
    });
});


$(document).foundation();
