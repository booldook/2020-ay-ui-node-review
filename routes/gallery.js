const fs = require('fs');
const path = require('path');
const express = require('express');
const moment = require('moment');
const router = express.Router();
const { connect } = require(path.join(__dirname, '../modules/mysql'));
const { upload } = require(path.join(__dirname, '../modules/multer'));
const { pager } = require(path.join(__dirname, '../modules/pager')); 

router.get(["/", "/list", "/list/:page"], async (req, res, next) => {
	let page = Number(req.params.page);
	if(!page) page = 1;
	let sql = "SELECT count(id) FROM gallery";
	let result = await connect.execute(sql);
	let pagerVals = pager({ page, total: result[0][0]['count(id)'] });
	sql = "SELECT * FROM gallery ORDER BY id DESC LIMIT ?, ?";
	let values = [pagerVals.stRec, pagerVals.list];
	result = await connect.execute(sql, values);
	for(let v of result[0]) {
		if(v.savefile) {
			v.savefile = '/uploads/' + v.savefile.substr(0, 6) + '/' + v.savefile;
		}
		else {
			v.savefile = 'https://via.placeholder.com/300?text=no-image';
		}
	}
	const value = {
		file: 'gallery',
		lists: result[0],
		pager: pagerVals
	};
	//res.json(result[0]);
	res.render("gallery/list.pug", value);
});

router.get("/write", (req, res, next) => {
	const value = {
		file: 'gallery'
	};
	res.render("gallery/write.pug", value);
});

router.post("/save", upload.single('upfile'), async(req, res, next) => {
	let {title, writer, content, wdate = new Date(), realfile = '', savefile = ''} = req.body;
	if(req.file) {
		realfile = req.file.originalname;
		savefile = req.file.filename;
	}
	let sql = "INSERT INTO gallery SET title=?, writer=?, content=?, wdate=?, realfile=?, savefile=?";
	const value = [title, writer, content, wdate, realfile, savefile];
	let result = await connect.execute(sql, value);
	res.redirect("/gallery");

	/* connect.execute(sql, value, (err, result) => {
		res.json(result);
	}); */
	/* connect.execute(sql, value).then((result) => {
		res.json(result);
	}).catch((error) => {
		res.json(error);
	}); */
});

router.get("/delete/:id", async (req, res, next) => {
	const id = req.params.id;
	const sql = "DELETE FROM gallery WHERE id="+id;
	let result = await connect.execute(sql);
	res.redirect("/gallery");
});

router.get("/view/:id", async (req, res, next) => {
	const id = req.params.id;
	const sql = "SELECT * FROM gallery WHERE id="+id;
	let result = await connect.execute(sql);
	let rs = result[0][0];
	console.log(rs);
	rs.wdate = moment(rs.wdate).format("YYYY-MM-DD HH:mm:ss");
	rs.img = `/uploads/${rs.savefile.substr(0, 6)}/${rs.savefile}`;
	const value = {
		file: 'gallery',
		rs
	};
	//res.json(rs);
	res.render('gallery/view.pug', value);
});

router.get("/download/:file", (req, res, next) => {
	const file = req.params.file;
	const filename = path.join(__dirname, `../uploads/${file.substr(0, 6)}/${file}`);
	res.download(filename);
})

module.exports = router;
