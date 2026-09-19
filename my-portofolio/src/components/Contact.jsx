import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div 
          className="section-header center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
          <div className="section-line mx-auto"></div>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info glass"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Let's talk about everything!</h3>
            <p>
              Feel free to get in touch with me. I am always open to discussing new projects, 
              creative ideas or opportunities to be part of your visions.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email Me</h4>
                  <a href="mailto:abhichowdhury003@gmail.com">abhichowdhury003@gmail.com</a>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Call Me</h4>
                  <a href="tel:+919874381518">+91 9874381518</a>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Location</h4>
                  <span>India</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form glass"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-group">
              <input type="text" placeholder="Your Name" required className="form-control" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required className="form-control" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required className="form-control" />
            </div>
            <div className="form-group">
              <textarea placeholder="Message" rows="5" required className="form-control"></textarea>
            </div>
            <button type="submit" className="btn-primary form-submit">
              Send Message <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
