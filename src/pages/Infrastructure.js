import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/Residential.css';

// Import infrastructure project images
import infrastructure1 from '../assets/images/projects/Infrastructure/1.jpg';
import infrastructure2 from '../assets/images/projects/Infrastructure/2.jpg';
import infrastructure3 from '../assets/images/projects/Infrastructure/3.jpg';
import infrastructure4 from '../assets/images/projects/Infrastructure/4.jpg';
import infrastructure5 from '../assets/images/projects/Infrastructure/5.jpg';
import infrastructure6 from '../assets/images/projects/Infrastructure/6.jpg';

const Infrastructure = () => {
  const [imageLoading, setImageLoading] = useState({});
  const navigate = useNavigate();

  const infrastructureProjects = [
    {
      id: 1,
      title: "Ring Road Infrastructure Project",
      type: "Highway",
      status: "in-progress",
      year: "2024",
      image: infrastructure1,
    },
    {
      id: 2,
      title: "Bridge Construction - Canal Road",
      type: "Bridge",
      status: "completed",
      year: "2023",
      image: infrastructure2,
    },
    {
      id: 3,
      title: "Underpass Project - Main Boulevard",
      type: "Underpass",
      status: "completed",
      year: "2023",
      image: infrastructure3,
    },
    {
      id: 4,
      title: "Road Network - Housing Society",
      type: "Road Network",
      status: "completed",
      year: "2024",
      image: infrastructure4,
    },
    {
      id: 5,
      title: "Flyover Construction - Ferozepur Road",
      type: "Flyover",
      status: "in-progress",
      year: "2024",
      image: infrastructure5,
    },
    {
      id: 6,
      title: "Expressway Extension",
      type: "Expressway",
      status: "planned",
      year: "2025",
      image: infrastructure6,
    }
  ];

  const projectHighlights = [
    {
      title: "Nation Building",
      description: "Our infrastructure projects contribute to national development, creating vital transportation networks that connect communities and drive economic growth.",
      icon: "🇵🇰"
    },
    {
      title: "Engineering Excellence",
      description: "We employ cutting-edge engineering techniques and quality materials to build infrastructure that stands strong against time and environmental challenges.",
      icon: "⚙️"
    },
    {
      title: "Public Service",
      description: "Every infrastructure project is designed to serve the public good, improving mobility, safety, and quality of life for communities across Pakistan.",
      icon: "👥"
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
          <h1>Infrastructure Projects</h1>
          <p className="page-intro">
            Discover our portfolio of nation-building infrastructure projects including roads, bridges, 
            and public works that connect communities and drive Pakistan's progress.
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
              className="filter-btn"
              onClick={() => navigate('/religious')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Religious
            </motion.button>
            <motion.button
              className={`filter-btn ${'infrastructure' === 'infrastructure' ? 'active' : ''}`}
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
          <p className="section-subtitle">A showcase of our nation-building infrastructure developments</p>
          <div className="gallery-grid">
            {infrastructureProjects.map((project, index) => (
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
          <h2>Why Choose Our Infrastructure Projects</h2>
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
            <h2>Ready to Start Your Infrastructure Project?</h2>
            <p>Let's discuss your infrastructure development needs and contribute to building Pakistan's future together.</p>
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

export default Infrastructure;