const multer = require('multer');
const path = require('path');
const moment = require('moment');
const fs = require('fs');

const makePath = () => {
	const folder = path.join(__dirname, '../uploads/' + moment(new Date()).format('YYMMDD'));
	if(!fs.existsSync(folder)) {
		fs.mkdirSync(folder);
	}
	return folder;
}

// file = p1.jpg
const makeFile = (fileName) => {
	let ext = path.extname(fileName); //.jpg
	let base = path.basename(fileName, ext); //p1
	let saveName = moment(new Date()).format('YYMMDD') + '-' + Date.now() + '-' + Math.floor(Math.random() * 900 + 100) + ext; // 200224-1534356765-234.jpg
	return saveName;
}


const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		console.log(makePath());
		cb(null, makePath());
	},
	filename: (req, file, cb) => {
		console.log(makeFile(file.originalname));
		cb(null, makeFile(file.originalname))
	}
});

const chkExt = () => {

}

const upload = multer({ storage: storage })

module.exports = { upload };