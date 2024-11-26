$(document).on('click', '.menu_icon .stripes', function () {
    if ($(this).hasClass("open") === false) {
        $(this).parent('.menu_icon').addClass("open");
        $('#left-navigation').animate({ left: "-100px" }, 100);
        $('#main-wrapper, .header').animate({ paddingLeft: "0.75rem" }, 100);
    }
});

$(document).on('click', '.menu_icon.open .stripes', function () {
        $('.menu_icon').removeClass("open");
        $('#left-navigation').animate({ left: "0px" }, 100);
        $('#main-wrapper, .header').animate({ paddingLeft: "110px" }, 100);
});


$(document).ready(function () {
    function checkScreenWidth() {
        if ($(window).width() < 768) {
            $(document).on('click', '.menu_icon .stripes', function () {
                if (!$(this).hasClass("open")) {
                    $(this).parent('.menu_icon').addClass("open");
                    $('#main-wrapper, .header-inner').animate({ left: "100px" }, 500);
                    $('#left-navigation').animate({ left: "0px" }, 100).css({ visibility: "visible" });

                }
            });

            $(document).on('click', '.menu_icon.open .stripes', function () {
                $('.menu_icon').removeClass("open");
                $('#main-wrapper, .header-inner').animate({ left: "0px" }, 100);
                $('#left-navigation').animate({ left: "-100px" }, 100).css({ visibility: "hidden" });
            });
        }
    }

    checkScreenWidth();

    $(window).resize(function () {
        checkScreenWidth();
    });
});

