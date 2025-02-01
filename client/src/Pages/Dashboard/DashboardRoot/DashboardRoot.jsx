import React from 'react'
import './DashboardRoot.css'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import BaseBody from '../Body/BaseBody'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import OddDay from '../Body/OddDay'

const DashboardRoot = () => {
  return (
    <div
    className = 'dashboard-root'
    >
      <Header />
      <Router>
          <Routes>
              <Route exact path="/home" element={<BaseBody />} />
              {/* <Route path="/oddday" element={<OddDay />} /> */}
              {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default DashboardRoot