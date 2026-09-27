import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, User, Mail } from 'lucide-react';
import heroImage from '../assets/abhishek.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Background blobs for premium feel */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="greeting">Hi there, I am</span>
          <h1 className="name">Abhishek <span className="text-gradient">Chowdhury</span></h1>
          <h2 className="title">Front-End Developer & Science Enthusiast</h2>
          
          <p className="bio">
            I craft beautiful, responsive, and user-friendly web experiences. 
            Passionate about modern web technologies and creating digital products that users love.
          </p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn-primary flex-btn">
              View My Work <ArrowRight size={18} />
            </a>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Code size={22} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <User size={22} />
              </a>
              <a href="mailto:abhichowdhury003@gmail.com" className="social-icon">
                <Mail size={22} />
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="image-border-gradient">
            <div className="image-inner">
              {/* 
                TO CHANGE THE PROFILE IMAGE:
                Replace the 'src' link below with the path to your own image.
                You can put your image in the 'public' folder and use src="/your-image.jpg"
              */}
              <img 
                src={heroImage} 
                alt="Abhishek Chowdhury" 
                className="hero-img"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
