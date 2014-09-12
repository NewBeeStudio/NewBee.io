var page1_touch = false,
page2_touch = false,
page3_touch = false,
page4_touch = false,
page5_touch = false,
page6_touch = false,
$main = $( '#pt-main' ),
$pages = $main.children( 'div.pt-page' ),
pagesCount = $pages.length,
current = 0,
isAnimating = false,
endCurrPage = false,
endNextPage = false,
animEndEventNames = {
	'WebkitAnimation' : 'webkitAnimationEnd',
	'OAnimation' : 'oAnimationEnd',
	'msAnimation' : 'MSAnimationEnd',
	'animation' : 'animationend'
},
// animation end event name
animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
// support css animations
support = Modernizr.cssanimations;

$(document).ready(function(){
	$pages.each( function() {
		var $page = $( this );
		$page.data( 'originalClassList', $page.attr( 'class' ) );
	} );
	$pages.eq( current ).addClass( 'pt-page-current' );

	$("#logo_blue").mouseenter(function(){
		if(!page1_touch){
			page1_touch = true;
			$("#page1_up").animate({height:"0"},700,function(){
				setTimeout(function(){
					$("#up_edge").animate({height:"3%"},300,function(){
						setTimeout(function(){
							$("#up_edge").animate({height:"0"},600);
						},100);
					});
				},0);
			});
			$("#page1_down").animate({height:"0"},700,function(){
				setTimeout(function(){
					$("#down_edge").animate({height:"3%"},300,function(){
						setTimeout(function(){
							$("#down_edge").animate({height:"0"},600);
						},100);
					});
				},0);
			});
			$("#logo_blue").fadeTo(600,0.3,function(){
				setTimeout(function(){
					$("#logo_blue").fadeTo(300,0.7,function(){
						setTimeout(function(){
							$("#logo_blue").fadeTo(700,0);
						},100);
					});
				},0);
			});
			$("#logo_tran").fadeTo(600,0.7,function(){
				setTimeout(function(){
					$("#logo_tran").fadeTo(300,0.3,function(){
						setTimeout(function(){
							$("#logo_tran").fadeTo(700,1);
						},100);
					});
				},0);
			});
			setTimeout(function(){
				$("#previous1").show();
				$("#next1").show();
				$("#previous1").fadeTo(800,0.4);
				$("#next1").fadeTo(800,0.4);
			},1500);




		}
	});

	$("#img31").mouseenter(function(){
		$("#line31").slideDown(150,function(){
			$("#photo31").fadeIn(150);
		});
	});
	$("#img31").mouseleave(function(){
		$("#line31").slideUp(150,function(){
			$("#photo31").fadeOut(150);
		});
	});
	$("#img32").mouseenter(function(){
		$("#line32").slideDown(150,function(){
			$("#photo32").fadeIn(150);
		});
	});
	$("#img32").mouseleave(function(){
		$("#line32").slideUp(150,function(){
			$("#photo32").fadeOut(150);
		});
	});
	$("#img33").mouseenter(function(){
		$("#line33").slideDown(150,function(){
			$("#photo33").fadeIn(150);
		});
	});
	$("#img33").mouseleave(function(){
		$("#line33").slideUp(150,function(){
			$("#photo33").fadeOut(150);
		});
	});
	$("#img34").mouseenter(function(){
		$("#line34").slideDown(150,function(){
			$("#photo34").fadeIn(150);
		});
	});
	$("#img34").mouseleave(function(){
		$("#line34").slideUp(150,function(){
			$("#photo34").fadeOut(150);
		});
	});
	$("#img35").mouseenter(function(){
		$("#line35").slideDown(150,function(){
			$("#photo35").fadeIn(150);
		});
	});
	$("#img35").mouseleave(function(){
		$("#line35").slideUp(150,function(){
			$("#photo35").fadeOut(150);
		});
	});
	
	$("#img41").mouseenter(function(){
		$("#line41").slideDown('slow',function(){
			$("#photo41").fadeIn('slow');
		});
	});
	$("#img41").mouseleave(function(){
		$("#line41").slideUp('slow',function(){
			$("#photo41").fadeOut('slow');
		});
	});
	$("#img42").mouseenter(function(){
		$("#line42").slideDown('slow',function(){
			$("#photo42").fadeIn('slow');
		});
	});
	$("#img42").mouseleave(function(){
		$("#line42").slideUp('slow',function(){
			$("#photo42").fadeOut('slow');
		});
	});

	$("#img51").mouseenter(function(){
		$("#line51").slideDown('slow',function(){
			$("#photo51").fadeIn('slow');
		});
	});
	$("#img51").mouseleave(function(){
		$("#line51").slideUp('slow',function(){
			$("#photo51").fadeOut('slow');
		});
	});
	$("#img52").mouseenter(function(){
		$("#line52").slideDown('slow',function(){
			$("#photo52").fadeIn('slow');
		});
	});
	$("#img52").mouseleave(function(){
		$("#line52").slideUp('slow',function(){
			$("#photo52").fadeOut('slow');
		});
	});
	$("#img53").mouseenter(function(){
		$("#line53").slideDown('slow',function(){
			$("#photo53").fadeIn('slow');
		});
	});
	$("#img53").mouseleave(function(){
		$("#line53").slideUp('slow',function(){
			$("#photo53").fadeOut('slow');
		});
	});
	$("#img54").mouseenter(function(){
		$("#line54").slideDown('slow',function(){
			$("#photo54").fadeIn('slow');
		});
	});
	$("#img54").mouseleave(function(){
		$("#line54").slideUp('slow',function(){
			$("#photo54").fadeOut('slow');
		});
	});
	$("#img55").mouseenter(function(){
		$("#line55").slideDown('slow',function(){
			$("#photo55").fadeIn('slow');
		});
	});
	$("#img55").mouseleave(function(){
		$("#line55").slideUp('slow',function(){
			$("#photo55").fadeOut('slow');
		});
	});
	

	$(".items").mouseenter(function(){
		$(this).animate({width:"16px"},300);
	});
	$(".items").mouseleave(function(){
		$(this).animate({width:"13px"},300);
	});

	$(".previous").mouseenter(function(){
		$(this).css("opacity","0.9");
	});
	$(".previous").mouseleave(function(){
		$(this).css("opacity","0.4");
	});
	$(".previous").click(function() {
		if( isAnimating ) {
			return false;
		}
		nextPage(false);
	});
	$(".next").mouseenter(function(){
		$(this).css("opacity","0.9");
	});
	$(".next").mouseleave(function(){
		$(this).css("opacity","0.4");
	});
	$(".next").click(function() {
		if( isAnimating ) {
			return false;
		}
		nextPage(true);
	});
});
function nextPage( direction ) {

	if( isAnimating ) {
		return false;
	}

	isAnimating = true;

	var $currPage = $pages.eq( current );

	if(direction){
		if( current < pagesCount - 1 ) {
			++current;
		}
		else {
			current = 0;
		}

		var $nextPage = $pages.eq( current ).addClass( 'pt-page-current' ),
		outClass = 'pt-page-moveToLeftFade', inClass = 'pt-page-moveFromRightFade';

		$currPage.addClass( outClass ).on( animEndEventName, function() {
			$currPage.off( animEndEventName );
			endCurrPage = true;
			if( endNextPage ) {
				onEndAnimation( $currPage, $nextPage );
			}
		} );

		$nextPage.addClass( inClass ).on( animEndEventName, function() {
			$nextPage.off( animEndEventName );
			endNextPage = true;
			if( endCurrPage ) {
				onEndAnimation( $currPage, $nextPage );
			}
		} );

		if( !support ) {
			onEndAnimation( $currPage, $nextPage );
		}
	}
	else{
		if( current > 0 ) {
			--current;
		}
		else {
			current = pagesCount - 1;
		}

		var $nextPage = $pages.eq( current ).addClass( 'pt-page-current' ),
		outClass = 'pt-page-moveToRightFade', inClass = 'pt-page-moveFromLeftFade';

		$currPage.addClass( outClass ).on( animEndEventName, function() {
			$currPage.off( animEndEventName );
			endCurrPage = true;
			if( endNextPage ) {
				onEndAnimation( $currPage, $nextPage );
			}
		} );

		$nextPage.addClass( inClass ).on( animEndEventName, function() {
			$nextPage.off( animEndEventName );
			endNextPage = true;
			if( endCurrPage ) {
				onEndAnimation( $currPage, $nextPage );
			}
		} );

		if( !support ) {
			onEndAnimation( $currPage, $nextPage );
		}
	}

	if(current == 1&&!page2_touch){
		page2_touch = true;
		setTimeout(function(){
			$("#logo_v").fadeIn(1000);
			setTimeout(function(){
				$("#previous2").show();
				$("#next2").show();
				$("#previous2").fadeTo(800,0.4);
				$("#next2").fadeTo(800,0.4);
			},600);
		},1200);
	}

	if(current == 2&&!page3_touch){
		page3_touch = true;
		setTimeout(function(){
			$("#logo_v").fadeIn(1000);
			setTimeout(function(){
				$("#previous3").show();
				$("#next3").show();
				$("#previous3").fadeTo(800,0.4);
				$("#next3").fadeTo(800,0.4);
			},600);
		},1200);
	}

	if(current == 3&&!page4_touch){
		page4_touch = true;
		setTimeout(function(){
			$("#logo_v").fadeIn(1000);
			setTimeout(function(){
				$("#previous4").show();
				$("#next4").show();
				$("#previous4").fadeTo(800,0.4);
				$("#next4").fadeTo(800,0.4);
			},600);
		},1200);
	}

	if(current == 4&&!page5_touch){
		page5_touch = true;
		setTimeout(function(){
			$("#logo_v").fadeIn(1000);
			setTimeout(function(){
				$("#previous5").show();
				$("#next5").show();
				$("#previous5").fadeTo(800,0.4);
				$("#next5").fadeTo(800,0.4);
			},600);
		},1200);
	}
}

function onEndAnimation( $outpage, $inpage ) {
	endCurrPage = false;
	endNextPage = false;
	resetPage( $outpage, $inpage );
	isAnimating = false;
}

function resetPage( $outpage, $inpage ) {
	$outpage.attr( 'class', $outpage.data( 'originalClassList' ) );
	$inpage.attr( 'class', $inpage.data( 'originalClassList' ) + ' pt-page-current' );
}