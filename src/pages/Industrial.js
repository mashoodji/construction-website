import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/Residential.css';

// Import industrial project images
import industrial1 from '../assets/images/projects/industrial/1.avif';
import industrial2 from '../assets/images/projects/industrial/2.jpg';
import industrial3 from '../assets/images/projects/industrial/3.jpeg';

const Industrial = () => {
  const [imageLoading, setImageLoading] = useState({});
  const navigate = useNavigate();

  const industrialProjects = [
    {
      id: 1,
      title: "Industrial Warehouse - Sundar Estate",
      type: "Warehouse",
      status: "completed",
      year: "2023",
      image: industrial1,
    },
    {
      id: 2,
      title: "Manufacturing Facility - Quaid-e-Azam",
      type: "Manufacturing Unit",
      status: "completed",
      year: "2024",
      image: industrial2,
    },
    {
      id: 3,
      title: "Storage Complex - Kot Lakhpat",
      type: "Storage Facility",
      status: "in-progress",
      year: "2024",
      image: industrial3,
    },
  ];

  const projectHighlights = [
    {
      title: "Robust Infrastructure",
      description: "Our industrial facilities are built with durable materials and advanced structural engineering to withstand heavy usage and ensure long-term reliability.",
      icon: "🏭"
    },
    {
      title: "Efficient Layouts",
      description: "We design industrial spaces with optimized workflows, efficient material handling systems, and logical layouts that maximize productivity and operational efficiency.",
      icon: "📊"
    },
    {
      title: "Compliance & Safety",
      description: "All our industrial projects adhere to strict safety standards, environmental regulations, and industry-specific compliance requirements for worry-free operations.",
      icon: "🛡️"
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
          <h1>Industrial Projects</h1>
          <p className="page-intro">
            Discover our robust portfolio of industrial facilities including warehouses, manufacturing units, 
            and industrial parks designed for maximum efficiency and productivity.
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
              className={`filter-btn ${'industrial' === 'industrial' ? 'active' : ''}`}
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
          <p className="section-subtitle">A showcase of our durable and efficient industrial constructions</p>
          <div className="gallery-grid">
            {industrialProjects.map((project, index) => (
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
          <h2>Why Choose Our Industrial Projects</h2>
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
            <h2>Ready to Build Your Industrial Facility?</h2>
            <p>Let's discuss your industrial construction requirements and create a space that optimizes your operations and growth.</p>
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

export default Industrial;