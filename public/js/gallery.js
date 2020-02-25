var $grid = $('.grid').imagesLoaded(function () {
	$grid.masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true
	});
});