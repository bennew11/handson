$(document).ready(function() {
    function parallax() {
        var scrolled = $(window).scrollTop();
        $('.parallax').css('top', -(scrolled * 0.6) + 'px')
    }

    $(window).scroll(function() {
        parallax();
    })

    $('.content').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id erat ut nisi ullamcorper congue. Proin vel elementum neque. Integer id fermentum nibh, a ornare tellus. Mauris dapibus ex sed dui elementum accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id erat ut nisi ullamcorper congue. Proin vel elementum neque. Integer id fermentum nibh, a ornare tellus. Mauris dapibus ex sed dui elementum accumsan.");
})