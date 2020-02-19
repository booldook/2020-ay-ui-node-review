$(".navi").mouseenter(function(){
	$(this).find(".subs").stop().slideDown(300);
});
$(".navi").mouseleave(function(){
	$(this).find(".subs").stop().slideUp(300);
});