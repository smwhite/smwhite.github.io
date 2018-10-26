
// smooth scroll
$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event){
		// Check that something is there
		if (this.hash !== "") {
			// stop normal scroll
			event.preventDefault();

			var hash = this.hash;
			
			// Using jQuery's animate() method to add smooth page scroll
			$('html, body').animate({scrollTop: $(hash).offset().top}, 800, function(){
				// Add hash (#) to URL 
				window.location.hash = hash;
			});
		} 
	});
});

