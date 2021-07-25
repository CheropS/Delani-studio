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
        $("#p-main2").css('background', 'none')
    });

    $(".p-main3").mouseenter(function(){
        $(".img-hide3").toggle();
        $(".p3txt").toggle();
        $('#p-main3').css('background','url(./assets/portfolio/work2.jpg)')
    });
    $(".p-main3").mouseleave(function() {
        $(".img-hide3").toggle();
        $(".p3txt").toggle();
        $("#p-main3").css('background', 'none')
    });

    $(".p-main4").mouseenter(function(){
        $(".img-hide4").toggle();
        $(".p4txt").toggle();
        $('#p-main4').css('background','url(./assets/portfolio/work1.jpg)')
    });
    $(".p-main4").mouseleave(function() {
        $(".img-hide4").toggle();
        $(".p4txt").toggle();
        $("#p-main4").css('background', 'none')
    });

    $(".p-main5").mouseenter(function(){
        $(".img-hide5").toggle();
        $(".p5txt").toggle();
        $('#p-main5').css('background','url(./assets/portfolio/work5.jpg)')
    });
    $(".p-main5").mouseleave(function() {
        $(".img-hide5").toggle();
        $(".p5txt").toggle();
        $("#p-main5").css('background', 'none')
    });

    $(".p-main6").mouseenter(function(){
        $(".img-hide6").toggle();
        $(".p6txt").toggle();
        $('#p-main6').css('background','url(./assets/portfolio/work6.jpg)')
    });
    $(".p-main6").mouseleave(function() {
        $(".img-hide6").toggle();
        $(".p6txt").toggle();
        $("#p-main6").css('background', 'none')
    });

    $(".p-main7").mouseenter(function(){
        $(".img-hide7").toggle();
        $(".p7txt").toggle();
        $('#p-main7').css('background','url(./assets/portfolio/work7.jpg)')
    });
    $(".p-main7").mouseleave(function() {
        $(".img-hide7").toggle();
        $(".p7txt").toggle();
        $("#p-main7").css('background', 'none')
    });

    $(".p-main8").mouseenter(function(){
        $(".img-hide8").toggle();
        $(".p8txt").toggle();
        $('#p-main8').css('background','url(./assets/portfolio/work8.jpg)')
    });
    $(".p-main8").mouseleave(function() {
        $(".img-hide8").toggle();
        $(".p8txt").toggle();
        $("#p-main8").css('background', 'none')
    });


    $(".img-des").click(function(){
        $(".txt-des").show ();
        $("img-des").toggle();
    })
    $(".img-des").click(function(){
        $(".txt-des").hide();
        $(".img-des").toggle();
    })

    $(".img-dvp").click(function(){
        $(".txt-dvp").show ();
        $("img-dvp").toggle();
    })
    $(".img-dvp").click(function(){
        $(".txt-dvp").hide();
        $(".img-dvp").toggle();
    })

    $(".img-prd").click(function(){
        $(".txt-prd").show ();
        $("img-prd").toggle();
    })
    $(".img-prd").click(function(){
        $(".txt-prd").hide();
        $(".img-prd").toggle();
    })
});


