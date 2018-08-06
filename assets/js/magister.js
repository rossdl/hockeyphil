// global. currently active menu item 
var current_item = 0;

// few settings
var section_hide_time = 500;
var section_show_time = 500;

// jQuery stuff
jQuery(document).ready(function ($) {

    // support iOS
    $('[data-toggle=dropdown]').each(function () {
        this.addEventListener('click', function () { }, false);
    });


    //$("#theme li a").click(function () {

    //    var lnk = $(this);

    //    $(".section:visible").fadeOut(section_hide_time, function () {
    //        $(lnk.attr("href")).fadeIn(section_show_time);
    //    });
    //});


	// Switch section
    $("a", '.mainmenu').click(function ()
    {
		if( ! $(this).hasClass('active') ) { 
		    current_item = this;


			// close all visible divs with the class of .section
			$('.section:visible').fadeOut( section_hide_time, function() { 
				$('a', '.mainmenu').removeClass( 'active' );  
				$(current_item).addClass( 'active' );
				var new_section = $( $(current_item).attr('href') );
				new_section.fadeIn( section_show_time );
			} );
		}

        return false;  // keeps dropdown open
		//return true;
	});		

	//$("#sch-btn").click(function() 
	//{
	//	if( ! $(this).hasClass('active') ) { 
	//		current_item = this;
	//		// close all visible divs with the class of .section
	//		$('.section:visible').fadeOut( section_hide_time, function() { 
	//			$('a', '.mainmenu').removeClass( 'active' );  
	//			$(current_item).addClass( 'active' );
	//			var new_section = $( $(current_item).attr('href') );
	//			new_section.fadeIn( section_show_time );
	//		} );
	//	}
	//	return false;
	//});		
});