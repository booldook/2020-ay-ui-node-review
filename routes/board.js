const express = require('express');
const router = express.Router();

router.get("/list", (req, res, next) => {
	res.render("board/list.pug", {file: "board"});
});

router.get("/view", (req, res, next) => {
	res.send('<h1>/board/view</h1>');
});

module.exports = router;