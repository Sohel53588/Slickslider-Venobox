$(function () {
    $(document).ready(function () {
        $('.venobox').venobox();
    });

    // slick sliders

    $('.main').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: true,
        prevArrow:'<i class="fas fa-chevron-left pre"></i>',
        nextArrow: '<i class="fas fa-chevron-right next"></i>',

      });
});