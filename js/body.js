
// head-simple-slider

flashSimpleSlider("#headSimpleSlider", {
	autoplay: true,
	buttons: true
});

// the-end-of-head-simple-slider



// page-first-slider

$('.page-first-slider').slick({
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 300,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    }
  ]  
});

// page-first-slider



// page-second-slider

$('.page-second-slider').slick({
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  speed: 300,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 599,
      settings: {
        slidesToShow: 1
      }
    }
  ]  
});

// page-second-slider
