const express = require('express');
const router = express.Router();

// -> /member/join
router.get("/join", (req, res, next) => {
	res.send('<h1>/member/join</h1>');
});
router.get("/login", (req, res, next) => {
	res.send('<h1>/member/login</h1>');
});
router.get("/logout", (req, res, next) => {
	res.send('<h1>/member/logout</h1>');
});

module.exports = router;