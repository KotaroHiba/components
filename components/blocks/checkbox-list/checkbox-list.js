$(document).ready(function() {
    $(".checkbox-list__title").next().slideToggle();

    $(".checkbox-list__title").click(function() {
        $(this).next().slideToggle();
        let arror = $(this).children('.checkbox-list__arror');
        if (arror.text() == 'keyboard_arrow_up') {
            arror.text('keyboard_arrow_down')
        } else {
            arror.text('keyboard_arrow_up');
        }
    });
});
