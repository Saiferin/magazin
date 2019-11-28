$(document).ready(function(){
    var owl1 = $('.slider-1').owlCarousel({

        items:4,
        nav:false,

        responsive:{
            320:{
                items:1,
                margin:-27
            },
            334:{
                items:1,
                margin:-38
            },

            340:{
                items:1,
                margin:-38
            },
            360:{
                items:1,
                margin:-47
            },
            375:{
                items:1,
                margin:-24
            },
            396:{
                items:1,
                margin:-38
            },
            397:{
                items:1,
                margin:-38
            },
            411:{
                items:1,
                margin:-38
            },

            434:{
                items:1,
                margin:-62
            },

            632:{
                items:1,
                margin:-90
            },

            664:{
                items:1,
                margin:-90
            },
            667:{
                items:1,
                margin:-90
            },
            736:{
                items:1,
                margin:-150
            },
            767:{
                items:1,
                margin:-190
            },
            768:{
                items:2,
                margin:-120
            },
            900:{
                items:3
            },
            1200:{
                items:4
            }

        }
    });
    owl1.owlCarousel();
    $('#next1').click(function() {
        owl1.trigger('next.owl.carousel');
    });

    $('#prev1').click(function() {
        owl1.trigger('prev.owl.carousel');
    });

    var owl2 = $('.slider-2').owlCarousel({

        items:4,
        
        responsive:{
            320:{
                items:1
            },
            360:{
                items:1
            },
            768:{
                items:2
            },
            1200:{
                items:4
            }

        }
    });
    owl2.owlCarousel();
    $('#next2').click(function() {
        owl2.trigger('next.owl.carousel');
    });

    $('#prev2').click(function() {
        owl2.trigger('prev.owl.carousel');
    });

});