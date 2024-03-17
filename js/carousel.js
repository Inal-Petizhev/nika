$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        arrows: false,
        responsive: {
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    })
});