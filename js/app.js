 $(document).ready(function () {


     $(document).ready(function () {
         $(document).on("scroll", onScroll);

         //smoothscroll
         $('a[href^="#"]').on('click', function (e) {
             e.preventDefault();
             $(document).off("scroll");

             $('a').each(function () {
                 $(this).removeClass('active');
             })
             $(this).addClass('active');

             var target = this.hash,
                 menu = target;
             $target = $(target);
             $('html, body').stop().animate({
                 'scrollTop': $target.offset().top + 2
             }, 500, 'swing', function () {
                 window.location.hash = target;
                 $(document).on("scroll", onScroll);
             });
         });
     });

     function onScroll(event) {
         var scrollPos = $(document).scrollTop();
         $('.top-bar-menu a').each(function () {
             var currLink = $(this);
             var refElement = $(currLink.attr("href"));
             if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                 $('.top-bar-menu ul li a').removeClass("active-list");
                 currLink.addClass("active-list");
             } else {
                 currLink.removeClass("active-list");
             }
         });
     }

     //--------------------------------Scroll

     $('.main-in').hide();
     $('.questions').find('button').click(function () {
         $(this).parents('.questions').find('.main-in').fadeIn();
         $(this).parents('.questions').find('.fade').addClass('animated fadeOutDown');
         $(this).parents('.questions').find('.fade-out').addClass('animated fadeOut');
         $(this).parents('.questions').find('.main-in').addClass('animated fadeIn');

     });



     $('.questions').find(".btn").click(function () {
         var risultato = $(this).data("result");
         $(this).parents('.questions').find('#risultato').html(risultato);
     });
 });
