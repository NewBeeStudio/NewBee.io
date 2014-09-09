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
			$("#page1_up").animate({height:"0"},1000,function(){
				setTimeout(function(){
					$("#up_edge").animate({height:"8%"},500,function(){
						setTimeout(function(){
							$("#up_edge").animate({height:"0"},700);
						},200);
					});
				},300);
			});
			$("#page1_down").animate({height:"0"},1000,function(){
				setTimeout(function(){
					$("#down_edge").animate({height:"8%"},500,function(){
						setTimeout(function(){
							$("#down_edge").animate({height:"0"},700);
						},200);
					});
				},300);
			});
			$("#logo_blue").fadeTo(900,0.3,function(){
				setTimeout(function(){
					$("#logo_blue").fadeTo(400,0.7,function(){
						setTimeout(function(){
							$("#logo_blue").fadeTo(900,0);
						},200);
					});
				},300);
			});
			$("#logo_tran").fadeTo(900,0.7,function(){
				setTimeout(function(){
					$("#logo_tran").fadeTo(400,0.3,function(){
						setTimeout(function(){
							$("#logo_tran").fadeTo(900,1);
						},200);
					});
				},300);
			});
			setTimeout(function(){
				$("#previous1").show();
				$("#next1").show();
				$("#previous1").animate({opacity:"0.6",top:"-=2%"},1000);
				$("#next1").animate({opacity:"0.6",top:"-=2%"},1000);
			},2500);
		}
	});

	$(".pt-touch-button").mouseenter(function(){
		$(this).css("opacity","0.9");
	});
	$(".pt-touch-button").mouseleave(function(){
		$(this).css("opacity","0.6");
	});
	$(".next").click(function() {
		if( isAnimating ) {
			return false;
		}
		nextPage(true);
	});
	$(".previous").click(function() {
		if( isAnimating ) {
			return false;
		}
		nextPage(false);
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
			$("#logo_v").fadeIn(2000,function(){
				$("#previous2").show();
				$("#next2").show();
				$("#previous2").animate({opacity:"0.6",top:"-=2%"},1000);
				$("#next2").animate({opacity:"0.6",top:"-=2%"},1000);
			});
		},2000);
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