/* 선언 */
const express = require('express');
const app = express();

/* 서버 구현 */
app.listen(3000, () => {
	console.log("http://127.0.0.1:3000");
});

/* 뷰엔진 세팅 */
app.locals.pretty = true;
app.set("view engine", "pug");
app.set("views", "./views");

/* 미들웨어 세팅 */


/* 라우터 세팅 */
app.use((req, res, next) => {
	req.a = 0;
	for(var i=0; i<1000; i++) req.a++;
	next();
});
app.use("/", express.static("./public"));
app.use("/", (req, res, next) => {
	res.send('<h1>'+req.a+'</h1>');
});

/* 에러 세팅 */
app.use((req, res, next) => {
	res.send('<h1>Error: 404 - Not Found</h1>');
});


