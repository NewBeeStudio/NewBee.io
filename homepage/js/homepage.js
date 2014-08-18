$(document).ready(function() {
	$('#myCarousel').carousel('cycle');
});

$(document).ready(function() {
	var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRightfadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
	$('#page_newbee').textillate({
		in:{
			delay: 400,
			effect: 'flipInY'
		}
	});
	$('#page_studio').textillate({
		in:{
			delay: 400,
			effect: 'flipInY'
		}
	});
	$('#en_newbee').textillate({
		in:{
			delay: 100,
			shuffle: true,
			effect: 'flipInX'
		}
	});
	$('#open').textillate({
		initialDelay: 800,
		in:{
			delay: 100,
			effect: 'rotateInDownLeft'
		}
	});
	$('#innovation').textillate({
		initialDelay: 800,
		in:{
			delay: 100,
			effect: 'rotateInDownRight'
		}
	});
	$('#agile').textillate({
		initialDelay: 1200,
		in:{
			delay: 100,
			effect: 'rotateInDownLeft'
		}
	});
	$('#unity').textillate({
		initialDelay: 1200,
		in:{
			delay: 100,
			effect: 'rotateInDownRight'
		}
	});
});

$(document).ready(function(){
	setTimeout(function(){
		$('#learn_more').fadeIn();
	},1500);
});