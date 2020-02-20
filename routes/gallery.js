const express = require('express');
const router = express.Router();

router.get(["/", "/list"], (req, res, next) => {
	const value = {

	};
	res.render("gallery/list.pug", value);
});

router.get("/write", (req, res, next) => {
	const value = {
	
	};
	res.render("gallery/write.pug", value);
});

module.exports = router;