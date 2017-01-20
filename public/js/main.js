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
  /*
  $("#section4").height($(".cd-scrolling-bg.cd-color-1").height());
  $("#last_container").height($(".cd-scrolling-bg.cd-color-1").height());
  $("#last_row").height($(".cd-scrolling-bg.cd-color-1").height());
  **/

  $("#iphone_align").height($("#col_height").height() - ($("#needfinding_height").height() + 40 + $("#p_height").height()));
  

  // create the notification
var notification = new NotificationFx({

  // element to which the notification will be appended
  // defaults to the document.body
  wrapper : document.getElementById('toaster_strudel'),

  // the message
  message : '<p>Try InfoHub for yourself!</p>',

  // layout type: growl|attached|bar|other
  layout : 'other',

  // effects for the specified layout:
  // for growl layout: scale|slide|genie|jelly
  // for attached layout: flip|bouncyflip
  // for other layout: boxspinner|cornerexpand|loadingcircle|thumbslider
  // ...
  effect : 'boxspinner',

  // notice, warning, error, success
  // will add class ns-type-warning, ns-type-error or ns-type-success
  type : 'notice',

  // if the user doesn´t close the notification then we remove it 
  // after the following time
  ttl : 6000,

  // callbacks
  onClose : function() { return false; },
  onOpen : function() { return false; }

});

// show the notification
notification.show();
});