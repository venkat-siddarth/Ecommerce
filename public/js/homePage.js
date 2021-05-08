var k=document.getElementsByClassName("col-md-3");
for (var i=0;i<8;i++)
{
    k[i].innerHTML = '<div class="card border-dark"><img src = "images/eniko-kis-KsLPTsYaqIQ-unsplash.jpg" alt = "product-image" data - type="cardimg" ><div class="card-footer border-top border-light" data-type="cardfooter"><a href="#" class="h5">OldCamera</a><div class="mt-2">$299.00</div></div>'
}
$(document).ready(function()
{
    $(".text").hide();
    $(".text-1").hide();
    $(".text-2").hide();
    $(".clock").mouseenter(function(){
        $(".text-1").slideToggle();


    })
    $(".bag").mouseenter(function () {
        $(".text-2").slideToggle();


    })
    $(".watch").mouseenter(function () {
        $(".text").slideToggle();
    })



    $(".clock").mouseleave(function () {
        $(".text-1").stop(false,true).hide();


    })
    $(".bag").mouseleave(function () {
        $(".text-2").stop().hide();


    })
    $(".watch").mouseleave(function () {
        $(".text").stop().hide();
    })
    





    

});
$(document).ready(function () {
    // Activate Carousel
    $("#myCarousel").carousel();

    // Enable Carousel Indicators
    $(".item1").click(function () {
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function () {
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function () {
        $("#myCarousel").carousel(2);
    });

    // Enable Carousel Controls
    $(".carousel-control-prev").click(function () {
        $("#myCarousel").carousel("prev");
    });
    $(".carousel-control-next").click(function () {
        $("#myCarousel").carousel("next");
    });
});


