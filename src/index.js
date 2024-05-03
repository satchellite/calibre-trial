import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BookingForm from './BookingForm';
import Header from './Header';
import Masthead from './Masthead';
import Testimonial from './Testimonial';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Masthead />
    <BookingForm />
    <Testimonial />
  </React.StrictMode>
);
