const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json('logout main');
});

router.get('/test', (req, res) => {
    res.json('logout test');
});

module.exports = router;