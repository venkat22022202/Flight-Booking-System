import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import FlightResultsList from './components/FlightResultsList';
import FlightDetails from './components/FlightDetails';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SearchForm />} />
          <Route path="/results" element={<FlightResultsList />} />
          <Route path="/flight/:id" element={<FlightDetails />} />
          <Route path="/booking" element={<BookingForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
