import type Airline from './Airline'

export default interface Flight {
  id: string
  date: string
  from: string
  to: string
  airline: Airline
}
