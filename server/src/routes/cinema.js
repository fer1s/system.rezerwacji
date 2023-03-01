const router = require('express').Router();
const controller = require('../controllers/cinema');

// /api/cinema/seats
router.get('/seats', controller.getSeats);

module.exports = router;