const express = require('express');
const router = express.Router();
const coursesController = require('../app/controllers/CoursesController');
const upload = require('../middlewares/MulterMiddleWare')

router.get('/create', coursesController.create);
router.post('/create', coursesController.store);
router.post('/store', coursesController.store);
router.get('/:id/edit', coursesController.edit);
router.put('/:id', coursesController.update);
router.get('/:id', coursesController.show);
router.post('/upload-file',upload.single('img'), coursesController.uploadFile)
// router.post('/test',coursesController.test)

module.exports = router;
