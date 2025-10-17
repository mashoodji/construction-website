import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/Residential.css';

// Import residential project images
import residential1 from '../assets/images/projects/Residential/2.jpg';
import residential2 from '../assets/images/projects/Residential/18.jpg';
import residential3 from '../assets/images/projects/Residential/19.jpg';
import residential4 from '../assets/images/projects/Residential/20.jpg';
import residential5 from '../assets/images/projects/Residential/21.jpg';
import residential6 from '../assets/images/projects/Residential/22.jpg';
import residential7 from '../assets/images/projects/Residential/23.jpg';
import residential8 from '../assets/images/projects/Residential/24b.jpg';

const Residential = () => {
  const [imageLoading, setImageLoading] = useState({});
  const navigate = useNavigate();

  const residentialProjects = [
    {
      id: 1,
      title: "Modern Luxury Villa - DHA Phase 6",
      type: "Luxury Villa",
      status: "completed",
      year: "2023",
      image: residential1,
    },
    {
      id: 2,
      title: "Executive Apartment Complex - Bahria Town",
      type: "Apartment Complex",
      status: "completed",
      year: "2024",
      image: residential2,
    },
    {
      id: 3,
      title: "Contemporary Family Home - Model Town",
      type: "Single Family Home",
      status: "completed",
      year: "2023",
      image: residential3,
    },
    {
      id: 4,
      title: "Luxury Farmhouse - Raiwind Road",
      type: "Farmhouse",
      status: "completed",
      year: "2024",
      image: residential4,
    },
    {
      id: 5,
      title: "Modern Townhouse - Gulberg",
      type: "Townhouse",
      status: "completed",
      year: "2023",
      image: residential5,
    },
    {
      id: 6,
      title: "Executive Villa - Defence Phase 5",
      type: "Executive Villa",
      status: "completed",
      year: "2024",
      image: residential6,
    },
    {
      id: 7,
      title: "Gated Community Homes - WAPDA Town",
      type: "Community Housing",
      status: "completed",
      year: "2024",
      image: residential7,
    },
    {
      id: 8,
      title: "Luxury Penthouse - MM Alam Road",
      type: "Penthouse",
      status: "completed",
      year: "2025",
      image: residential8,
    },
    {
      id: 9,
      title: "Luxury Penthouse - MM Alam Road",
      type: "Penthouse",
      status: "completed",
      year: "2025",
      image: residential8,
    }
  ];

  const projectHighlights = [
    {
      title: "Quality Craftsmanship",
      description: "Every residential project we undertake is built with meticulous attention to detail and superior craftsmanship. We use only the highest quality materials and employ skilled artisans to ensure lasting beauty and durability.",
      icon: "🏗️"
    },
    {
      title: "Modern Design & Innovation",
      description: "Our residential designs blend contemporary aesthetics with functional living spaces. We incorporate smart home technology, energy-efficient systems, and innovative architectural solutions to create homes that are both beautiful and practical.",
      icon: "💡"
    },
    {
      title: "Client-Centric Approach",
      description: "We work closely with our clients throughout the construction process, ensuring their vision is brought to life. Our transparent communication and commitment to excellence have earned us a reputation for delivering beyond expectations.",
      icon: "🤝"
    }
  ];

  const handleImageLoad = (projectId) => {
    setImageLoading(prev => ({ ...prev, [projectId]: false }));
  };

  const handleImageError = (projectId) => {
    setImageLoading(prev => ({ ...prev, [projectId]: false }));
  };

  const handleInquireProject = (project) => {
    navigate('/contact', { 
      state: { 
        selectedService: project.title,
        projectDetails: project
      }
    });
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
        {/* Header Section */}
        <motion.div className="residential-header" variants={itemVariants}>
          <h1>Residential Projects</h1>
          <p className="page-intro">
            Discover our exceptional portfolio of residential properties, from luxury villas to modern apartments. 
            Each project reflects our commitment to quality craftsmanship, innovative design, and client satisfaction.
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
              className={`filter-btn ${'residential' === 'residential' ? 'active' : ''}`}
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

        {/* Image Gallery Section */}
        <motion.section className="gallery-section" variants={itemVariants}>
          <h2>Project Gallery</h2>
          <p className="section-subtitle">A visual journey through our exceptional residential constructions</p>
          <div className="gallery-grid">
            {residentialProjects.map((project, index) => (
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

        {/* Project Highlights Section */}
        <motion.section className="highlights-section" variants={itemVariants}>
          <h2>Why Choose Our Residential Projects</h2>
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

        {/* CTA Section */}
        <motion.section className="cta-section" variants={itemVariants}>
          <div className="cta-content">
            <h2>Ready to Build Your Dream Home?</h2>
            <p>Let's discuss your residential project requirements and bring your vision to life with our expert construction services.</p>
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

export default Residential;