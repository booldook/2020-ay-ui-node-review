const express = require('express');
const router = express.Router();

// -> /member/join
router.get("/join", (req, res, next) => {
	res.render('member/join.pug', {file: "member"});
});
router.get("/login", (req, res, next) => {
	res.render('member/login.pug', {file: "member"});
});
router.get("/logout", (req, res, next) => {
	res.render('member/logout.pug', {file: "member"});
});

module.exports = router;