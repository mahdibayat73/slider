//<!-- NEW SLIDER -->//

// Run Swiper Slider

var galleryTop = new Swiper('.gallery-top', {
    loopedSlides: 2,
    speed: 1000,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
  });
  var galleryThumbs = new Swiper('.gallery-thumbs-bg', {
    centeredSlides: true,
    slidesPerView: 'auto',
    slideToClickedSlide: true,
    speed: 1000,
    loopedSlides: 2,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
  });
  
  var galleryContent = new Swiper('.gallery-content', {
    direction: "vertical",
    centeredSlides: true,
    slidesPerView: 'auto',
    slideToClickedSlide: true,
    speed: 1000,
    loopedSlides: 2,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
  });
  
  var galleryContentMobile = new Swiper('.hideForDesktop', {
    centeredSlides: true,
    slidesPerView: 'auto',
    slideToClickedSlide: true,
    loop: true,
    speed: 1000,
    loopedSlides: 2,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  // Run Swiper Slider
  
  // Match Swiper Slider Together
  
  galleryThumbs.on('slideChangeTransitionEnd', function() {
    let index_currentSlide = galleryThumbs.realIndex;
    let currentSlide = galleryThumbs.slides[index_currentSlide]
    galleryTop.slideTo(index_currentSlide, 1000, false);
    galleryContent.slideTo(index_currentSlide, 1000, false);
    galleryContentMobile.slideTo(index_currentSlide, 1000, false);
  
  });
  
  galleryContent.on('slideChangeTransitionEnd', function() {
    let index_currentSlide = galleryContent.realIndex;
    let currentSlide = galleryContent.slides[index_currentSlide]
    galleryTop.slideTo(index_currentSlide, 1000, false);
    galleryThumbs.slideTo(index_currentSlide, 1000, false);
  });
  
  galleryTop.controller.control = galleryThumbs;
  
  galleryThumbs.controller.control = galleryTop;
  
  galleryContent.controller.control = galleryTop;
  
  galleryContentMobile.on('slideChangeTransitionEnd', function() {
    let index_currentSlide = galleryContentMobile.realIndex;
    let currentSlide = galleryContentMobile.slides[index_currentSlide]
    galleryThumbs.slideTo(index_currentSlide, 1000, false);
  });
  
  galleryThumbs.on('slideChange', function () {
      if(galleryThumbs.realIndex == 0) {
        jQuery('.view-product').attr("href", "https://nanosil.ir/product/mouthwash-m1-250cc/")
  }else if (jQuery(galleryThumbs.realIndex == 1)) {
      jQuery('.view-product').attr("href", "https://nanosil.ir/product/ضدعفونی-کننده-دست-d2-plus-250-cc-تریگر-عصایی/")
  }
  });
  
  // Match Swiper Slider Together
  
  //<!-- NEW SLIDER -->//
  