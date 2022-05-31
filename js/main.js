$(function () {

  // 전체 메뉴 열고 닫기
  var $btn_menu = $(".btn_menu");
  var $header = $("header");
  var $all_menu_area = $(".all_menu_area");
  var $menu_bg = $(".menu_bg");
  var $btn_close = $(".all_menu_area .btn_close");

  $btn_menu.click(function(){
    $all_menu_area.addClass("on");
    $menu_bg.addClass("on");
  })

  $menu_bg.click(function(){
    $all_menu_area.removeClass("on");
    $menu_bg.removeClass("on");
  })

  $btn_close.click(function(){
    $all_menu_area.removeClass("on");
    $menu_bg.removeClass("on");
  })

  // 스크롤시 header 변경
  var header_top = $header.offset().top;  
  $(window).scroll(function(){
    if($(this).scrollTop() >= header_top){
      $header.addClass("fixed"); 
      $("main").css("paddingTop", "115px");
    } else {
      $header.removeClass("fixed");
      $("main").css("paddingTop", "0");
    }
  })

  var $btn_top = $(".btn_top");

  $btn_top.click(function(){
    $("html, body").stop().animate({
      scrollTop: 0
    }, 600)
  })

  // swiper
  var swiper1 = new Swiper(".sc_visual .swiper", {
    loop: true,
    effect: 'fade',
    navigation: {
      nextEl: ".sc_visual .btn_next",
      prevEl: ".sc_visual .btn_prev",
    },
    pagination: {
      el: ".sc_visual .pagination",
      clickable: true,
      type: "fraction",
    },
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false
    },
  });
  
  var swiper2 = new Swiper(".sc_best .swiper", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: ".sc_best .btn_next",
      prevEl: ".sc_best .btn_prev",
      disabledClass: 'btn_disabled'
    },
  });
  
  var swiper3 = new Swiper(".sc_new .swiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: ".sc_new .btn_next",
      prevEl: ".sc_new .btn_prev",
      disabledClass: 'btn_disabled'
    },
  });
  
  var swiper4 = new Swiper(".sc_cate .swiper", {
    slidesPerView: 5.3,
    spaceBetween: 20,
    freeMode: true,
  });
})
