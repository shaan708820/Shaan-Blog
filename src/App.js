import React from 'react';
import { Element } from 'react-scroll';
import Header from './components/Header';
import Home from './components/Home';
import SocialMedia from './components/SocialMedia';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css'; // Create and style your CSS as needed

const App = () => {
  return (
    <div className="App">
      <Header />
      <Element name="home">
        <Home />
      </Element>
      <Element name="social-media">
        <SocialMedia />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Resume />
    </div>
  );
}

export default App;
