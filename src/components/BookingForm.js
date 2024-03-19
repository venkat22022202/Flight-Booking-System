import React, { useState } from 'react';
import './BookingForm.css'; // Import the CSS file

function BookingForm() {
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    flightNumber: '',
    departureDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bookingDetails); // Process booking here, like sending data to an API
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <input
        type="text"
        name="name"
        value={bookingDetails.name}
        onChange={handleChange}
        placeholder="Your Name"
      />
      <input
        type="email"
        name="email"
        value={bookingDetails.email}
        onChange={handleChange}
        placeholder="Your Email"
      />
      <input
        type="text"
        name="flightNumber"
        value={bookingDetails.flightNumber}
        onChange={handleChange}
        placeholder="Flight Number"
      />
      <input
        type="date"
        name="departureDate"
        value={bookingDetails.departureDate}
        onChange={handleChange}
      />
      <button type="submit">Book Flight</button>
    </form>
  );
}

export default BookingForm;
