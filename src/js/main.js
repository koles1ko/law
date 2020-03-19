console.log(divide(4, 2));
console.log(divide(34, 2));

$(function () {



    $(".reviews__button").on('click', function(){
      $(".reviews__button").removeClass("active");
      $(this).addClass("active");
    }); 


    var mixer = mixitup('.reviews__items'); 

    $('.partner__slider').slick({
      dots: false,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
    });

    // $(".btn-check").on('click', function(){
    //   $(".btn-check").toggleClass("active");
    //   $(".products__info").toggleClass("active");
    // }); 

    $(".btn-check").on('click', function(){
      $(".btn-check").toggleClass("active");
      $(".products__info").slideToggle();
    }); 

  //   $('.reviews__items').on('mixEnd', function() {
  //     $('.reviews__items').slick('slickFilter', '.activemixclass');
  // });

     

  //var mixer = mixitup('.container'); 
  // ".container" -родитель блоков которые будем миксовать
  // миксер элементов

//----------------------------------

  // $(".reviews__button").on('click', function(){
  //   $(".reviews__button").removeClass("active");
  //   $(this).addClass("active");
  // }); 
  // добавляем и убираем класс

//----------------------------------

  //  $(".test").on('click', function(){
  //    $(".test").toggleClass("active");
  //  }); 
  // додбавление класса

//----------------------------------

  // $('.menu__btn').on('click', function(){
  //   $('.menu__list').slideToggle();
  // });
  // Для бургера!

//----------------------------------

  //   $('.class').slick({
  //   dots: true,
  //   arrows: false,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  // });
  // Обычный одиночный слайдер!

//----------------------------------

  //  $('.slider-for').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   asNavFor: '.slider-nav'
  // });
  // $('.slider-nav').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   asNavFor: '.slider-for',
  //   dots: true,
  //   centerMode: true,
  //   focusOnSelect: true
  // });
  // Двойной слайдер!

//----------------------------------

  // $('.wrapper .tab').on('click', function(event) {
  // var id = $(this).attr('data-id');
  //   $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
  //   $('.wrapper .tabs').find('.tab').removeClass('active');
  //   $(this).addClass('active');
  //   $('#'+id).addClass('active-tab').fadeIn();
  //   return false;
  // }); 
  //Для табов!

  //----------------------------------
});