import React from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

import '../styles/Reservation.scss'

type Seat = {
    row: number
    column: number
    reserved: boolean
}

type Reservation = {
    name: string
    phone: string
    email: string
    seats: Seat[]
}

const Reservation = () => {
   const navigate = useNavigate()
   const { id } = useParams()

    const [reservation, setReservation] = React.useState<Reservation>({} as Reservation)

    React.useEffect(() => {
        axios.get(`/reservations/get/${id}`).then(({ data }) => {
            if (data.status === 'error') {
                return navigate('/')
            }

            setReservation(data.data)
        })
    }, [])

   return (
      <div className="center">
         <div className="reservation">
            <h1>Rezerwacja</h1>
            <p>Numer rezerwacji: {id}</p>
            <div className="reservation_info">
                <h2>Imię</h2>
                <p>{reservation.name}</p>
                <h2>Numer telefonu</h2>
                <p>{reservation.phone}</p>
                <h2>Email</h2>
                <p>{reservation.email}</p>
                <h2>Wybrane miejsca</h2>
                {reservation.seats.map((seat: Seat, index) => (
                    <p key={index}>Rząd {seat.row}, Miejsce {seat.column}</p>
                ))}
            </div>
         </div>
      </div>
   )
}

export default Reservation
