var page1_touch = false,
page2_touch = false,
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
		$("#line31").slideDown(250,function(){
			$("#photo31").fadeIn(250);
		});
	});
	$("#img31").mouseleave(function(){
		setTimeout(function(){
			$("#line31").slideUp(250,function(){
				$("#photo31").fadeOut(250);
			});
		},100);
	});
	$("#img32").mouseenter(function(){
		$("#line32").slideDown(250,function(){
			$("#photo32").fadeIn(250);
		});
	});
	$("#img32").mouseleave(function(){
		setTimeout(function(){
			$("#line32").slideUp(250,function(){
				$("#photo32").fadeOut(250);
			});
		},100);
	});
	$("#img33").mouseenter(function(){
		$("#line33").slideDown(250,function(){
			$("#photo33").fadeIn(250);
		});
	});
	$("#img33").mouseleave(function(){
		setTimeout(function(){
			$("#line33").slideUp(250,function(){
				$("#photo33").fadeOut(250);
			});
		},100);
	});
	$("#img34").mouseenter(function(){
		$("#line34").slideDown(250,function(){
			$("#photo34").fadeIn(250);
		});
	});
	$("#img34").mouseleave(function(){
		setTimeout(function(){
			$("#line34").slideUp(250,function(){
				$("#photo34").fadeOut(250);
			});
		},100);
	});
	$("#img35").mouseenter(function(){
		$("#line35").slideDown(250,function(){
			$("#photo35").fadeIn(250);
		});
	});
	$("#img35").mouseleave(function(){
		setTimeout(function(){
			$("#line35").slideUp(250,function(){
				$("#photo35").fadeOut(250);
			});
		},100);
	});
	
	$("#img41").mouseenter(function(){
		$("#line41").slideDown(250,function(){
			$("#photo41").fadeIn(250);
		});
	});
	$("#img41").mouseleave(function(){
		setTimeout(function(){
			$("#line41").slideUp(250,function(){
				$("#photo41").fadeOut(250);
			});
		},100);
	});
	$("#img42").mouseenter(function(){
		$("#line42").slideDown(250,function(){
			$("#photo42").fadeIn(250);
		});
	});
	$("#img42").mouseleave(function(){
		setTimeout(function(){
			$("#line42").slideUp(250,function(){
				$("#photo42").fadeOut(250);
			});
		},100);
	});

	$("#img51").mouseenter(function(){
		$("#line51").slideDown(250,function(){
			$("#photo51").fadeIn(250);
		});
	});
	$("#img51").mouseleave(function(){
		setTimeout(function(){
			$("#line51").slideUp(250,function(){
				$("#photo51").fadeOut(250);
			});
		},100);
	});
	$("#img52").mouseenter(function(){
		$("#line52").slideDown(250,function(){
			$("#photo52").fadeIn(250);
		});
	});
	$("#img52").mouseleave(function(){
		setTimeout(function(){
			$("#line52").slideUp(250,function(){
				$("#photo52").fadeOut(250);
			});
		},100);
	});
	$("#img53").mouseenter(function(){
		$("#line53").slideDown(250,function(){
			$("#photo53").fadeIn(250,function(){
				$("#download").fadeIn(250);
			});
		});
	});
	$("#img53").mouseleave(function(){
		setTimeout(function(){
			$("#line53").slideUp(250,function(){
				$("#photo53").fadeOut(250);
			});
		},100);
	});
	$("#img54").mouseenter(function(){
		$("#line54").slideDown(250,function(){
			$("#photo54").fadeIn(250);
		});
	});
	$("#img54").mouseleave(function(){
		setTimeout(function(){
			$("#line54").slideUp(250,function(){
				$("#photo54").fadeOut(250);
			});
		},100);
	});
	$("#img55").mouseenter(function(){
		$("#line55").slideDown(250,function(){
			$("#photo55").fadeIn(250);
		});
	});
	$("#img55").mouseleave(function(){
		setTimeout(function(){
			$("#line55").slideUp(250,function(){
				$("#photo55").fadeOut(250);
			});
		},100);
	});
	$("#download").click(function(){
		$(this).fadeOut(250);
	});
	

	$(".items3").mouseenter(function(){
		$(this).animate({width:"16px"},300);
	});
	$(".items3").mouseleave(function(){
		$(this).animate({width:"13px"},300);
	});
	$(".items4").mouseenter(function(){
		$(this).animate({width:"22px"},300);
	});
	$(".items4").mouseleave(function(){
		$(this).animate({width:"18px"},300);
	});
	$(".items5").mouseenter(function(){
		$(this).animate({width:"22px"},300);
	});
	$(".items5").mouseleave(function(){
		$(this).animate({width:"18px"},300);
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
		},800);
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