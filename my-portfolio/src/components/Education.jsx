import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <motion.div 
          className="section-header center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My <span className="text-gradient">Education</span></h2>
          <div className="section-line mx-auto"></div>
        </motion.div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <motion.div 
              className="timeline-content glass"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="timeline-icon">
                <GraduationCap size={28} />
              </div>
              <h3 className="timeline-title">Higher Secondary (12th)</h3>
              <div className="timeline-meta">
                <span className="badge">Science Stream</span>
              </div>
              <p className="timeline-desc">
                Completed higher secondary education with a focus on Science. 
                Developed a strong foundation in analytical thinking, mathematics, and problem-solving, 
                which paved the way for my journey into technology and software development.
              </p>
            </motion.div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <motion.div 
              className="timeline-content glass"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="timeline-icon">
                <BookOpen size={28} />
              </div>
              <h3 className="timeline-title">Secondary Education (10th)</h3>
              <div className="timeline-meta">
                <span className="badge">General</span>
              </div>
              <p className="timeline-desc">
                Completed secondary education with excellent academic records, building core competencies 
                and discovering my passion for logical reasoning and computer science.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
