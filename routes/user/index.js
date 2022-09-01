const express = require('express');
const {
  login,
  register,
  users,
  deleteUser,
  editUser,
  uploadDoc,
  editAdmin,
  usersDoc,
  deleteUserDocument,
} = require('../../controllers/user');

const router = express.Router();
var multer = require('multer');

var storage = require('../../multer');
const upload = multer({
  storage: storage,
});

router.get('/', users);
router.get('/docs', usersDoc);
router.post('/login', login);
router.post('/register', register);
router.delete('/delete/doc', deleteUserDocument);
router.delete('/delete', deleteUser);
router.put('/edit', editUser);
router.put('/edit/admin', editAdmin);
router.post(
  '/upload-doc',
  upload.fields([{ name: 'docs', maxCount: 10 }]),
  uploadDoc
);

module.exports = router;
