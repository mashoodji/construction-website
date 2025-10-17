import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/Residential.css';

// Import educational project images
import educational1 from '../assets/images/projects/Educational/1.jpg';
import educational2 from '../assets/images/projects/Educational/2.jpg';
import educational3 from '../assets/images/projects/Educational/3.jpeg';
import educational4 from '../assets/images/projects/Educational/4.jpg';
import educational5 from '../assets/images/projects/Educational/5.jpeg';
import educational6 from '../assets/images/projects/Educational/6.jpg';

const Educational = () => {
  const [imageLoading, setImageLoading] = useState({});
  const navigate = useNavigate();

  const educationalProjects = [
    {
      id: 1,
      title: "University Academic Block",
      type: "University Building",
      status: "completed",
      year: "2023",
      image: educational1,
    },
    {
      id: 2,
      title: "School Campus - Model Town",
      type: "School Campus",
      status: "completed",
      year: "2024",
      image: educational2,
    },
    {
      id: 3,
      title: "College Science Block",
      type: "College Building",
      status: "in-progress",
      year: "2024",
      image: educational3,
    },
    {
      id: 4,
      title: "Library Complex - University",
      type: "Library",
      status: "completed",
      year: "2023",
      image: educational4,
    },
    {
      id: 5,
      title: "Educational Complex - DHA",
      type: "Educational Complex",
      status: "completed",
      year: "2023",
      image: educational5,
    },
    {
      id: 6,
      title: "Vocational Training Center",
      type: "Training Center",
      status: "planned",
      year: "2025",
      image: educational6,
    }
  ];

  const projectHighlights = [
    {
      title: "Learning Environments",
      description: "We design educational spaces that inspire learning, creativity, and academic excellence with optimal lighting, acoustics, and functional layouts.",
      icon: "🎓"
    },
    {
      title: "Future-Ready Facilities",
      description: "Our educational projects incorporate modern technology, flexible learning spaces, and sustainable features to prepare students for the future.",
      icon: "🔬"
    },
    {
      title: "Community Impact",
      description: "Every educational facility we build contributes to community development, creating spaces where knowledge is shared and futures are shaped.",
      icon: "🌟"
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
          <h1>Educational Projects</h1>
          <p className="page-intro">
            Explore our portfolio of inspiring educational facilities including schools, colleges, 
            and university buildings designed to foster learning, innovation, and academic excellence.
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
              className="filter-btn"
              onClick={() => navigate('/infrastructure')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Infrastructure
            </motion.button>
            <motion.button
              className={`filter-btn ${'educational' === 'educational' ? 'active' : ''}`}
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
          <p className="section-subtitle">A showcase of our inspiring educational constructions</p>
          <div className="gallery-grid">
            {educationalProjects.map((project, index) => (
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
          <h2>Why Choose Our Educational Projects</h2>
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
            <h2>Ready to Build Your Educational Facility?</h2>
            <p>Let's discuss your educational construction needs and create inspiring spaces where future generations can learn and grow.</p>
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

export default Educational;