$(document).ready(function() {
    $(".p-main1").mouseenter(function(){
        $(".img-hide1").toggle();
        $(".p1txt").toggle();
        $('#p-main1').css('background','url(./assets/portfolio/work4.jpg)')
    });
    $(".p-main1").mouseleave(function() {
        $(".img-hide1").toggle();
        $(".p1txt").toggle();
        $("#p-main1").css('background', 'none')
    });

    $(".p-main2").mouseenter(function(){
        $(".img-hide2").hide();
        $(".p2txt").show();
        $('.p-main2').css('background','url(./assets/portfolio/work3.jpg)')
    });
    $(".p-main2").mouseleave(function() {
        $(".img-hide2").show();
        $(".p2txt").hide();
    });

    $(".p-main3").mouseenter(function(){
        $(".img-hide3").hide();
        $(".p3txt").show();
        $('.p-main3').css('background','url(./assets/portfolio/work3.jpg)')
    });
    $(".p-main3").mouseleave(function() {
        $(".img-hide3").show();
        $(".p3txt").hide();
    });
});


