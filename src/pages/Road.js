import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/Residential.css';

// Import road project images
import road1 from '../assets/images/projects/Roads/1.gif';
import road2 from '../assets/images/projects/Roads/2.jpeg';
import road3 from '../assets/images/projects/Roads/3.jpeg';
import road4 from '../assets/images/projects/Roads/4.jpeg';
import road5 from '../assets/images/projects/Roads/5.jpeg';
import road6 from '../assets/images/projects/Roads/6.jpg';

const Road = () => {
  const [imageLoading, setImageLoading] = useState({});
  const navigate = useNavigate();

  const roadProjects = [
    {
      id: 1,
      title: "Ring Road Southern Loop",
      type: "Expressway",
      status: "completed",
      year: "2023",
      image: road1,
    },
    {
      id: 2,
      title: "Main Boulevard Expansion",
      type: "Boulevard",
      status: "completed",
      year: "2024",
      image: road2,
    },
    {
      id: 3,
      title: "City Underpass Network",
      type: "Underpass System",
      status: "in-progress",
      year: "2024",
      image: road3,
    },
    {
      id: 4,
      title: "Highway Interchange Project",
      type: "Interchange",
      status: "completed",
      year: "2023",
      image: road4,
    },
    {
      id: 5,
      title: "Rural Road Development",
      type: "Rural Roads",
      status: "completed",
      year: "2023",
      image: road5,
    },
    {
      id: 6,
      title: "Smart City Road Network",
      type: "Smart Roads",
      status: "planned",
      year: "2025",
      image: road6,
    }
  ];

  const projectHighlights = [
    {
      title: "Advanced Engineering",
      description: "Our road projects utilize cutting-edge engineering techniques, durable materials, and precision grading to ensure long-lasting, smooth, and safe transportation routes.",
      icon: "🛣️"
    },
    {
      title: "Traffic Optimization",
      description: "We design road networks with intelligent traffic flow systems, proper drainage, and safety features to reduce congestion and improve commuting efficiency.",
      icon: "🚦"
    },
    {
      title: "Community Connectivity",
      description: "Every road project enhances community connectivity, reduces travel time, and contributes to economic development by improving access to businesses and services.",
      icon: "🔗"
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
          <h1>Road Projects</h1>
          <p className="page-intro">
            Discover our comprehensive portfolio of road construction projects including highways, 
            expressways, and urban road networks that connect communities and drive national progress.
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
              className={`filter-btn ${'road' === 'road' ? 'active' : ''}`}
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
          <p className="section-subtitle">A showcase of our modern and efficient road constructions</p>
          <div className="gallery-grid">
            {roadProjects.map((project, index) => (
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
          <h2>Why Choose Our Road Projects</h2>
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
            <h2>Ready to Start Your Road Project?</h2>
            <p>Let's discuss your road construction requirements and build transportation networks that connect communities and drive economic growth.</p>
            <motion.button 
              className="cta-button"
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05 }}s
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

export default Road;