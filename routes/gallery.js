const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const { connect } = require(path.join(__dirname, '../modules/mysql'));
const { upload, makePath } = require(path.join(__dirname, '../modules/multer'));

router.get(["/", "/list"], (req, res, next) => {
	makePath();
	const value = {

	};
	res.render("gallery/list.pug", value);
});

router.get("/write", (req, res, next) => {
	const value = {
		file: 'gallery'
	};
	res.render("gallery/write.pug", value);
});

router.post("/save", upload.single('upfile'), async(req, res, next) => {
	let { title, writer, content, wdate = new Date() } = req.body;
	let sql = "INSERT INTO gallery SET title=?, writer=?, content=?, wdate=?";
	const value = [title, writer, content, wdate];
	const result = await connect.execute(sql, value);
	res.json(result);

	/* connect.execute(sql, value, (err, result) => {
		res.json(result);
	}); */
	/* connect.execute(sql, value).then((result) => {
		res.json(result);
	}).catch((error) => {
		res.json(error);
	}); */
});

module.exports = router;
