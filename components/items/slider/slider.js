


$('.slider__next').click(function () {
    let thisSlider = $(this).siblings('.slider-item.active');

    if ($(this).siblings('.slider-item:last').hasClass('active')) {
        $(this).siblings('.slider-item:first').addClass('active')
    }
    thisSlider.removeClass('active');
    thisSlider.next('.slider-item').addClass('active');


});


$('.slider__prev').click(function () {
    let thisSlider = $(this).siblings('.slider-item.active');

    if ($(this).siblings('.slider-item:first').hasClass('active')) {
        $(this).siblings('.slider-item:last').addClass('active')
    }
    thisSlider.removeClass('active');
    thisSlider.prev('.slider-item').addClass('active');


});


// $(this).removeClass('active');
// $(this).next().addClass('active');