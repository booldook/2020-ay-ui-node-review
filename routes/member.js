const express = require('express');
const router = express.Router();

// -> /member/join
router.get("/join", (req, res, next) => {
	res.send('<h1>/member/join</h1>');
})

module.exports = router;