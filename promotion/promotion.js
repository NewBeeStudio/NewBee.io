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
			$(current+"img").animate({left:"30%"},"slow");
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
			$(current).fadeOut("slow",function(){
				$(next).fadeIn("slow");
			});
		}
	});
});