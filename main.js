// ========================================================================= 
//	Hamburger/drop down button on 750px for mobile
// ========================================================================= 


$('.hamburger').click(function(){
    if($('.top-nav-link').css('margin-top') == '-393px') {
        $('.top-nav-link').css('margin-top', '0');
    } else {
        $('.top-nav-link').css('margin-top', '-393px');
    }
});
//let lastSize;
$(window).resize(function() {
    
    //console.log(window.innerWidth)

    //if(lastSize > window.innerWidth)

    if(window.innerWidth > 750) {
        $('.top-nav-link').css('margin-top', '0');
    } else {
        $('.top-nav-link').css('margin-top', '-393px');
    }

    //lastSize = window.innerWidth
});


// ========================================================================= 
//	Back to Top
// ========================================================================= 
	 
if ($('.go-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.go-top').addClass('show');
            } else {
                $('.go-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('.go-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
};


// ========================================================================= 
//	Scroll to cenas
// ========================================================================= 

$('.cenas').click(function (e){
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 100
    }, 400);
});
