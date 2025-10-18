import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/Residential.css';

// Import commercial project images
import commercial1 from '../assets/images/projects/Commercial/1.jpg';
import commercial2 from '../assets/images/projects/Commercial/2.jpg';
import commercial3 from '../assets/images/projects/Commercial/3.jpg';
import commercial4 from '../assets/images/projects/Commercial/4.jpg';
import commercial5 from '../assets/images/projects/Commercial/5.jpg';
import commercial6 from '../assets/images/projects/Commercial/6.jpg';

const Commercial = () => {
  const [imageLoading, setImageLoading] = useState({});
  const navigate = useNavigate();

  const commercialProjects = [
    {
      id: 1,
      title: "Corporate Office Tower - Gulberg",
      type: "Office Building",
      status: "completed",
      year: "2024",
      image: commercial1,
    },
    {
      id: 2,
      title: "Emporium Shopping Mall",
      type: "Shopping Mall",
      status: "completed",
      year: "2024",
      image: commercial2,
    },
    {
      id: 3,
      title: "Five-Star Hotel Project",
      type: "Hotel",
      status: "completed",
      year: "2024",
      image: commercial3,
    },
    {
      id: 4,
      title: "Mixed-Use Commercial Plaza",
      type: "Commercial Plaza",
      status: "completed",
      year: "2023",
      image: commercial4,
    },
    {
      id: 5,
      title: "Business Center - Main Boulevard",
      type: "Business Center",
      status: "completed",
      year: "2023",
      image: commercial5,
    },
    {
      id: 6,
      title: "Retail Complex - Ferozepur Road",
      type: "Retail Complex",
      status: "completed",
      year: "2025",
      image: commercial6,
    }
  ];

  const projectHighlights = [
    {
      title: "Strategic Locations",
      description: "Our commercial projects are strategically located in prime business districts, ensuring maximum visibility, accessibility, and commercial viability for our clients.",
      icon: "📍"
    },
    {
      title: "Modern Infrastructure",
      description: "We incorporate state-of-the-art infrastructure, smart building systems, and sustainable design principles to create commercial spaces that stand the test of time.",
      icon: "🏢"
    },
    {
      title: "Business Optimization",
      description: "Every commercial project is designed to optimize business operations, enhance customer experience, and maximize return on investment for property owners.",
      icon: "📈"
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
          <h1>Commercial Projects</h1>
          <p className="page-intro">
            Explore our portfolio of cutting-edge commercial developments including office towers, shopping malls, 
            and business centers designed to drive business success and economic growth.
          </p>

          {/* Filter Buttons Header */}
          <motion.div 
            className="projects-filter"
            variants={filterVariants}
          >
            <motion.button
              className="filter-btn"
              onClick={() => navigate('/projects')}
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
              className={`filter-btn ${'commercial' === 'commercial' ? 'active' : ''}`}
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
          <p className="section-subtitle">A showcase of our innovative commercial constructions and developments</p>
          <div className="gallery-grid">
            {commercialProjects.map((project, index) => (
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
          <h2>Why Choose Our Commercial Projects</h2>
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
            <h2>Ready to Start Your Commercial Project?</h2>
            <p>Let's discuss your commercial construction needs and create a space that drives business growth and success.</p>
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

export default Commercial;