const mongo = require('../mongo');

// Get all seats
const getSeats = async (req, res) => {
    const seats = [];
    const reservedSeats = await mongo.getReservedSeats();

    // Create a 6x8 array of seats
    for(let i=0; i<6; i++) {
        seats[i] = [];
        for(let j=0; j<8; j++) {
            seats[i][j] = {
                row: i,
                column: j,
                reserved: reservedSeats.some(seat => seat.some(s => s.row === i && s.column === j)) ? true : false
            }
        }
    }

    // Return the seats
    res.json({
        status: 'success',
        data: seats
    })
}

module.exports = {
    getSeats
}