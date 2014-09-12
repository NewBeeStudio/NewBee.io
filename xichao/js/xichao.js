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
		$("#photo31").fadeIn('slow');
	});
	$("#img31").mouseleave(function(){
		$("#photo31").fadeOut('slow');
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