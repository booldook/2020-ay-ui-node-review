const express = require('express');
const router = express.Router();

router.get("/list", (req, res, next) => {
	res.render("board/list.pug", {file: "board"});
});

router.get("/write", (req, res, next) => {
	res.render("board/write.pug", {file: "board"});
});


module.exports = router;