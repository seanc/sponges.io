$(function() {
  smoothScroll(300);
  mobileNav();
<<<<<<< HEAD
  $().loadRepositories('sponges');
=======
  modalOpen();
  modalClose();
>>>>>>> master
});



function mobileNav() {
  $('.mobile-nav-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
    else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
  });
}



function smoothScroll(duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

function modalOpen() {
	
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );
	    $(target).css('display', 'flex');
		return false;
		
	    
	});
}

function modalClose() {
	$('.close').click(function() {
		$('.modal-overlay').hide();
		return false;
	});
}