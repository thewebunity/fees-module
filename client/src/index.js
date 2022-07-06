import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Home';
import Addstudent from './addStudent'
import PaymentSuccess from './PaymentSuccess'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/student" element={<Addstudent />} />
    <Route path="/paymentsuccess" element={<PaymentSuccess />} />
  </Routes>
</BrowserRouter>
);
