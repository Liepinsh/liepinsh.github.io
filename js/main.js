// ========================================================================= 
//	Hamburger/drop down button on 767px for mobile
// ========================================================================= 

$(window).resize(function() {
    if (window.innerWidth > 767) {
        $('.top-nav-link').css('margin-top', '0');
        $('header').removeClass('header-background');

        $(document.body).click(function() {
            $('.top-nav-link').css('margin-top', '0');
        });
    } else {
        $('.top-nav-link').css('margin-top', '-393px');
        $('header').addClass('header-background');

        $('.hamburger').click(function(e){
            e.stopPropagation();
        
            $(document.body).click(function() {
                closeMenu();
            });
            
            function closeMenu(){
                $('.top-nav-link').css('margin-top', '-393px');
            }
        
            if ($('.top-nav-link').css('margin-top') == '-393px') {
                $('.top-nav-link').css('margin-top', '0');
            } else  {
                $('.top-nav-link').css('margin-top', '-393px');
            }
        });
    }
});

$(document).ready(function(){
    if (window.innerWidth > 767) {
        $('.top-nav-link').css('margin-top', '0');
        $('header').removeClass('header-background');
    } else {
        $('.top-nav-link').css('margin-top', '-393px');
        $('header').addClass('header-background');

        $('.hamburger').click(function(e){
            e.stopPropagation();
        
            $(document.body).click(function() {
                closeMenu();
            });
            
            function closeMenu(){
                $('.top-nav-link').css('margin-top', '-393px');
            }
        
            if ($('.top-nav-link').css('margin-top') == '-393px') {
                $('.top-nav-link').css('margin-top', '0');
            } else  {
                $('.top-nav-link').css('margin-top', '-393px');
            }
        });
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

let headerHeight = $("header").height();

$('.top-nav-link a[href*="#"], .pimg2 a[href*="#"]').click(function(event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
            scrollTop: target.offset().top - headerHeight
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

$(document).ready(function(){
    $('.carousel').carousel();
});

// ========================================================================= 
//	After scrolling changes class for header
// ========================================================================= 

$(document).ready(function(){
    if ($(document).scrollTop() > 150) { 
        $('header').addClass('header-change');
    } else if ($(document).scrollTop() < 150) { 
        $('header').removeClass('header-change');
    } 
    $(window).scroll(function() { 
      if ($(document).scrollTop() > 150) { 
        $('header').addClass('header-change');
      } else if ($(document).scrollTop() < 150) { 
        $('header').removeClass('header-change');
      } 
    }); 
});

// ========================================================================= 
//	Google maps
// ========================================================================= 

$(document).ready(function initMap() {
    let Lat = {lat: 56.990, lng: 24.243};
    let map = new google.maps.Map(
        document.getElementById('map'), {zoom: 11, center: Lat});
    let marker = new google.maps.Marker({position: Lat, map: map});
});


// $(document).ready( function() {
  
//     $('.add').click(function(e){
//       e.stopPropagation();
//      if ($(this).hasClass('active')){
//        $('.dialog').fadeOut(200);
//        $(this).removeClass('active');
//      } else {
//        $('.dialog').delay(300).fadeIn(200);
//        $(this).addClass('active');
//      }
//    });
//    $('.radio > .button').click( function() {
//      $('.radio').find('.button.active').removeClass('active');
//      $(this).addClass('active');
//    });
     
//    function closeMenu(){
//      $('.dialog').fadeOut(200);
//      $('.add').removeClass('active');  
//    }
     
//    $(document.body).click( function(e) {
//         closeMenu();
//    });
   
//    $(".dialog").click( function(e) {
//        e.stopPropagation();
//    });
//    });