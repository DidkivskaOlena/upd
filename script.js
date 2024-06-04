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