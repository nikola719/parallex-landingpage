/**
 * This is script for index page
 */
$(document).ready(function () {
  // Wow init
  new WOW().init();

  // Init scroll spy
  $(".header-nav__link").click(function () {
    let target = $(this).attr("href");
    if (target == "#start") {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        800
      );
      $(".header").removeClass("active");
      $(".hamburger").removeClass("active");
    } else {
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        800
      );
      $(".header").removeClass("active");
      $(".hamburger").removeClass("active");
    }
  });

  // Hamburger
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $(".header").toggleClass("active");
    if ($(this).hasClass("active")) {
      $("body").append('<div class="overlay"></div>');
    } else {
      $("body .overlay").remove();
    }
  });

  //scroll effect
  $(window).on("load scroll", function () {
    let scrollTop = $(window).scrollTop();
    if (scrollTop > 50) $(".header").addClass("is-scrolling");
    else $(".header").removeClass("is-scrolling");

    let attPara = $(".attraction-parallex"),
      fooPara = $(".scroll-parallex");
    let attRatio = 0.08,
      fooRatio = 500;
    parallex_scroll_vertical(attPara, attRatio);
    parallex_scroll_horizontal(fooPara, fooRatio);
  });
});

// verticl scroll parallex
function parallex_scroll_vertical(element, ratio) {
  parallaxQuantity = element.length;
  window.requestAnimationFrame(function () {
    for (let i = 0; i < parallaxQuantity; i++) {
      const currentElement = element.eq(i),
        windowTop = $(window).scrollTop(),
        elementTop = currentElement.offset() && currentElement.offset().top,
        elementHeight = currentElement.height(),
        viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
        scrolled = windowTop - elementTop + viewPortHeight;
      currentElement.css({
        transform: `translate3d(0px, ${scrolled * ratio}px, 0px)`,
      });
    }
  });
}

//horizontal scroll parallex
function parallex_scroll_horizontal(element, ratio) {
  const documentHeight = $(document).height();
  const windowHeight = $(window).height();
  const parallaxQuantity = element.length;
  window.requestAnimationFrame(function () {
    for (let i = 0; i < parallaxQuantity; i++) {
      const currentElement = element.eq(i),
        windowTop = $(window).scrollTop();
      let scale = (documentHeight - windowTop - windowHeight) / documentHeight;
      const ratio1 = currentElement.hasClass("left") ? -1 * ratio : ratio;
      currentElement.css({
        transform: `translate3d(${scale * ratio1}px,0px,0px)`,
      });
    }
  });
}
