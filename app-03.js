/* 선언 */
const express = require('express');
const app = express();

/* 라우터 불러오기 */
const memberRouter = require('./routes/member');
const mypageRouter = require('./routes/mypage');
const boardRouter = require('./routes/board');

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
app.use("/", express.static("./public"));

app.get("/", (req, res, next) => {
	res.render("index.pug", {file: "index"});
});

app.use("/member", memberRouter);
app.use("/mypage", mypageRouter);
app.use("/board", boardRouter);




/* 에러 세팅 */
app.use((req, res, next) => {
	res.send('<h1>Error: 404 - Not Found</h1>');
});
