$(document).ready(function(){
    // work 1
    $("#work1").click(function(){
        $("#work1").addClass("active");

        $("#work2").removeClass("active");
        $("#work3").removeClass("active");

        $(".category-work1").removeClass("hideCategory");
        $(".category-work1").addClass("showCategory");
        $(".category-work2").addClass("hideCategory");
        $(".category-work3").addClass("hideCategory");
    });
    // work 2
    $("#work2").click(function(){
        $("#work2").addClass("active");

        $("#work1").removeClass("active");
        $("#work3").removeClass("active");

        $(".category-work2").removeClass("hideCategory");
        $(".category-work2").addClass("showCategory");
        $(".category-work1").addClass("hideCategory");
        $(".category-work3").addClass("hideCategory");
    });
    // work 3
    $("#work3").click(function(){
        $("#work3").addClass("active");

        $("#work1").removeClass("active");
        $("#work2").removeClass("active");

        $(".category-work3").removeClass("hideCategory");
        $(".category-work3").addClass("showCategory");
        $(".category-work1").addClass("hideCategory");
        $(".category-work2").addClass("hideCategory");
    });
});