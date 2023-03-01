# System rezerwacji

System rezerwacji stworzony w pełni w JS. Jest to projekt który używa bazy danych `MongoDB`.
Technologie użyte w API: `express.js`, `mongoose`.
Technologie użyte w cliencie: `react.js`, `vite`, `sass`.

## Instalacja

**Wymagania**
- MongoDB
- NodeJS

Server (fill PORT and MONGO_URI in .env file!)
```
cd server
yarn
yarn dev
```

Client
```
cd client
yarn
yarn dev
```

## API

### Fetchowanie wszystkich rezerwacji

Request
```
GET /api/reservations/all
```

Response
```json
{
    status: 'success',
    data: []
}
```

### Fetchowanie pojedyńczej rezerwacji

Request
```
GET /api/reservations/get?id=mongoid
```

Response
```json
{
    status: 'success',
    data: {}
}
```
```json
{
    status: 'error',
    data: 'Reservation not found'
}
```

### Fetchowanie miejsc na sali kinowej

Request
```
GET /api/cinema/seats
```

Response
```json
{
    status: 'success',
    data: []
}
```

### Rezerwacja miejsca

Request
```
POST /api/reservations/reserve
```

Response
```json
{
    status: 'success/error',
    data: {}/""
}
```