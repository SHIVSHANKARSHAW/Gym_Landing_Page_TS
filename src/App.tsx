import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Classes } from './components/Classes';
import { Trainers } from './components/Trainers';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
        <div className="min-h-screen w-full bg-mesh noise-bg overflow-x-hidden">
          <Navbar />
          <Hero />
          <Classes />
          <Trainers />
          <Pricing />
          <Contact />
          <Footer />
        </div>
  );
}

export default App;