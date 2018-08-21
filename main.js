// ========================================================================= 
//	Hamburger/drop down button on 750px for mobile
// ========================================================================= 

$('.hamburger').click(function(){
    if ($('.top-nav-link').css('margin-top') == '-393px') {
        $('.top-nav-link').css('margin-top', '0');
    } else  {
        $('.top-nav-link').css('margin-top', '-393px');
    }
});

$(window).resize(function() {
    if (window.innerWidth > 750) {
        $('.top-nav-link').css('margin-top', '0');
        $('header').removeClass('header-background');
    } else {
        $('.top-nav-link').css('margin-top', '-393px');
        $('header').addClass('header-background');
    }
});

// ========================================================================= 
//	Back to Top button
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
//	Scroll to selected navigation hashes/articles
// ========================================================================= 

$('.top-nav-link a[href*="#"]').click(function(event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
            scrollTop: target.offset().top
            }, 1000, function() {
                let $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                    return false;
                } else {
                    $target.attr('tabindex','-1');
                    $target.focus();
                };
            });
        }
    }
});

// ========================================================================= 
//	Carousel
// ========================================================================= 

$('.carousel').carousel();

// ========================================================================= 
//	After scrolling changes class for header
// ========================================================================= 

$(document).ready(function(){
    $(window).scroll(function() { 
      if ($(document).scrollTop() > 150) { 
        $('header').addClass('header-change');
      } else { 
        $('header').removeClass('header-change');
      } 
    }); 
});
