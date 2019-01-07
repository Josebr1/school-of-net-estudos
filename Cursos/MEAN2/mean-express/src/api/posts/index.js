const { Router } = require('express');
const router = Router();

router.post('/', require('./post-create-post'));

module.exports = router;