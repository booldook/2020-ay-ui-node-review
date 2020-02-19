$(".top-wrap").mouseenter(function(){
	$(this).find(".sub-wrap").stop().slideDown(300).css({"display":"flex"});
});
$(".top-wrap").mouseleave(function(){
	$(this).find(".sub-wrap").stop().slideUp(300);
});