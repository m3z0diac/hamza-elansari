$(function(){



	var i = 0;
	var txt1 = "Hi I\'am Hamza Elansari";
	var txt2 = "Full stack web developer, Penetration tester";
	var txt3 = "\" in GOD we trust, the rest we test \" - Hamza Elansari";
	var speed = 70;
	function typeWriter() {
	  if (i < txt3.length) {
	    document.getElementById("homeheader1").innerHTML += txt1.charAt(i);
	    document.getElementById("quate").innerHTML += txt3.charAt(i);
	    i++;
	    setTimeout(typeWriter, speed);
	  }
	}
	if (document.getElementById("homeheader1").innerHTML.length == 0) {
		typeWriter();
	};


	function about(){

		$(".about img").animate({
			left: '0px',
		},1000);

		$("p").show(1000);
	}

    var height = $(window).height();
	var nav = $('nav').height();
	var finalheight =height-nav;
	$(".header").css("height",height+20+"px");


	about();

	$(".projects .project").animate({
		left: '0px'
	}, 2000);


	$(".navbar-default li").click(
		function(){
			$(this).addClass("active").siblings().removeClass("active") ;
		}
	);


    $(window).scroll(_ =>
    {
	    if($(window).scrollTop() >= 50)
	    {
	        $(".navbar-default").addClass("nav-shadow");
	        $(".navbar-default").addClass("set-bg");
	        
	    }
	    else
	    {
			$(".navbar-default").removeClass("nav-shadow");
	        $(".navbar-default").removeClass("set-bg");
	    }
    })

    $(".navbar-default li #skills-link").click(function(){

    	$(".HTML5").animate({width:'0%'},0);
    	$(".CSS3").animate({width:'0%'},0);
    	$(".Bootstrap").animate({width:'0%'},0);
    	$(".php").animate({width:'0%'},0);
    	$(".MySql").animate({width:'5%'},0);
    	$(".jQuery").animate({width:'0%'},0);
    	$(".dotenet").animate({width:'0%'},0);


    	$(".HTML5").animate({width:'90%'},3000);
    	$(".CSS3").animate({width:'80%'},2500);
    	$(".Bootstrap").animate({width:'70%'},2000);
    	$(".php").animate({width:'90%'},3000);
    	$(".MySql").animate({width:'95%'},3400);
    	$(".jQuery").animate({width:'60%'},1500);
    	$(".dotenet").animate({width:'55%'},1400);
    });

    $(".navbar-default li #about-link").click(function(){
    	$(".about img").fadeOut(0);
    	$(".about img").fadeIn(1000);
   });

    $(".navbar > .container .navbar-brand").click(function(){
    	$(this).addClass("active");
    	$(".navbar-default li").removeClass("active");
    });

    $(".navbar-default li #services-link").click(function(){
    	$(".services .service").css("left","-500px");
    	$(".services #s-one").animate({left: '0px'},2000);
    	$(".services #s-two").animate({left: '0px'},1500);
    	$(".services #s-three").animate({left: '0px'},1000);
    });

    $(".navbar-default li #blog-link").click(function(){
    	$(".blog .articles .article").css("right","-500px");
    	$(".blog .articles #b-one").animate({right: '0px'},2000);
    	$(".blog .articles #b-two").animate({right: '0px'},1500);
    	$(".blog .articles #b-three").animate({right: '0px'},1000);
    });

    var imgwidth = $(".cyber-sec img").width();
    $(".cyber-sec .img-c").css("width",imgwidth+"px")

});