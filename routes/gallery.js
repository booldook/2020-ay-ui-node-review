const express = require('express');
const router = express.Router();
const { connect } = require('../modules/mysql');

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

router.post("/save", (req, res, next) => {
	let { title, writer, content, wdate = new Date() } = req.body;
	let sql = "INSERT INTO gallery SET title=?, writer=?, content=?, wdate=?";
	const value = [title, writer, content, wdate];
	connect.execute(sql, value, (err, result) => {
		res.json(result);
	});
});

module.exports = router;