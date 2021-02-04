const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json('login main');
});

router.get('/test', (req, res) => {
    res.json('login test');
});

module.exports = router;