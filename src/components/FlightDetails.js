import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './FlightDetails.css'; // Import CSS file

const flights = [
  { id: 1, from: 'NYC', to: 'LAX', departure: '10:00', arrival: '13:00', price: '$300' },
  // Repeat or add more flights as needed
];

function FlightDetails() {
  let { id } = useParams();
  const flight = flights.find(f => f.id.toString() === id);

  if (!flight) return <div className="flight-not-found">Flight not found</div>;

  return (
    <div className="flight-details">
      <h2>Flight Details</h2>
      <p><strong>From:</strong> {flight.from} <strong>to</strong> {flight.to}</p>
      <p><strong>Departure:</strong> {flight.departure} - <strong>Arrival:</strong> {flight.arrival}</p>
      <p><strong>Price:</strong> {flight.price}</p>
      <Link to="/booking" className="book-flight-button">Book This Flight</Link>
    </div>
  );
}

export default FlightDetails;
