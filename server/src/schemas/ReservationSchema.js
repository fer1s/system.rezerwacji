const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    seats: {
        type: Array,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Reservation', ReservationSchema);