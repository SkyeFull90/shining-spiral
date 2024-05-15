const express = require('express')
const router = express.Router();
const catController = require('../controllers/catController')

router.get('/', catController.getKitten)
router.get('/api', catController.getCat)
router.get('/api/get-all-cats', catController.getAllCats)

module.exports = router