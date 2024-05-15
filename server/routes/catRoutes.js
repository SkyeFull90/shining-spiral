const express = require('express')
const router = express.Router();
const catController = require('../controllers/catController')

router.get('/', catController.getKitten)
router.get('/api', catController.getCat)

module.exports = router