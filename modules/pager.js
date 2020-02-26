// page: 요청한 페이지
// total: 전체 게시물 수
// cnt: 세트의 갯수(1,2,3)(4,5,6)(7) -> 3
const pager = (page, total, cnt = 3) => {
	let grp = 0;				// 페이저에 나타날 페이지 수(1,2,3)->3, (1,2,3,4,5)->5
	let std = 0; 				// 세트의 시작번호
	let end = 0; 				// 세트의 마지막번호
	let prev = 0;				// prev버튼 클릭시 갈 페이지
	let next = 0;				// next버튼 클릭시 갈 페이지
	let first = 0;			// first버튼 클릭시 갈 페이지
	let last = 0;				// last버튼 클릭시 갈 페이지
	const obj = { page, total, cnt, };
	return obj;
}

module.exports = { pager };

/*
// ES5에서 가변인자 사용법
let pagers = function (page, total, cnt) {
	if(!cnt) cnt = 3; 
}
pagers(1, 10, 5); // cnt=5
pagers(1, 10); // cnt=3 
*/