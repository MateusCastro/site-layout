$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    navText: [
      "<img src='./images/esquerda.svg'>",
      "<img src='./images/direita.svg'>"
    ],
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
});
