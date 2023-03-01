const mongoose = require('mongoose');
const Reservation = require('./schemas/ReservationSchema');

// Connect to database
const connect = (URI) => {
    mongoose.set('strictQuery', false)
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('Connected with MongoDB'))
        .catch(err => console.log(err));
}

// Get all reservations
const getReservations = async () => {
    const reservations = await Reservation.find();
    return reservations;
}

// Get reservation by id
const getReservation = async (id) => {
    const reservation = await Reservation.findOne({ _id: id });
    return reservation;
}

// Get reserved seats
const getReservedSeats = async () => {
    const reservations = await Reservation.find();
    const reservedSeats = reservations.map(reservation => reservation.seats);
    return reservedSeats;
}

// Create reservation
const createReservation = async (name, phone, email, seats) => {
    const reservation = new Reservation({
        name,
        phone,
        email,
        seats
    })
    await reservation.save();
    return reservation;
}

module.exports = {
    connect,
    getReservations,
    getReservation,
    getReservedSeats,
    createReservation
}