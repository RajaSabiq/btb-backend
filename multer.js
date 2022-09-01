var multer = require('multer');
var path = require('path');

const stroage = multer.diskStorage({
  destination: './uploads/doc',
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

module.exports = stroage;
