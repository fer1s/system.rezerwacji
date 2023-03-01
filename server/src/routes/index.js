const router = require('express').Router();

// /api
router.get('/', (req, res) => {
    res.json({
        status: 'success',
        data: 'Welcome to the reservation API'
    })
})

// /api/reservations
router.use('/reservations', require('./reservations'));

// /api/cinema
router.use('/cinema', require('./cinema'));

module.exports = router;