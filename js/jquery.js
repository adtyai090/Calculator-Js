$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll < 100) {
    $(".fixed-top").css({
      background: "transparent",
      "box-shadow": "none",
    });
  } else {
    $(".fixed-top").css({
      background: "#fff",
      "box-shadow": "9px 8px 15px -1px rgb(0 0 0 / 10%)",
    });
  }
});

// var owl = $('.what_slider');
// owl.owlCarousel({
// items:3,
// loop:true,
// margin:8,
// navText: [
// "<img src='image/arrow-left.png'>",
// "<img src='image/arrow-right.png'>",
// ],
// autoplay:true,
// autoplayTimeout:5000,
// autoplayHoverPause:true,
// responsive:{
// 0:{
// items:1
// },
// 600:{
// items:2
// },
// 1000:{
// items:3
// }
// }
// });
// $('.play').on('click',function(){
// owl.trigger('play.owl.autoplay',[5000])
// })
// $('.stop').on('click',function(){
// owl.trigger('stop.owl.autoplay')
// })

const menu = document.querySelector(".menu");
const times = document.querySelector(".times");
const small = document.querySelector(".small");
const large = document.querySelector(".large");
const overlay = document.querySelector(".overlay");

menu.addEventListener("click", function () {
  small.classList.add("show");
  overlay.classList.add("show");
});
times.addEventListener("click", function () {
  small.classList.remove("show");
  overlay.classList.remove("show");
});

overlay.addEventListener("click", () => {
  small.classList.remove("show");
  overlay.classList.remove("show");
});

const linkSms = document.querySelectorAll(".link-sm");
linkSms.forEach((linkSm) => {
  linkSm.onclick = function () {
    const innerMenu = linkSm.children[2];
    console.log(innerMenu);
    if (innerMenu.style.maxHeight) {
      innerMenu.style.maxHeight = null;
    } else {
      innerMenu.style.maxHeight = innerMenu.scrollHeight + "px";
    }
  };
});

//
$(document).ready(function () {
  // Show sub-menus on hover
  $("nav ul li").hover(
    function () {
      $(this).find(".sub-menu").first().stop(true, true).slideDown(200);
    },
    function () {
      $(this).find(".sub-menu").first().stop(true, true).slideUp(200);
    }
  );

  // Prevent the click on parent items
  $("nav .sub-menu a").click(function (e) {
    e.stopPropagation();
  });
});

// Sticky Top
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".sticky-top-1").addClass("sticky");
  } else {
    $(".sticky-top-1").removeClass("sticky");
  }
});
