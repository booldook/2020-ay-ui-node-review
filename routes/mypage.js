const express = require('express');
const router = express.Router();

router.get("/info", (req, res, next) => {
	res.send('<h1>/mypage/info</h1>');
});

router.get("/point", (req, res, next) => {
	res.send('<h1>/mypage/point</h1>');
});

module.exports = router;