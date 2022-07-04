$(function () {
    $('.js-topslider').slick({
        infinite: true,
        speed: 600,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
    });
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 3.5,
        margin: 30,
    });
});