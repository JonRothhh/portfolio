jQuery(document).ready(function($){
	//open-close submenu on mobile
	$('.cd-main-nav').on('click', function(event){
		if($(event.target).is('.cd-main-nav')) $(this).children('ul').toggleClass('is-visible');
	});


  var options = [
    {selector: '.iphone1', offset: 300, callback: function(el) {
    	$('.iphone1').css('visibility', 'visible');
    	$('.iphone1').addClass('animated slideInLeft');
    }},
    {selector: '#paragraph_intro', offset: 300, callback: function(el) {
      $('#paragraph_intro').css('visibility', 'visible');
      $('#paragraph_intro').addClass('animated slideInRight');
    }},
    {selector: '#iphone_align', offset: 300, callback: function(el) {
      $('#iphone_align').css('visibility', 'visible');
      $('#iphone_align').addClass('animated slideInUp');
    }},
    {selector: '.cd-fixed-bg.cd-bg-4', offset: 250, callback: function(el) {
            // create the notification
    var notification = new NotificationFx({

      // element to which the notification will be appended
      // defaults to the document.body
      wrapper : document.getElementById('toaster_strudel'),

      // the message
      message : '<span style="font-size: 3em;margin-left: -13px; margin-top: 17px;" class="icon li_bubble"></span><p>Enough of my rambling. Try InfoHub out for yourself below!</p>',

      // layout type: growl|attached|bar|other
      layout : 'bar',

      // effects for the specified layout:
      // for growl layout: scale|slide|genie|jelly
      // for attached layout: flip|bouncyflip
      // for other layout: boxspinner|cornerexpand|loadingcircle|thumbslider
      // ...
      effect : 'slidetop',

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
          
    }}
  ];


  Materialize.scrollFire(options);

  $("#container_height").height($("#section3").height());
  $("#row_height").height($("#section3").height());
  $("#col_height").height($("#section3").height());
  /*
  $("#section4").height($(".cd-scrolling-bg.cd-color-1").height());
  $("#last_container").height($(".cd-scrolling-bg.cd-color-1").height());
  $("#last_row").height($(".cd-scrolling-bg.cd-color-1").height());
  **/


$(document).ready(function() {

  $("#iphone_align").height($("#col_height").height() - ($("#needfinding_height").height() + $("#p_height").height()));

  $(window).resize(function() {
     $("#iphone_align").height($(".cd-scrolling-bg.cd-color-3").height() - ($("#needfinding_height").height() + $("#p_height").height()));
  });
});


}); /*the end bracket**/



