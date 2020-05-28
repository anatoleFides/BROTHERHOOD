$(document).ready(function(){
	//navtab
	$('#navTab_mainMeu a').click(function (e) {
		e.preventDefault()
			$(this).tab('show')
	})
	//Tissue slider
	$("#tissue_slider").owlCarousel(
		{
		items: 1, 
		nav: true,
		loop: true,
		dots: false,	   
		pagination : true,
		//autoplay:true,
		//smartSpeed:4000,
		//autoplayTimeout:8000,  
	});
	
});