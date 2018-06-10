$(document).ready(()=>{
    //slide the menu bar on click
    $(".menu span").click(()=>{
        $(".hide-on-mobile").slideToggle("fast");
    })
    //change to defaults on screen size change
    $(window).resize((e)=>{
        if($(window).width() >= 480)
        {
            $(".hide-on-mobile").show();
        } else {
            $(".hide-on-mobile").hide();
        }
    });

    $("#home").click(()=>{
        $("body").css("background-color","#CAEDF3")
    })
    $("#about").click(()=>{
        $("body").css("background-color","#FEB0EF")
    })
    $("#work").click(()=>{
        $("body").css("background-color","#9AF688")
    })
    $("#contact").click(()=>{
        $("body").css("background-color","#F4D65E")
    })

})