
;
function setSectionHeight() {
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();	

	// console.log("windowWidth: "+windowHeight);
	// console.log("overlay width: "+windowHeight);

	var aboutHeight = parseInt($("#about article").css("height"), 10)+100;
	var aug_Height = parseInt($("#augmentation-spa article").css("height"), 10)+300;
	var car_Height = parseInt($("#caring-machines article").css("height"), 10)+300;
	var uae_Height = parseInt($("#uae-hypermind article").css("height"), 10)+300;
	var evn_Height = parseInt($("#registration-form #eventzilla-iframe").css("height"),10)+500;
	var mus_Height = parseInt($("#museum-tour article").css("height"), 10)+0;
	// console.log(aboutHeight);

	if(windowWidth > windowHeight)
	{
		$("#cover").css({
			"background": "none",
			"width" : windowWidth,
			"min-height" : windowHeight+10+"px",
		});
		
		$(".overlay").css({
			"width" : windowWidth,
			"height" : windowHeight,
		});
		

		$("#about").css("height", aboutHeight);

	
		$('#augmentation-spa').css({
			"height" : aug_Height,
			"width" : windowWidth,
		});

		$('#caring-machines').css({
			"height" : car_Height,
			"width" : windowWidth,
		});

		$('#uae-hypermind').css({
			"height" : uae_Height,
			"width" : windowWidth,
		});				

		$('#registration-form').css({
			"height" : evn_Height,
			"width" : windowWidth,
		});		

		$('#registration-form #eventzilla-iframe').css({
			"top" : "100px",
			"height" : evn_Height,
			"width" : windowWidth,
		});		
		
		$('#museum-tour').css({
			"height" : mus_Height,
		});

		$('#map').css({
			"height" : windowHeight,
		});

	}else{


		$('svg').css({
			"min-height": "100%", 
			"min-width": "100%",
		});

	}
}


var firsTime = false;

function showDifferentPatterns() {		
		var height = $(window).height();
		var scroll =  $(window).scrollTop();
		// console.log("scroll: "+scroll);
		// console.log("height: "+height);

		var titleFrame = $('.title-frame');
		// var title1 = $('.title-frame.1');
		// var title2 = $('.title-frame.2');
		// var title3 = $('.title-frame.3');
	// console.log( $('.title-frame.3') );
	// console.log( "height:" + title3.height() );

	// console.log("title1: "+title1.position().top);
	// console.log("title2: "+title2.position().top);
	// console.log("title3: "+title3.position().top);

	var n = 1; //for landpage always assume  n = 1
	

	// if ( scroll > title1.position().top && scroll <= title1.position().top + $(window).height() ) {
	// 	n = 1;
	// } else if ( scroll > title2.position().top  && scroll <= title2.position().top + $(window).height() ) {
	// 	n = 2;
	// } else if ( scroll > title3.position().top && scroll <= title3.position().top + $(window).height() ) {
	// 	n = 3;
	// } else {
	// 	n = 0;
	// }




	// console.log("n: "+n);
	// console.log("a: "+a);


	$('svg#'+ n).css({
		"display" : "block",
	});

	$('svg:not(#'+n+')').css({
		"display" : "none",
	});

	// show svg already when devider starts to be revealed

	var a = 0; //divider already revealed, but not fully revealed yet

	// if (scroll > title2.position().top - height && scroll <= title2.position().top){
	// 	n = 2; 
	// 	a = 1;
	// }else if (scroll > title3.position().top - height && scroll <= title3.position().top){
	// 	n = 3; 
	// 	a = 1;
	// }else{
	// 	a = 0;
	// }

	// if(a==1){
	// 	$('svg#'+ n).css({
	// 	"display" : "block",
	// 	"z-index" : "-1",
	// 	});

	// }

}

$(document).ready( function() {
	setSectionHeight();


	var dashOffset = $(".path").css("stroke-dashoffset");
	


	$(window).scroll(function() {
		showDifferentPatterns();


	  var percentageComplete = (($(window).scrollTop() / $(window).height()) * 100);
	  
	  if( percentageComplete > 100 ) {
	  	percentageComplete =  percentageComplete - ( Math.floor(percentageComplete/100) * 100 );
	  }

	  // console.log("percent: "+percentageComplete);

	  var initUnit = parseInt(dashOffset, 10);
	  var offsetUnit = percentageComplete * (initUnit / 100) * 2 ;
	  // var offsetUnit = 150;

	  // console.log("offsetUnit: "+offsetUnit);

	  $(".path").css("stroke-dashoffset", initUnit - offsetUnit);

	  var num = initUnit-offsetUnit;
		// console.log("stroke: "+num);
		// console.log("--------");

	});

	window.onresize = function(event) {
    setSectionHeight();
	};

});

// $(document).resize(function() {

// 	setSectionHeight();
// });

