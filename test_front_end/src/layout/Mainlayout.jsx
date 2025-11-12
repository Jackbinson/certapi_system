import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from './components/Services';
import { Footer } from '../components/Footer.jsx';


export const Mainlayout = () => {
  return (
    <div className="anima-project">
      <div className="div-wrapper">
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <Header />
            <Hero />
            <Services />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
