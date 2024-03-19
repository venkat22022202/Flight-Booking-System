import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ onSearch }) {
  const [searchParams, setSearchParams] = useState({
    departureCity: '',
    arrivalCity: '',
    departureDate: '',
    returnDate: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="departureCity"
        value={searchParams.departureCity}
        onChange={handleChange}
        placeholder="Departure City"
      />
      <input
        type="text"
        name="arrivalCity"
        value={searchParams.arrivalCity}
        onChange={handleChange}
        placeholder="Arrival City"
      />
      <input
        type="date"
        name="departureDate"
        value={searchParams.departureDate}
        onChange={handleChange}
      />
      <input
        type="date"
        name="returnDate"
        value={searchParams.returnDate}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;