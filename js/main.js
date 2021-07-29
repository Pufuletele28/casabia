$(document).ready(function() {

    let mobileNav = false;

    $(".fa-bars").click(function () {

        if (mobileNav === false) {

            $( ".main-container" ).animate({
                left: "-80%"
            }, 500, function() {
                // Animation complete.
            });
            $( ".mobile-navigation .links" ).animate({
                right: "0%"
            }, 500, function() {
                // Animation complete.
            });

            $(this).removeClass("fa-bars");
            $(this).addClass("fa-times");

            mobileNav = true;

        }else {

            $( ".main-container" ).animate({
                left: "0%"
            }, 500, function() {
                // Animation complete.
            });
            $( ".mobile-navigation .links" ).animate({
                right: "-80%"
            }, 500, function() {
                // Animation complete.
            });

            $(this).addClass("fa-bars");
            $(this).removeClass("fa-times");

            mobileNav = false;

        }

    });

    $(".links a").click(function () {

        $(".fa-times").click();

    });

    let lastScrollTop = 0


    $(".main-container").on("scroll", function () {

        if ($(".main-container")[0].scrollTop > 0 && $(".main-container").width() < 950) {
            $(".mobile-navigation").addClass("scrolled");
        } else {
            $(".mobile-navigation").removeClass("scrolled");
        }

        
        if ( $(".main-container")[0].scrollTop < lastScrollTop && $(".main-container")[0].scrollTop > 100 ) {

            $(".scrolled-nav").css("top", "0");

        }else {

            $(".scrolled-nav").css("top", "-100%");

        }

        lastScrollTop = $(".main-container")[0].scrollTop;

    })

    if ($(".main-container")[0].scrollTop > 0) {
        $(".mobile-navigation").addClass("scrolled");
    } else {
        $(".mobile-navigation").removeClass("scrolled");
    }

    // slider 

    $(".dot").click(function () {

        document.querySelectorAll('.image-slider img')[ $(this).attr('data-image')].scrollIntoView({ 
            behavior: 'smooth' 
        });

        $(this).siblings('.dot').attr("id", "");
        $(this).attr("id", "activeDot");

    });

    $(".gallery-nav-wrapper i, .mobile-slider-nav i").click(function () {
        
        let arrow = $(this).attr("data-arrow");

        if (arrow == "left") {

            if ( $("#activeDot").attr("data-image") > 0 ) {

                $(".dot")[ Number($("#activeDot").attr("data-image")) - 1].click();

            }else {

                $(".dot")[3].click();

            }

        }else {

            if ( $("#activeDot").attr("data-image") < 3 ) {

                $(".dot")[ Number($("#activeDot").attr("data-image")) + 1 ].click();

            }else {

                $(".dot")[0].click();

            }

        }

    });

    // slider

    // nav 

    $(".haf-nav a, .links a, div.text-wrapper:nth-child(2) > a:nth-child(3)").click(function (e) {

        e.preventDefault();

        $( $(this).attr('href') )[0].scrollIntoView({ 
            behavior: 'smooth' 
        });

    });

    // nav

    // menu 

    $(".main-menu-cat h3").click(function () {

        let main_cat = $(this).text();

        $.ajax({
            url: "php/menu.php",
            method: "post",
            dataType: 'json',
            data: {menu_cat: true, main_cat: main_cat},
            success: function (data) {
                
                $(".sec-menu-cat").html("");

                for ( let i = 0; i < data.length; i++ ) {  
    
                    $(".sec-menu-cat").append("<p>"+ data[i] +"</p>");
    
                }

                $(".sec-menu-cat p").click(function () { 

                    $(this).siblings("p").removeClass("active");
                    $(this).addClass("active");

                });
    
            }
        })

        $(this).siblings("h3").removeClass("active");
        $(this).addClass("active")

    });

    $(".main-menu-cat h3")[0].click();

    // menu

});