jQuery(document).ready(function($){
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
        changeNavColor();
        changeHeaderColor();
        arrowChange();
        revertHeader();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //smooth scroll to the portfolio section from portfolio nav
	$('#portfolio_link').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //smooth scroll back to top
      $('#title1').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //smooth scroll to contact me section
      $('#contact_link').on('click', function(event){
        event.preventDefault();
        smoothScroll1($(this.hash));
    });




    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');
  
    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
                $('activeSection .cd-label').css('color','#0097a7');

			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

    function changeNavColor() {
        contentSections.each(function(){
            $this = $('#section5'); 
            var button = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
            if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
                navigationItems.eq(button).addClass('is-selected1');
                $('.cd-label').css('color','#546e7a');
                $('#final_ID').css('color','#0097a7');
            } else {
                navigationItems.eq(button).removeClass('is-selected1');
                $('.cd-label').css('color','white');
            }
        });
    };

    function changeHeaderColor() {
        contentSections.each(function(){
                $this = $('#section1'); 
                if ($(window).scrollTop() >= $('.cd-fixed-bg.cd-bg-1').height() - 70) {
                    $('.cd-header').addClass('menuColorChange');
                    $('.cd-main-nav a').addClass('hvr-bounce-to-bottom1 link_color_change');
                    $('#portfolio_link').focus();
                    $('#title1').css('color','#fff');
                } else {
                    $('.cd-header').removeClass('menuColorChange');
                    $('.cd-main-nav a').removeClass('link_color_change');
                    $('.cd-main-nav a').removeClass('hvr-bounce-to-bottom1');
                    $('#title1').css('color','#546e7a');
                    $('#portfolio_link').blur();
                }
            });
        };

    function arrowChange() {
        contentSections.each(function(){
                 if ($(window).scrollTop() >= $('.cd-main-content').height() + $('.cd-scrolling-bg.cd-color-2').height() + $('.cd-fixed-bg.cd-bg-2').height() + $('.cd-scrolling-bg.cd-color-3').height() 
                        + $('.cd-fixed-bg.cd-bg-3').height() + $('.cd-scrolling-bg.cd-color-1').height() + ($('.cd-fixed-bg.cd-bg-4').height() * .45) - 70) {
                    $('.arrow').addClass('out');
                } else {
                    $('.arrow').removeClass('out');

                }
            });
        };

    function revertHeader() {
        contentSections.each(function(){
                $this = $('#section1'); 
                if ($(window).scrollTop() >= $('.cd-main-content').height() + $('.cd-scrolling-bg.cd-color-2').height() + $('.cd-fixed-bg.cd-bg-2').height() + $('.cd-scrolling-bg.cd-color-3').height() 
                        + $('.cd-fixed-bg.cd-bg-3').height() + $('.cd-scrolling-bg.cd-color-1').height() + ($('.cd-fixed-bg.cd-bg-4').height()) - 70) {

                    $('.cd-header').removeClass('menuColorChange');
                    $('.cd-main-nav a').removeClass('link_color_change');
                    $('.cd-main-nav a').removeClass('hvr-bounce-to-bottom1');
                    $('#title1').css('color','#546e7a');
                    $('#portfolio_link').blur();
                    /*
                    $('#github_icon').hover(
                        function() {
                           $('#github_icon').append('<h4>hello world</h4>');
                        }); **/
                };
            });
        };

        //linkedin icon effect
     $('#linkedin_icon').mouseenter(function() {
            $('#linkedin_text').fadeTo(400,1);
            $("#linkedin_text").addClass('hover');
        });
     $('#linkedin_icon').mouseleave(function() {
            $("#linkedin_text").removeClass('hover');
            $('#linkedin_text').fadeTo(200,0);
        });

         //email icon effect
     $('#mail_icon').mouseenter(function() {
            $('#email_text').fadeTo(400,1);
            $("#email_text").addClass('hover');
        });
     $('#mail_icon').mouseleave(function() {
            $("#email_text").removeClass('hover');
            $('#email_text').fadeTo(200,0);
        });

         //github icon effect
     $('#github_icon').mouseenter(function() {
            $('#github_text').fadeTo(400,1);
            $("#github_text").addClass('hover');
        });
     $('#github_icon').mouseleave(function() {
            $("#github_text").removeClass('hover');
            $('#github_text').fadeTo(200,0);
        });



	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top - 70},
        	600
        );

	};

    function smoothScroll1(target) {
        $('body,html').animate(
            {'scrollTop':target.offset().top},
            600
        );

    }
});