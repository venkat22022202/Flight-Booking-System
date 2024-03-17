import React from 'react';
import { useParams, Link } from 'react-router-dom';

const flights = [
  { id: 1, from: 'NYC', to: 'LAX', departure: '10:00', arrival: '13:00', price: '$300' },
  // Repeat or add more flights as needed
];

function FlightDetails() {
  let { id } = useParams();
  const flight = flights.find(f => f.id.toString() === id);

  if (!flight) return <div>Flight not found</div>;

  return (
    <div>
      <h2>Flight Details</h2>
      <p>{flight.from} to {flight.to}</p>
      <p>Departure: {flight.departure} - Arrival: {flight.arrival}</p>
      <p>Price: {flight.price}</p>
      <Link to="/booking">Book This Flight</Link>
    </div>
  );
}

export default FlightDetails;
