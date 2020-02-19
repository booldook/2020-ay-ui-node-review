const express = require('express');
const router = express.Router();

router.get("/info", (req, res, next) => {
	res.render('mypage/info.pug', {file: "mypage"});
});
router.get("/point", (req, res, next) => {
	res.render('mypage/point.pug', {file: "mypage"});
});

module.exports = router;