$(window).scroll(function() {
   if($(this).scrollTop()>60) {
       $( ".navbar-header" ).addClass("has-fixed");
    } else {
       $( ".navbar-header" ).removeClass("has-fixed");
   }
});

$('#testimonialCarousel').carousel();
$('#bannerCarousel').carousel({
    interval: 8000
})

$(document).ready(function(){
  $(".bannerinner").prev(".navbar").addClass("navInner");
});

$('.services-carousel').owlCarousel({
  loop:true, 
  dots: false,
  responsiveClass:true,
  responsive:{
      1200:{
          items:6,
          nav:true
      },
      767:{
          items:4,
          nav:true
      },
      580:{
          items:3,
          nav:true
      },
      480:{
          items:2,
          nav:true
      },
      300:{
          items:1,
          nav:true
      },
      990:{
          items:5,
          nav:true,
          loop:false
      }
  }
});

$('.portfoliotestimonial').owlCarousel({
  loop:true, 
  dots: false,
  autoplay: true, 
  items:1,
  responsiveClass:true
});

$('.portfoliorecent-carousel').owlCarousel({
  loop:true, 
  dots: false,
  nav:false,
  responsiveClass:true,
  responsive:{
      800:{
          items:3         
      },
      680:{
          items:2
      },
      300:{
          items:1
      }
  }
});

$('.approachcarousel').owlCarousel({
  loop:false, 
  dots: false,
  nav:false,
  responsiveClass:true,
  responsive:{
      800:{
          items:3         
      },
      680:{
         dots: true,
          items:2
      },
      300:{
         dots: true,
          items:1
      }
  }
});

$('.imagecarousel').owlCarousel({
  loop:true, 
  dots: true,
  autoplay: true,
  nav:false, 
  items:1,
  responsiveClass:true
});
$('.testimonialcarousel').owlCarousel({
  loop:true, 
  dots: false,
  autoplay: true,
  nav:false, 
  items:1,
  responsiveClass:true
});
$('.teamcarousel').owlCarousel({
  loop:false, 
  dots: true,
  nav:false,
  responsiveClass:true,
  responsive:{
      800:{
          items:3         
      },
      680:{
         dots: true,
          items:2
      },
      300:{
         dots: true,
          items:1
      }
  }
});
$('.technologyCarousel').owlCarousel({
  loop:false, 
  dots: false,
  nav:false,
  responsiveClass:true,
  responsive:{
      800:{
          items:3         
      },
      680:{
         dots: true,
          items:2
      },
      300:{
         dots: true,
          items:1
      }
  }
});

jQuery(".stepProcess .circleBox:nth-child(2) .image").hover(
  function () {
    jQuery('.circleProcess').addClass("hoverTwo");
  },
  function () {
    jQuery('.circleProcess').removeClass("hoverTwo");
  }
);
jQuery(".stepProcess .circleBox:nth-child(3) .image").hover(
  function () {
    jQuery('.circleProcess').addClass("hoverThree");
  },
  function () {
    jQuery('.circleProcess').removeClass("hoverThree");
  }
);
jQuery(".stepProcess .circleBox:last-child .image").hover(
  function () {
    jQuery('.circleProcess').addClass("hoverFour");
  },
  function () {
    jQuery('.circleProcess').removeClass("hoverFour");
  }
);

jQuery(".serviceDetail .detailBox .btn-collapse").each(function( index ) {
  jQuery(this).click(function(){
    jQuery(this).parent().toggleClass("show");
  });
});


// Init WOW.js and get instance
wow = new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 0, // default
  mobile: true, // default
  live: true // default
})
wow.init();
  
/*  Bootstrap Carousel and Animate.css */
(function($) {
    //Function to animate slider captions
    function doAnimations(elems) {
      //Cache the animationend event in a variable
      var animEndEv = "webkitAnimationEnd animationend";
  
      elems.each(function() {
        var $this = $(this),
          $animationType = $this.data("animation");
        $this.addClass($animationType).one(animEndEv, function() {
          $this.removeClass($animationType);
        });
      });
    }
  
    //Variables on page load
    var $myCarousel = $(".customCarousel"),
      $firstAnimatingElems = $myCarousel
        .find(".carousel-item:first")
        .find("[data-animation ^= 'animated']");
    //Initialize carousel
    $myCarousel.carousel();
    //Animate captions in first slide on page load
    doAnimations($firstAnimatingElems);
    //Other slides to be animated on carousel slide event
    $myCarousel.on("slide.bs.carousel", function(e) {
      var $animatingElems = $(e.relatedTarget).find(
        "[data-animation ^= 'animated']"
      );
      doAnimations($animatingElems);
    });
  })(jQuery);

// handle links with @href started with '#' only
jQuery(document).on('click', 'a[href^="#"]', function(e) {
  // target element id
  var id = jQuery(this).attr('href');
  
  // target element
  var $id = jQuery(id);
  if ($id.length === 0) {
      return;
  }
  
  // prevent standard hash navigation (avoid blinking in IE)
  e.preventDefault();
  
  // top position relative to the document
  var pos = $id.offset().top;
  
  // animated top scrolling
  jQuery('body, html').animate({scrollTop: pos});
});

// Portfolio Jquery
$(function() {
  var selectedClass = "";
  $(".portfolioNav .filter").click(function(){ 
    $(".portfolioNav .filter").removeClass("active"); 
    $(this).addClass("active"); 
  selectedClass = $(this).attr("data-rel"); 
   $("#portfolio").fadeTo(100, 0.1);
  $("#portfolio div.portfolioItem").not("."+selectedClass).fadeOut().removeClass('scaleAnm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scaleAnm');
      $("#portfolio").fadeTo(300, 1);
    }, 300); 
  });
});


