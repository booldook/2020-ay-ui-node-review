/* 서버 구현 */
const path = require('path');
const express = require('express');
const app = express();
app.listen(3000, () => {
	console.log("http://127.0.0.1:3000");
});

/* 뷰엔진 세팅 */
app.locals.pretty = true;
app.locals.mainLogo = "MAIN LOGO";
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./views"));

/* 모듈 불러오기 */
const { connect } = require(path.join(__dirname, './modules/mysql'));

/* 라우터 불러오기 */
const galleryRouter = require(path.join(__dirname, './routes/gallery'));

/* 미들웨어 세팅 */
// 아래의 두줄은 req.body에 접근하게 해준다.
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/* 라우터 세팅 */
app.use("/", express.static(path.join(__dirname, "./public")));
app.use("/uploads", express.static(path.join(__dirname, "./uploads")));
app.use("/gallery", galleryRouter);

/* 에러 세팅 */
app.use((req, res, next) => {
	res.send('<h1>Error: 404 - Not Found</h1>');
});
