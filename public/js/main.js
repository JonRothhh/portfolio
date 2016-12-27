jQuery(document).ready(function($){
	//open-close submenu on mobile
	$('.cd-main-nav').on('click', function(event){
		if($(event.target).is('.cd-main-nav')) $(this).children('ul').toggleClass('is-visible');
	});

  var options = [
    {selector: '.iPhone', offset: 500, callback: function(el) {
    	$('.iPhone').css('visibility', 'visible');
    	$('.iPhone').addClass('animated slideInRight');
      
    } }
  ];
  Materialize.scrollFire(options);
});