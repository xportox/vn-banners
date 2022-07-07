$(".bannerSlider").slick({
  // normal options...
  infinite: false,
  slidesToShow: 3,
  arrows: true,
  mobileFirst: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
