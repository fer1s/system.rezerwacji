const router = require('express').Router();
const controller = require('../controllers/reservations');

// /api/reservations/all
router.get('/all', controller.getAllReservations);

// /api/reservations/get/:id
router.get('/get/:id', controller.getReservation);

// /api/reservations/reserve
router.post('/reserve', controller.reserveSeat);

module.exports = router;