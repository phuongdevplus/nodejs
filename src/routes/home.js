const express = require('express');
const router = express.Router();
const homeController = require('../app/controllers/HomeController');
const upload = require('../middlewares/MulterMiddleWare')

router.get('/HomeSlide', homeController.showSlide);
router.get('/HomeText', homeController.showText);
router.post('/HomeSlide',upload.single('img'), homeController.uploadFile);



module.exports = router;