const express = require('express');
const router = express.Router();
const controllers = require('../controllers/upload');
const multer = require('multer');
const upload = multer({
    dest: 'public/uploads/'
})

router.post('/single', upload.single('singleFile'), controllers.singleFileUpload);
router.post('/multipleFiles', upload.array('multipleFiles', 3), controllers.multipleFilesUpload);
router.post('/multipleFields', upload.fields([
    {name: 'multipleFiles1', maxCount: 3},
    {name: 'multipleFiles2', maxCount: 3}
]), controllers.multipleFieldsUpload)

module.exports = router;