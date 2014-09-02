var screen_width = screen.width;
var current_pos = 1;
var left = false;
var right = false;
var current = "";
var next = "";
$(document).ready(function(){
	$(".main").onepage_scroll({
		sectionContainer: "section",
		responsiveFallback: 600,
		loop: true
	});

	$("#page3_main").mouseleave(function(event){
		var e = event || window.event;
		if(e.screenX > screen_width/2){
			$("#right_pro").fadeTo("fast",0.85);
			right = true;
		}
		else{
			$("#left_pro").fadeTo("fast",0.85);
			left = true;
		}
	});
	$("#page3_main").mouseenter(function(){
		$("#right_pro").fadeTo("fast",0.15);
		$("#left_pro").fadeTo("fast",0.15);
		left = false;
		right = false;
	});
	$("#page3_left").mouseenter(function(){
		$("#left_pro").fadeTo("fast",0.85);
		left = true;
	});
	$("#page3_right").mouseenter(function(){
		$("#right_pro").fadeTo("fast",0.85);
		right = true;
	});

	$(".page3").click(function(){
		if(left){
			switch(current_pos){
				case 1: 
					current = "#wifi";
					break;
				case 2:
					current = "#bus";
					break;
				case 3:
					current = "#hack";
					break;
				default:
					break;
			}
			current_pos -= 1;
			if(current_pos == 0)current_pos = 3;
			switch(current_pos){
				case 1: 
					next = "#wifi";
					break;
				case 2:
					next = "#bus";
					break;
				case 3:
					next = "#hack";
					break;
				default:
					break;
			}
			$(current + "_content").animate({opacity:"0", marginLeft: "+=5%"},"100");
			$(current + "_img").animate({opacity:"0", marginLeft: "+=15%"},"100", function(){
				$(current).hide(function(){
					$(current + "_content").animate({marginLeft: "-=5%"});
					$(current + "_img").animate({marginLeft: "-=15%"});
					$(next).show();
					$(next + "_content").animate({marginLeft: "-=5%"});
					$(next + "_img").animate({marginLeft: "-=15%"});
					$(next + "_content").animate({opacity:"1", marginLeft: "+=5%"},"100");
					$(next + "_img").animate({opacity:"1", marginLeft: "+=15%"},"100");
				});
			});
		}
		else if(right){
			switch(current_pos){
				case 1: 
					current = "#wifi";
					break;
				case 2:
					current = "#bus";
					break;
				case 3:
					current = "#hack";
					break;
				default:
					break;
			}
			current_pos += 1;
			if(current_pos == 4)current_pos = 1;
			switch(current_pos){
				case 1: 
					next = "#wifi";
					break;
				case 2:
					next = "#bus";
					break;
				case 3:
					next = "#hack";
					break;
				default:
					break;
			}
			$(current + "_content").animate({opacity:"0", marginRight: "+=5%"},"100");
			$(current + "_img").animate({opacity:"0", marginRight: "+=15%"},"100", function(){
				$(current).hide(function(){
					$(current + "_content").animate({marginRight: "-=5%"});
					$(current + "_img").animate({marginRight: "-=15%"});
					$(next).show();
					$(next + "_content").animate({marginRight: "-=5%"});
					$(next + "_img").animate({marginRight: "-=15%"});
					$(next + "_content").animate({opacity:"1", marginRight: "+=5%"},"100");
					$(next + "_img").animate({opacity:"1", marginRight: "+=15%"},"100");
				});
			});
		}
	});

	setInterval(function(){
		$("#join_us_img").rotateRight(45);
	},2000);
});