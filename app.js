/* 서버 구현 */
const express = require('express');
const app = express();
app.listen(3000, () => {
	console.log("http://127.0.0.1:3000");
});

/* 뷰엔진 세팅 */
app.locals.pretty = true;
app.set("view engine", "pug");
app.set("views", "./views");

/* 모듈 불러오기 */
const { connect } = require('./modules/mysql');

/* 라우터 불러오기 */
const galleryRouter = require('./routes/gallery');

/* 미들웨어 세팅 */
// 아래의 두줄은 req.body에 접근하게 해준다.
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/* 라우터 세팅 */
app.use("/", express.static("./public"));
app.use("/gallery", galleryRouter);

/* 에러 세팅 */
app.use((req, res, next) => {
	res.send('<h1>Error: 404 - Not Found</h1>');
});
