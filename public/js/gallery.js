var $grid = $('.grid').imagesLoaded(function () {
	$grid.masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true
	});
});

function onDelete(id) {
	var chk = confirm("정말로 삭제하시겠습니까? \n삭제한 데이터는 복구되지 않습니다.");
	if(chk) location.href = '/gallery/delete/'+id;
}
