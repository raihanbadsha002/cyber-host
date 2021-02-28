import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import Price from './components/Price';
import Contact from './components/Contact';


function App() {
  
return (
  <>
    <Particles
      params={{
        particles:{
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape:{
            type: "square",
            stroke: {
              width: 6,
              color: "#2DBE60"
            }
          }
        }
      }}
    />
    <Navbar/>
    <Header/>
    <Services/>
    <About/>
    <Price/>
    <Contact/>
    <div className="container-fluid text-center bg-dark text-white py-4">
       Copyright © 2021 CyberHost All Rights Reserved by MD.Raihan Badsha.
    </div>
  </>  
)


}

export default App;
