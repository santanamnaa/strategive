import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyImportant from './components/WhyImportant';
import Packages from './components/Packages';
import WhyChooseUs from './components/WhyChooseUs';
import Advantages from './components/Advantages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Careers from './components/Careers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/careers" element={<Careers />} />
        <Route path="/" element={
          <div className="min-h-screen bg-sage-50">
            <Header />
            <Hero />
            <WhyImportant />
            <Packages />
            <WhyChooseUs />
            <Advantages />
            <Portfolio/>
            <Contact />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;