var screen_width = screen.width;
var current_pos = 1;
var left = false;
var right = false;
var current = "";
var next = "";
var current_angle = 0;
var target_angle = 0;
var mouseX = 0;
var mouseY = 0;
var eyeX = 390;
var eyeY = 210;
var derX = 0;
var derY = 0;
var der_angle = 0;
window.addEventListener('mousemove', handleMouseMove, false);
$(document).ready(function(){
	$(".main").onepage_scroll({
		sectionContainer: "section",
		responsiveFallback: 600,
		loop: true
	});

	$("#page3_main").mouseleave(function(event){
		var e = event || window.event;
		if(e.clientX > screen_width/2){
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
					next = "#hack";
					break;
				case 2:
					current = "#bus";
					next = "#wifi";
					break;
				case 3:
					current = "#hack";
					next = "#bus";
					break;
				default:
					break;
			}
			current_pos -= 1;
			if(current_pos == 0)current_pos = 3;
			$(next + "_content").animate({marginLeft: "-=5%"},"fast");
			$(next + "_img").animate({marginLeft: "-=15%"},"fast",function(){
				$(current + "_content").animate({opacity:"0", marginLeft: "+=5%"},"fast");
				$(current + "_img").animate({opacity:"0", marginLeft: "+=15%"},"fast", function(){
					$(current).hide(function(){
						$(next).show();
						$(next + "_content").animate({opacity:"1", marginLeft: "+=5%"},"fast");
						$(next + "_img").animate({opacity:"1", marginLeft: "+=15%"},"fast",function(){
							$(current + "_content").animate({marginLeft: "-=5%"},"fast");
							$(current + "_img").animate({marginLeft: "-=15%"},"fast");
						});
					});
				});
			});
		}
		else if(right){
			switch(current_pos){
				case 1: 
					current = "#wifi";
					next = "#bus";
					break;
				case 2:
					current = "#bus";
					next = "#hack";
					break;
				case 3:
					current = "#hack";
					next = "#wifi";
					break;
				default:
					break;
			}
			current_pos += 1;
			if(current_pos == 4)current_pos = 1;
			$(next + "_content").animate({marginRight: "-=5%"},"fast");
			$(next + "_img").animate({marginRight: "-=15%"},"fast",function(){
				$(current + "_content").animate({opacity:"0", marginRight: "+=5%"},"fast");
				$(current + "_img").animate({opacity:"0", marginRight: "+=15%"},"fast", function(){
					$(current).hide(function(){
						$(next).show();
						$(next + "_content").animate({opacity:"1", marginRight: "+=5%"},"fast");
						$(next + "_img").animate({opacity:"1", marginRight: "+=15%"},"fast",function(){
							$(current + "_content").animate({marginRight: "-=5%"},"fast");
							$(current + "_img").animate({marginRight: "-=15%"},"fast");
						});
					});
				});
			});
		}
	});
});

function handleMouseMove(event) {
	setTimeout(function(){
		mouseX = event.clientX;
		mouseY = event.clientY;
		derX = Math.abs(mouseX - eyeX);
		derY = Math.abs(mouseY - eyeY);
		der_angle = Math.asin(parseFloat(derY)/Math.sqrt(derX*derX+derY*derY))*180/3.1415926;
		if(mouseX >= eyeX && mouseY >= eyeY)target_angle = der_angle;
		else if(mouseX >= eyeX && mouseY <= eyeY)target_angle = -der_angle;
		else if(mouseX <= eyeX && mouseY >= eyeY)target_angle = 180 - der_angle;
		else target_angle = der_angle - 180;

		$("#join_us_img").rotate({
			angle:current_angle, 
			duration: 100, 
			animateTo: target_angle 
			//callback:function(){}
		}); 
		current_angle = target_angle;
	},200);
}