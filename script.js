var main=function(){
    /* Animates The Menu Opening */
    $('.icon-menu').click(function(){
        $('.menu').animate({
            left:"0px"
        },200);
        
        $('body').animate({
            left:"285px"
        },200);
    });
    
    /*Animates Menu Closing*/
    $('.icon-close').click(function(){
        $('.menu').animate({
            left:"-285px"
        },200);
        
        $('body').animate({
            left:"0px"
        },200);
    });
    
    /*Upon Clicking A Picture At The Bottom Of Page Deselect All Items And Select Current Item*/
     $('.pic').click(function() {
    $('.pic').removeClass('current');
    $('.description').hide();

    $(this).addClass('current');
    $(this).children('.description').show();
  });
    
    /*Upon Clicking in the SlideShow Area Deselect All Items*/
    $('.artist').click(function(){
        $('.pic').removeClass('current');
        $('.description').hide();
    });
};

/*Slideshow function*/
var slideShow = function() {
  $('.arrow-next').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  });


  $('.arrow-prev').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });

}


$(document).ready(slideShow);

$(document).ready(main);