jQuery(document).ready(function($){
	//open-close submenu on mobile
	$('.cd-main-nav').on('click', function(event){
		if($(event.target).is('.cd-main-nav')) $(this).children('ul').toggleClass('is-visible');
	});

  var options = [
    {selector: '.iphone1', offset: 700, callback: function(el) {
    	$('.iphone1').css('visibility', 'visible');
    	$('.iphone1').addClass('animated slideInRight');
      
    } }
  ];

  var options1 = [
    {selector: '.circle_feel', offset: 300, callback: function(el) {
      $('.circle_feel').css('visibility', 'visible');
      $('.circle_feel').addClass('animated slideInDown');
      
    } }
  ];
  Materialize.scrollFire(options);
  Materialize.scrollFire(options1);
  $("#container_height").height($("#section3").height());
  $("#row_height").height($("#section3").height());
  $("#col_height").height($("#section3").height());

  $("#iphone_align").height($("#col_height").height() - ($("#needfinding_height").height() + 40 + $("#p_height").height()));
});