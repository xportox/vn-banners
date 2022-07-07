let setaPrev =
  '<a href="javascript:;" class="prev-arrow"><svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><circle cx="23" cy="20" r="16" fill="white"/></g><path d="M26 13.334L19.6667 19.6673L26 26.0007" stroke="#5D5955" stroke-width="1.33333"/><defs><filter id="filter0_d" x="0.333333" y="-2.38419e-07" width="45.3333" height="45.3333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2.66667"/><feGaussianBlur stdDeviation="3.33333"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg></a>';
let setaNext =
  '<a href="javascript:;" class="next-arrow"><svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><circle cx="23" cy="20" r="16" fill="white"/></g><path d="M19.666 13.334L25.9993 19.6673L19.666 26.0007" stroke="#5D5955" stroke-width="1.33333"/><defs><filter id="filter0_d" x="0.333333" y="-2.38419e-07" width="45.3333" height="45.3333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2.66667"/><feGaussianBlur stdDeviation="3.33333"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg></a>';

$(".bannerSlider").slick({
  infinite: false,
  slidesToShow: 3,
  arrows: true,
  prevArrow: setaPrev,
  nextArrow: setaNext,
  mobileFirst: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1052,
      settings: {
        slidesToShow: 2.5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.5,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1.3,
        slidesToScroll: 1,
      },
    },
  ],
});
