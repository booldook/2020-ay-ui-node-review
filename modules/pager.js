const pagerMaker = (page, cnt) => {
	let grpCnt = 3;			// 페이저에 나타날 페이지 수(1,2,3)->3, (1,2,3,4,5)->5
	let cnt = 52				// 전체 페이지 갯수
	let pagerCnt = 3;		// 세트의 갯수(1,2,3)(4,5,6)(7)->3
	let std = 1; 				// 세트의 시작번호
	let end = 3; 				// 세트의 마지막번호
	let prev = 1;				// prev버튼 클릭시 갈 페이지
	let next = 4;				// next버튼 클릭시 갈 페이지
	let first = 4;			// first버튼 클릭시 갈 페이지
	let last = 4;				// last버튼 클릭시 갈 페이지
}

module.exports = { pagerMaker };