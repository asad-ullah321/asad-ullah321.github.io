;(function () {
	
	'use strict';

// const reviewWrap = document.getElementById("reviewWrap");
// const leftArrow = document.getElementById("leftArrow");
// const rightArrow = document.getElementById("rightArrow");
// const imgDiv = document.getElementById("imgDiv");
// const personName = document.getElementById("personName");
// const profession = document.getElementById("profession");
// const description = document.getElementById("description");


// let people = [
// 	{
// 		photo:
// 			'url("https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_960_720.jpg")',
// 		name: "Susan Smith",
// 		profession: "WEB DEVELOPER",
// 		description:
// 			"Cheese and biscuits chalk and cheese fromage frais. Cheeseburger caerphilly cheese slices chalk and cheese cheeseburger mascarpone danish fontina rubber cheese. Squirty cheese say cheese manchego jarlsberg lancashire taleggio cheese and wine squirty cheese. Babybel pecorino feta macaroni cheese brie queso everyone loves gouda. Cheese and biscuits camembert de normandie fromage fromage macaroni cheese"
// 	},

// 	{
// 		photo:
// 			"url('https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680_960_720.jpg')",
// 		name: "Anna Grey",
// 		profession: "UFC FIGHTER",
// 		description:
// 			"I'm baby migas cornhole hell of etsy tofu, pickled af cardigan pabst. Man braid deep v pour-over, blue bottle art party thundercats vape. Yr waistcoat whatever yuccie, farm-to-table next level PBR&B. Banh mi pinterest palo santo, aesthetic chambray leggings activated charcoal cred hammock kitsch humblebrag typewriter neutra knausgaard. Pabst succulents lo-fi microdosing portland gastropub Banh mi pinterest palo santo"
// 	},

// 	{
// 		photo:
// 			"url('https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg')",
// 		name: "Branson Cook",
// 		profession: "ACTOR",
// 		description:
// 			"Radio telescope something incredible is waiting to be known billions upon billions Jean-François Champollion hearts of the stars tingling of the spine. Encyclopaedia galactica not a sunrise but a galaxyrise concept of the number one encyclopaedia galactica from which we spring bits of moving fluff. Vastness is bearable only through love paroxysm of global death concept"
// 	},

// 	{
// 		photo:
// 			"url('https://cdn.pixabay.com/photo/2014/10/30/17/32/boy-509488_960_720.jpg')",
// 		name: "Julius Grohn",
// 		profession: "PROFESSIONAL CHILD",
// 		description:
// 			"Biscuit chocolate pastry topping lollipop pie. Sugar plum brownie halvah dessert tiramisu tiramisu gummi bears icing cookie. Gummies gummi bears pie apple pie sugar plum jujubes. Oat cake croissant bear claw tootsie roll caramels. Powder ice cream caramels candy tiramisu shortbread macaroon chocolate bar. Sugar plum jelly-o chocolate dragée tart chocolate marzipan cupcake gingerbread."
// 	}
// ];

// imgDiv.style.backgroundImage = people[0].photo;
// personName.innerText = people[0].name;
// profession.innerText = people[0].profession;
// description.innerText = people[0].description;
// let currentPerson = 0;

// //Select the side where you want to slide
// function slide(whichSide, personNumber) {
// 	let reviewWrapWidth = reviewWrap.offsetWidth + "px";
// 	let descriptionHeight = description.offsetHeight + "px";
// 	//(+ or -)
// 	let side1symbol = whichSide === "left" ? "" : "-";
// 	let side2symbol = whichSide === "left" ? "-" : "";

// 	let tl = gsap.timeline();

	

// 	tl.to(reviewWrap, {
// 		duration: 0.4,
// 		opacity: 0,
// 		translateX: `${side1symbol + reviewWrapWidth}`
// 	});

// 	tl.to(reviewWrap, {
// 		duration: 0,
// 		translateX: `${side2symbol + reviewWrapWidth}`
// 	});

// 	setTimeout(() => {
// 		imgDiv.style.backgroundImage = people[personNumber].photo;
// 	}, 400);
// 	setTimeout(() => {
// 		description.style.height = descriptionHeight;
// 	}, 400);
// 	setTimeout(() => {
// 		personName.innerText = people[personNumber].name;
// 	}, 400);
// 	setTimeout(() => {
// 		profession.innerText = people[personNumber].profession;
// 	}, 400);
// 	setTimeout(() => {
// 		description.innerText = people[personNumber].description;
// 	}, 400);

// 	tl.to(reviewWrap, {
// 		duration: 0.4,
// 		opacity: 1,
// 		translateX: 0
// 	});

	
// }

// function setNextCardLeft() {
// 	if (currentPerson === 3) {
// 		currentPerson = 0;
// 		slide("left", currentPerson);
// 	} else {
// 		currentPerson++;
// 	}

// 	slide("left", currentPerson);
// }

// function setNextCardRight() {
// 	if (currentPerson === 0) {
// 		currentPerson = 3;
// 		slide("right", currentPerson);
// 	} else {
// 		currentPerson--;
// 	}

// 	slide("right", currentPerson);
// }

// leftArrow.addEventListener("click", setNextCardLeft);
// rightArrow.addEventListener("click", setNextCardRight);


window.addEventListener("resize", () => {
	description.style.height = "100%";
});


	var TxtRotate = function(el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 2000;
		this.txt = '';
		this.tick();
		this.isDeleting = false;
	  };
	  
	  TxtRotate.prototype.tick = function() {
		var i = this.loopNum % this.toRotate.length;
		var fullTxt = this.toRotate[i];
	  
		if (this.isDeleting) {
		  this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
		  this.txt = fullTxt.substring(0, this.txt.length + 1);
		}
	  
		this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
	  
		var that = this;
		var delta = 300 - Math.random() * 100;
	  
		if (this.isDeleting) { delta /= 2; }
	  
		if (!this.isDeleting && this.txt === fullTxt) {
		  delta = this.period;
		  this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
		  this.isDeleting = false;
		  this.loopNum++;
		  delta = 500;
		}
	  
		setTimeout(function() {
		  that.tick();
		}, delta);
	  };
	  
	  window.onload = function() {
		var elements = document.getElementsByClassName('txt-rotate');
		for (var i=0; i<elements.length; i++) {
		  var toRotate = elements[i].getAttribute('data-rotate');
		  var period = elements[i].getAttribute('data-period');
		  if (toRotate) {
			new TxtRotate(elements[i], JSON.parse(toRotate), period);
		  }
		}
		// INJECT CSS
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = ".txt-rotate > .wrap { border-right: 0.1em solid #666; color: #2C98F0; font-weight: bold; text-decoration: underline }";
		document.body.appendChild(css);
	  };

	//   end of animation code

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};


	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};


	var counterWayPoint = function() {
		if ($('#colorlib-counter').length > 0 ) {
			$('#colorlib-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	// Animations
	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						},  k * 30, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};
	

	var burgerMenu = function() {

		$('.js-colorlib-nav-toggle').on('click', function(event){
			event.preventDefault();
			var $this = $(this);

			if ($('body').hasClass('offcanvas')) {
				$this.removeClass('active');
				$('body').removeClass('offcanvas');	
			} else {
				$this.addClass('active');
				$('body').addClass('offcanvas');	
			}
		});



	};

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#colorlib-aside, .js-colorlib-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-colorlib-nav-toggle').removeClass('active');
			
	    	}
	    	
	    }
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-colorlib-nav-toggle').removeClass('active');
			
	    	}
		});

	};

	var clickMenu = function() {

		$('#navbar a:not([class="external"])').click(function(event){
			var section = $(this).data('nav-section'),
				navbar = $('#navbar');

				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top - 55
			    	}, 500);
			   }

		    if ( navbar.is(':visible')) {
		    	navbar.removeClass('in');
		    	navbar.attr('aria-expanded', 'false');
		    	$('.js-colorlib-nav-toggle').removeClass('active');
		    }

		    event.preventDefault();
		    return false;
		});


	};

	// Reflect scrolling in navigation
	var navActive = function(section) {

		var $el = $('#navbar > ul');
		$el.find('li').removeClass('active');
		$el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		});

	};

	var navigationSection = function() {

		var $section = $('section[data-section]');
		
		$section.waypoint(function(direction) {
		  	
		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
	  		offset: '150px'
		});

		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});

	};






	var sliderMain = function() {
		
	  	$('#colorlib-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	};

	var stickyFunction = function() {

		var h = $('.image-content').outerHeight();

		if ($(window).width() <= 992 ) {
			$("#sticky_item").trigger("sticky_kit:detach");
		} else {
			$('.sticky-parent').removeClass('stick-detach');
			$("#sticky_item").trigger("sticky_kit:detach");
			$("#sticky_item").trigger("sticky_kit:unstick");
		}

		$(window).resize(function(){
			var h = $('.image-content').outerHeight();
			$('.sticky-parent').css('height', h);


			if ($(window).width() <= 992 ) {
				$("#sticky_item").trigger("sticky_kit:detach");
			} else {
				$('.sticky-parent').removeClass('stick-detach');
				$("#sticky_item").trigger("sticky_kit:detach");
				$("#sticky_item").trigger("sticky_kit:unstick");

				$("#sticky_item").stick_in_parent();
			}
			

			

		});

		$('.sticky-parent').css('height', h);

		$("#sticky_item").stick_in_parent();

	};

	var owlCrouselFeatureSlide = function() {
		$('.owl-carousel').owlCarousel({
			animateOut: 'fadeOut',
		   animateIn: 'fadeIn',
		   autoplay: true,
		   loop:true,
		   margin:0,
		   nav:true,
		   dots: false,
		   autoHeight: true,
		   items: 1,
		   navText: [
		      "<i class='icon-arrow-left3 owl-direction'></i>",
		      "<i class='icon-arrow-right3 owl-direction'></i>"
	     	]
		})
	};

	// Document on load.
	$(function(){
		fullHeight();
		counter();
		counterWayPoint();
		contentWayPoint();
		burgerMenu();

		clickMenu();
		// navActive();
		navigationSection();
		// windowScroll();
		  // Add animate class when navigation links are clicked
		 
		mobileMenuOutsideClick();
		sliderMain();
		stickyFunction();
		owlCrouselFeatureSlide();
	});


}());




