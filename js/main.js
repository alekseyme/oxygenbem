$(function(){

   // === menu
   $('.header__top-toogle').on('click', function () {
      $('.menu').toggleClass('active');
      $('body').toggleClass('lock');
      $(this).toggleClass('active');
   });

   $('.menu__link').on('click', function () {
      $('.menu').removeClass('active');
      $('.header__top-toogle').removeClass('active');
      $('body').removeClass('lock');
   });
   // === menu

   // === amination
   new WOW().init();
   // === animation

   // === mixitup
   var mixer = mixitup('.portfolio__works');
   // === mixitup

   // === slider
   $('.slider-box').slick({
      dots: true,
      responsive: [
         {
           breakpoint: 768,
           settings: {
             arrows: false,
             autoplay: true
           }
         }
      ]
   });
   // === slider

});