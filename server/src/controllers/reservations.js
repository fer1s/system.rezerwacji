const mongo = require('../mongo')

// Get all reservations
const getAllReservations = async (req, res) => {
   const reservations = await mongo.getReservations()
   res.json({
      status: 'success',
      data: reservations,
   })
}

// Get a single reservation
const getReservation = async (req, res) => {
   const { id } = req.params
   const reservation = await mongo.getReservation(id)
   if (!reservation) {
      return res.status(404).json({
         status: 'error',
         data: 'Reservation not found',
      })
   }
   res.json({
      status: 'success',
      data: reservation,
   })
}

// Reserve seats
const reserveSeat = async (req, res) => {
   const { name, phone, email, seats } = req.body
   if (!name || !phone || !email || !seats) {
      return res.status(400).json({
         status: 'error',
         data: 'Missing required fields',
      })
   }

   const reservation = await mongo.createReservation(name, phone, email, seats)

   res.json({
      status: 'success',
      data: reservation,
   })
}

module.exports = {
   getAllReservations,
   getReservation,
   reserveSeat,
}
