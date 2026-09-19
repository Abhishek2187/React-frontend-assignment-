import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Zap } from 'lucide-react';
import './About.css';

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: <Code2 size={24} />, desc: 'Building responsive web interfaces with React and modern JavaScript.' },
    { name: 'UI/UX Design', icon: <Palette size={24} />, desc: 'Crafting beautiful, intuitive user experiences with attention to detail.' },
    { name: 'Performance', icon: <Zap size={24} />, desc: 'Optimizing web applications for maximum speed and scalability.' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text glass"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Hello! I'm Abhishek Chowdhury, a passionate developer with a strong foundation in science. 
              My journey into programming started with a curiosity about how things work on the internet, 
              which quickly evolved into a dedicated pursuit of software development.
            </p>
            <p>
              I specialize in creating pixel-perfect, engaging, and accessible digital experiences. 
              When I'm not writing code, I enjoy exploring new technologies, solving complex problems, 
              and continuously learning to stay at the forefront of web development.
            </p>
          </motion.div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="skill-card glass"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
                <p>{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
