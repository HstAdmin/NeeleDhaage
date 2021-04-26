/*	Table OF Contents
	==========================
	Carousel
	Customs Script [Modal Thumb | List View  Grid View + Add to Wishlist Click Event + Others ]
	Custom Parallax 
	Custom Scrollbar
	Custom animated.css effect
	Equal height ( subcategory thumb)
	responsive fix
	*/
$(document).ready(function() {

    /*==================================
	 Custom Scrollbar for Dropdown Cart 
	====================================*/
    $(".scroll-pane").mCustomScrollbar({
        advanced: {
            updateOnContentResize: true

        },

        scrollButtons: {
            enable: false
        },

        mouseWheelPixels: "200",
        theme: "dark-2"

    });


    $(".smoothscroll").mCustomScrollbar({
        advanced: {
            updateOnContentResize: true

        },

        scrollButtons: {
            enable: false
        },

        mouseWheelPixels: "100",
        theme: "dark-2"

    });

$('.carousel').carousel({
  interval: 2000
})

jQuery('span.caret').click(function(){
jQuery(this).parent().toggleClass('open');
});

 
    //$(".dropdown").hover(            
	//function() {
		//$('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
		//$(this).toggleClass('open');
		//$('span', this).toggleClass("caret caret-up");                
	//},
	//function() {
		//$('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
		//$(this).toggleClass('open');
		//$('span', this).toggleClass("caret caret-up");                
	//});
  
    


    /*=======================================================================================
		end  
	========================================================================================*/


}); // end Ready





   