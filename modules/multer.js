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

const makeFile = (file) => {
	file
}


const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, makePath());
	},
	filename: (req, file, cb) => {
		cb(null, makeFile(file))
	}
});



const chkExt = () => {

}




const upload = multer({ storage: storage })

module.exports = { upload, makePath };