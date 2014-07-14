$(document).ready(function() {
  $('.ryu')
  	.mouseenter(
  		function() {
    		$('.ryu-still').hide();
    		$('.ryu-ready').show();
  		})
  	.mouseleave(
  		function() {
    		$('.ryu-ready').hide();
    		$('.ryu-still').show();
  		})
  	.mousedown(
  		function() {
			playHadouken();    
    		$('.ryu-ready').hide();
    		$('.ryu-throwing').show();
    		$('.hadouken').finish().show()
  			.animate(
  				{'left': '780px', 'top': '267px'},
  				350,
  				function() {
  				  $(this).hide();
  				  $(this).css({'left':'483px', 'top':'355px'});
  				}
  			);
  		})
  	.mouseup(
  		function() {
  	  		$('.ryu-throwing').hide();
  	  		$('.ryu-ready').show();
  		});
 }); 	

$(document)
 	.keydown(
  		function(e) {
    		if (e.keyCode == 88) {
  	  			$('.ryu-still').hide();
 				$('.ryu-ready').hide();
 	  			$('.ryu-cool').show();
        	}
    	})

	.keyup(
 		function(e) {
     		if (e.keyCode == 88) {
				if ($('.ryu').is(':hover')) {	
					$('.ryu-ready').show();
					$('.ryu-cool').hide();
				} 
				else {
					$('.ryu-cool').hide();
					$('.ryu-still').show();
				}
				}
			
 		});
 	

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.4;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}


  	
