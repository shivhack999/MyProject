const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/addBrand',productController.addBrandController);
router.get('/showBrand', productController.showBrandController);
router.post('/deleteBrand', productController.deleteBrandController);

router.post('/categoryAdd',productController.categoryAddController);
router.get('/categoryShow', productController.categoryShowController);
router.post('/categoryDelete', productController.categoryDeleteController);

router.post('/fabricAdd',productController.fabricAddController);
router.get('/fabricShow', productController.fabricShowController);
router.post('/fabricDelete', productController.fabricDeleteController);

router.post('/patternAdd',productController.patternAddController);
router.get('/patternShow', productController.patternShowController);
router.post('/patternDelete', productController.patternDeleteController);

router.post('/occasionAdd',productController.occasionAddController);
router.get('/occasionShow', productController.occasionShowController);
router.post('/occasionDelete', productController.occasionDeleteController);

router.post('/neckAdd',productController.neckAddController);
router.get('/neckShow', productController.neckShowController);
router.post('/neckDelete', productController.neckDeleteController);

router.post('/productAdd',productController.productAddController);
router.get('/productAllShow',productController.productAllShowController);
// router.post('/productOneShow',productController.productOneShowController);

router.post('/productRating', authMiddleware, productController.productRatingController);
module.exports = router;