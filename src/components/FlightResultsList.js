import React from 'react';
import { Link } from 'react-router-dom';

// Dummy flight data
const flights = [
  { id: 1, from: 'NYC', to: 'LAX', departure: '10:00', arrival: '13:00' },
  // Add more flights as needed
];

function FlightResultsList() {
  return (
    <div>
      <h2>Flight Results</h2>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>
            {flight.from} to {flight.to} - Depart: {flight.departure} Arrive: {flight.arrival}
            <Link to={`/flight/${flight.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FlightResultsList;
