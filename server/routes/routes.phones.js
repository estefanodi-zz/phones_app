var express = require('express'),
router      = express.Router(),
controller  = require('../controllers/controllers.phones.js');

router.get('/all-phones', controller.getAllPhones);
router.post('/create-phone', controller.createPhone);
router.post('/remove-phone', controller.removePhone);
router.post('/update-phone', controller.updatePhone);

module.exports = router;