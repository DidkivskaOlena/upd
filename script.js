$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    dots: true,
	margin: 20,
    responsive:{
        0:{
            items:1
        },
        300:{
            items:3
        },
        540:{
            items:5
        }
    }
})


(() => {
    const menuBtnRef = document.querySelector('[data-menu-button]');
    const mobileMenuRef = document.querySelector('[data-menu]');
  
    menuBtnRef.addEventListener('click', () => {
      const expanded =
        menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
  
      menuBtnRef.classList.toggle('is-open');
      menuBtnRef.setAttribute('aria-expanded', !expanded);
  
      mobileMenuRef.classList.toggle('is-open');
    });
  })();