import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/Residential.css';

// Import religious project images
import religious1 from '../assets/images/projects/Religious/1.png';
import religious2 from '../assets/images/projects/Religious/2.jpg';
import religious3 from '../assets/images/projects/Religious/3.png';
import religious4 from '../assets/images/projects/Religious/4.jpg';
import religious5 from '../assets/images/projects/Religious/5.jpg';
import religious6 from '../assets/images/projects/Religious/6.png';

const Religious = () => {
  const [imageLoading, setImageLoading] = useState({});
  const navigate = useNavigate();

  const religiousProjects = [
    {
      id: 1,
      title: "Community Mosque - Model Town",
      type: "Mosque",
      status: "completed",
      year: "2023",
      image: religious1,
    },
    {
      id: 2,
      title: "Islamic Center - Gulberg",
      type: "Islamic Center",
      status: "completed",
      year: "2024",
      image: religious2,
    },
    {
      id: 3,
      title: "Friday Mosque - DHA",
      type: "Jamia Mosque",
      status: "completed",
      year: "2024",
      image: religious3,
    },
    {
      id: 4,
      title: "Neighborhood Masjid - Johar Town",
      type: "Community Masjid",
      status: "completed",
      year: "2023",
      image: religious4,
    },
    {
      id: 5,
      title: "Islamic Complex - Bahria Town",
      type: "Religious Complex",
      status: "completed",
      year: "2023",
      image: religious5,
    },
    {
      id: 6,
      title: "Grand Mosque - Ring Road",
      type: "Grand Mosque",
      status: "completed",
      year: "2025",
      image: religious6,
    }
  ];

  const projectHighlights = [
    {
      title: "Spiritual Design",
      description: "Our religious structures are designed with deep respect for Islamic architecture, incorporating traditional elements with modern functionality for spiritual comfort.",
      icon: "🕌"
    },
    {
      title: "Community Focus",
      description: "We create religious spaces that serve as community hubs, fostering unity, spiritual growth, and social cohesion among worshippers.",
      icon: "🤲"
    },
    {
      title: "Sacred Craftsmanship",
      description: "Every religious project is built with meticulous attention to detail, using quality materials and traditional craftsmanship to create spaces worthy of worship.",
      icon: "✨"
    }
  ];

  const handleImageLoad = (projectId) => {
    setImageLoading(prev => ({ ...prev, [projectId]: false }));
  };

  const handleImageError = (projectId) => {
    setImageLoading(prev => ({ ...prev, [projectId]: false }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200
      }
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return '#10b981';
      case 'in-progress': return '#f59e0b';
      case 'planned': return '#8b5cf6';
      default: return '#6b7280';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed': return '✅';
      case 'in-progress': return '🔄';
      case 'planned': return '📅';
      default: return '❓';
    }
  };

  return (
    <motion.div 
      className="residential-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.div className="residential-header" variants={itemVariants}>
          <h1>Religious Projects</h1>
          <p className="page-intro">
            Explore our sacred portfolio of mosques and Islamic centers, built with spiritual reverence 
            and architectural excellence to serve communities and honor Islamic traditions.
          </p>

          {/* Filter Buttons Header */}
          <motion.div 
            className="projects-filter"
            variants={filterVariants}
          >
            <motion.button
                          className="filter-btn"
                          onClick={() => navigate('projects')}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          All Projects
                        </motion.button>
            <motion.button
              className="filter-btn"
              onClick={() => navigate('/residential')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Residential
            </motion.button>
            <motion.button
              className="filter-btn"
              onClick={() => navigate('/commercial')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Commercial
            </motion.button>
            <motion.button
              className="filter-btn"
              onClick={() => navigate('/industrial')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Industrial
            </motion.button>
            <motion.button
              className={`filter-btn ${'religious' === 'religious' ? 'active' : ''}`}
              onClick={() => navigate('/religious')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Religious
            </motion.button>
            <motion.button
              className="filter-btn"
              onClick={() => navigate('/infrastructure')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Infrastructure
            </motion.button>
            <motion.button
              className="filter-btn"
              onClick={() => navigate('/educational')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Educational
            </motion.button>
            <motion.button
              className="filter-btn"
              onClick={() => navigate('/road')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Road
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.section className="gallery-section" variants={itemVariants}>
          <h2>Project Gallery</h2>
          <p className="section-subtitle">A showcase of our spiritually inspired religious constructions</p>
          <div className="gallery-grid">
            {religiousProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`gallery-item gallery-item-${index + 1}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="gallery-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onLoad={() => handleImageLoad(`gallery-${project.id}`)}
                    onError={() => handleImageError(`gallery-${project.id}`)}
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-info">
                      <h4>{project.title}</h4>
                      <p>{project.type}</p>
                      <div className="project-status" style={{ backgroundColor: getStatusColor(project.status) }}>
                        {getStatusIcon(project.status)} {project.status.replace('-', ' ').toUpperCase()}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="highlights-section" variants={itemVariants}>
          <h2>Why Choose Our Religious Projects</h2>
          <div className="highlights-grid">
            {projectHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="highlight-card"
                whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
              >
                <div className="highlight-icon">{highlight.icon}</div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="cta-section" variants={itemVariants}>
          <div className="cta-content">
            <h2>Ready to Build Your Religious Space?</h2>
            <p>Let's discuss your religious construction needs and create a sacred space that serves your community with dignity and beauty.</p>
            <motion.button 
              className="cta-button"
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Religious;