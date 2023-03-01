import React from 'react'
import axios from 'axios'

import '../styles/Reservations.scss'

type Reservation = {
    _id: string
    name: string
    seats: any[]
}

const Reservations = () => {

    const [reservations, setReservations] = React.useState([])

    React.useEffect(() => {
        axios.get('/reservations/all').then(({ data }) => {
            if (data.status === 'error') {
                return alert(data.message)
            }

            setReservations(data.data)
            console.log(data.data)
        })
    }, [])

  return (
    <div className='center'>
        <div className="reservations">
            <h1>Rezerwacje</h1>
            <div className="reservations_list">
                {reservations.map((reservation: any) => (
                    <div key={reservation._id} className="reservation_element">
                        <h5>{reservation.name}</h5>
                        <p>Miejsca: <span>{reservation.seats.length}</span></p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Reservations