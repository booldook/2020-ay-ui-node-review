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