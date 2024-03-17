import React, { useState } from 'react';

function BookingForm() {
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    // Add more fields as required
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process booking here
    console.log(bookingDetails);
  };

  return (
    <form onSubmit={handleSubmit}>
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
      {/* Add more inputs as needed */}
      <button type="submit">Book Flight</button>
    </form>
  );
}

export default BookingForm;
