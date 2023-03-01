import { useNavigate } from 'react-router-dom'
import React from 'react'
import axios from 'axios'

import '../styles/Reserve.scss'

type Seat = {
   row: number
   column: number
   reserved: boolean
}

const Reserve = () => {
   const navigate = useNavigate()
   const [seats, setSeats] = React.useState([])
   const [selectedSeats, setSelectedSeats] = React.useState([])

   const [name, setName] = React.useState('')
   const [phone, setPhone] = React.useState('')
   const [email, setEmail] = React.useState('')

   const [reservating, setReservating] = React.useState(false)

   React.useEffect(() => {
      axios.get('/cinema/seats').then(({ data }) => {
         if (data.status === 'error') {
            return navigate('/')
         }

         setSeats(data.data)
      })
   }, [])

   const handleSeatClick = (seat: Seat) => {
      if (seat.reserved) {
         return
      }

      const seatIndex = selectedSeats.findIndex((selectedSeat: Seat) => selectedSeat.row === seat.row && selectedSeat.column === seat.column)

      if (seatIndex !== -1) {
         const newSelectedSeats = [...selectedSeats]
         newSelectedSeats.splice(seatIndex, 1)
         setSelectedSeats(newSelectedSeats)
      } else {
         setSelectedSeats([...selectedSeats, seat] as any)
      }

      console.log(selectedSeats)
   }

   const isEmail = (email: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)

   const handleReserve = () => {
      if (selectedSeats.length === 0) {
         return
      }

      if (name.length === 0 || phone.length === 0 || email.length === 0) {
         return alert('Wypełnij wszystkie pola')
      }

      if (!isEmail(email)) {
         return alert('Niepoprawny adres email')
      }

      if (!/^[0-9]+$/.test(phone)) {
         return alert('Niepoprawny numer telefonu')
      }

      setReservating(true)
      axios
         .post('/reservations/reserve', {
            seats: selectedSeats,
            name,
            phone,
            email,
         })
         .then(({ data }) => {
            if (data.status === 'error') {
               return alert(data.data)
            }

            navigate(`/reservation/${data.data._id}`)
         })
   }

   return (
      <div className="center">
         <div className="reserve">
            <h1>Zarezerwuj</h1>
            <p>Zarezerwuj miejsca na dzisiejszy seans.</p>
            <div className="seats">
               {seats.map((rows: [], index) => (
                  <div key={index} className="seat_row">
                     {rows.map((seat: Seat, i) => (
                        <div
                           onClick={() => handleSeatClick(seat)}
                           key={i}
                           className={`seat ${seat.reserved ? 'reserved' : ''} ${
                              selectedSeats.some((selectedSeat: Seat) => selectedSeat.column === seat.column && selectedSeat.row === seat.row) ? 'selected' : ''
                           }`}
                        />
                     ))}
                  </div>
               ))}
            </div>
            {selectedSeats.length > 0 && (
               <div className="form">
                  <input type="text" placeholder="Imię" value={name} onChange={(e) => setName(e.target.value)} />
                  <input type="tel" placeholder="Telefon" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                  {reservating ? <button disabled>Rezerwuję...</button> : <button onClick={handleReserve}>Zarezerwuj</button>}
               </div>
            )}
         </div>
      </div>
   )
}

export default Reserve
