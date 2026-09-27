import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      desc: 'A full-featured e-commerce platform built with React, Redux, and Node.js. Features include user authentication, payment processing, and an intuitive admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Task Management App',
      desc: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team workspaces.',
      tech: ['React', 'Firebase', 'Tailwind', 'Framer Motion'],
      github: '#',
      live: '#',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Weather Dashboard',
      desc: 'A beautiful weather dashboard providing real-time forecasts, interactive maps, and detailed climate data using external APIs.',
      tech: ['JavaScript', 'HTML/CSS', 'OpenWeather API'],
      github: '#',
      live: '#',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=600&auto=format&fit=crop'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-links-overlay">
                  <a href={project.github} className="project-link-btn" title="View Source">
                    <Code size={20} />
                  </a>
                  <a href={project.live} className="project-link-btn" title="Live Preview">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
