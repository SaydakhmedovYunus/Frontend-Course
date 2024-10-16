var splide = new Splide( '.splide', {
  type: 'loop',
  perPage: 3,
  perMove: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  gap: 10,
  breakpoints: {
    500: {
      perPage: 1,
      navigation: false,
    }
  }
} );

splide.mount();