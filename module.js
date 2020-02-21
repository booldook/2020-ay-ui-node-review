// BOM(window, location, history) / DOM(document)

const log = console.log;
const clear = console.clear;

/* Global 객체 */
console.log(__dirname); // 현재 실행된 node파일의 폴더 경로를 보여줌
console.log(__filename); // 현재 실행된 node파일의 파일명을 포함하는 경로를 보여줌

let i = 0;
const interval = setInterval(() => {
	// console.log(i++);
}, 1000);
const immediate = setImmediate(() => {
	//console.log("Immediate");
});
console.log("hi");

console.time("For문측정");
for(let i=0; i<1000; i++) {
	
}
console.timeEnd("For문측정");

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
var over3 = arr.filter((v) => {
	return v >= 3;
});
console.log(over3);
console.clear();


/* os 객체 */
const os = require('os');
log(	"arch: ", os.arch()	);
log(	"platform: ", os.platform()	);
log(	"type: ", os.type()	);
log(	"uptime: ", os.uptime()	);
log(	"hostname: ", os.hostname()	);
log(	"release: ", os.release()	);
log(	"homedir: ", os.homedir()	);
log(	"tmpdir: ", os.tmpdir()	);
log(	"cpus: ", os.cpus()	);
log(	"cpus().length: ", os.cpus().length	);
log(	"freemem: ", os.freemem()	);
log(	"totalmem: ", os.totalmem()	);
clear();


/* path 객체 */
const path = require('path');
const file = __filename;
log("dirname: ", path.dirname(file));		// 폴더경로
log("extname: ", path.extname(file));		// 파일의 확장자(.포함)
log("basename: ", path.basename(file));	// 파일명(확장자 포함)
log("parse: ", path.parse(file));
/*
파일의 정보를 객체로 리턴
{
	root: 'C:\\', 
	dir: 'C:\\folder', 
	base: 'module.js',
	ext: '.js', 
	name: 'module'
}
*/
log(path.normalize("C:/\\Windows\\assembly/NativeImages_v2.0.50727_32/CustomMarshalers"));
log(	path.join(__dirname, './node_modules/mysql2', '../')	);
clear();

/* url */
const url = require('url');
const urlStr = 'https://nodejs.org:3000/dist/latest-v12.x/docs/api/url.html?a=123&b=456#url_name';
const myURL = new URL(urlStr);
log(myURL);
log(	url.parse(urlStr)	);
for(let [k, v] of myURL.searchParams) {
	log(k, v);
}

