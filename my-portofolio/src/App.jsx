import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Abhishek Chowdhury. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
