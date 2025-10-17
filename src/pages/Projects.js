import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/Projects.css';

// Import category images - you can replace these with actual category images
import residentialImg from '../assets/images/projects/temporay/residential.jpeg';
import commercialImg from '../assets/images/projects/temporay/commercial1.jpeg';
import industrialImg from '../assets/images/projects/temporay/industrial.jpeg';
import religiousImg from '../assets/images/projects/temporay/religious.jpeg';
import infrastructureImg from '../assets/images/projects/temporay/infrastructure.png';
import educationalImg from '../assets/images/projects/temporay/educational.jpeg';
import roadsImg from '../assets/images/projects/temporay/roads.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [imageLoading, setImageLoading] = useState({});
  const navigate = useNavigate();

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'industrial', name: 'Industrial' },
    { id: 'religious', name: 'Religious' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'educational', name: 'Educational' },
    { id: 'road', name: 'Road' }
  ];

  const categoryProjects = [
    {
      id: 'residential',
      title: "Residential Projects",
      category: "residential",
      status: "completed",
      year: "",
      description: "Luxury villas, apartment complexes, and modern housing projects designed for comfort and elegance.",
      image: residentialImg,
      features: ["Modern Villas", "Apartment Complexes", "Smart Homes", "Luxury Finishes"],
      projectCount: "12+ Projects",
      duration: "Various"
    },
    {
      id: 'commercial',
      title: "Commercial Projects",
      category: "commercial",
      status: "completed",
      year: "",
      description: "Office towers, shopping malls, and commercial plazas built for business excellence.",
      image: commercialImg,
      features: ["Office Towers", "Shopping Malls", "Commercial Plazas", "Business Centers"],
      projectCount: "8+ Projects",
      duration: "Various"
    },
    {
      id: 'industrial',
      title: "Industrial Projects",
      category: "industrial",
      status: "completed",
      year: "",
      description: "Warehouses, factories, and industrial facilities with advanced infrastructure.",
      image: industrialImg,
      features: ["Warehouses", "Manufacturing Units", "Storage Facilities", "Industrial Complexes"],
      projectCount: "6+ Projects",
      duration: "Various"
    },
    {
      id: 'religious',
      title: "Religious Projects",
      category: "religious",
      status: "completed",
      year: "",
      description: "Beautiful mosques and religious centers with traditional and modern architecture.",
      image: religiousImg,
      features: ["Community Mosques", "Islamic Centers", "Prayer Halls", "Religious Complexes"],
      projectCount: "4+ Projects",
      duration: "Various"
    },
    {
      id: 'infrastructure',
      title: "Infrastructure Projects",
      category: "infrastructure",
      status: "completed",
      year: "",
      description: "Roads, bridges, and public infrastructure developments across Pakistan.",
      image: infrastructureImg,
      features: ["Road Networks", "Bridges", "Public Works", "Development Projects"],
      projectCount: "5+ Projects",
      duration: "Various"
    },
    {
      id: 'educational',
      title: "Educational Projects",
      category: "educational",
      status: "completed",
      year: "",
      description: "Schools, colleges, and university buildings for the future of education.",
      image: educationalImg,
      features: ["University Blocks", "Schools", "Libraries", "Educational Complexes"],
      projectCount: "7+ Projects",
      duration: "Various"
    },
   {
    id: 'roads',
    title: "Roads Construction Projects",
    category: "roads",
    status: "completed",
    year: "",
    description: "High-quality road networks, highways, and transportation infrastructure built with precision and durability for smooth connectivity.",
    image: roadsImg, 
    features: ["Highways", "Expressways", "Urban Roads", "Rural Roads", "Bridges", "Flyovers"],
    projectCount: "15+ Projects",
    duration: "Various"
  }

  ];

  const filteredProjects = activeFilter === 'all' 
    ? categoryProjects 
    : categoryProjects.filter(project => project.category === activeFilter);

  const handleImageLoad = (projectId) => {
    setImageLoading(prev => ({ ...prev, [projectId]: false }));
  };

  const handleImageError = (projectId) => {
    setImageLoading(prev => ({ ...prev, [projectId]: false }));
  };

  const handleCategoryClick = (categoryId) => {
    // Navigate to category-specific project page
      navigate(`/${categoryId}`);
  };

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
    
    // If it's not "all", navigate to the category page
    if (filterId !== 'all') {
      navigate(`/${filterId}`);
    }
  };

  const handleInquireProject = (project, e) => {
    e.stopPropagation(); // Prevent navigation to project page
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
      className="projects-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.h1 variants={itemVariants}>Our Projects</motion.h1>
        
        <motion.p 
          className="projects-intro"
          variants={itemVariants}
        >
          Explore our diverse portfolio of successful construction projects across various categories, 
          showcasing our commitment to quality and excellence in building Pakistan's infrastructure.
        </motion.p>
        
        {/* Filter Buttons */}
        <motion.div 
          className="projects-filter"
          variants={filterVariants}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => handleFilterClick(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Projects Counter */}
        <motion.div 
          className="projects-counter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {activeFilter === 'all' ? (
            <>Showing all {categoryProjects.length} project categories with completed and ongoing developments</>
          ) : (
            <>Showing projects in <strong>{filters.find(f => f.id === activeFilter)?.name}</strong> category</>
          )}
        </motion.div>
        
        {/* Category Projects Grid */}
        <motion.div 
          className="projects-grid"
          layout
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-item"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              layout
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { type: "spring", stiffness: 400 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryClick(project.id)}
            >
              <motion.div 
                className="project-image"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {imageLoading[project.id] !== false && (
                  <div className="image-skeleton">
                    <div className="skeleton-loader"></div>
                  </div>
                )}
                <img 
                  src={project.image} 
                  alt={project.title}
                  onLoad={() => handleImageLoad(project.id)}
                  onError={() => handleImageError(project.id)}
                  style={{ 
                    opacity: imageLoading[project.id] === false ? 1 : 0 
                  }}
                />
              </motion.div>
              
              <motion.div 
                className="project-badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                style={{ backgroundColor: getStatusColor(project.status) }}
              >
                {getStatusIcon(project.status)} {project.status.replace('-', ' ').toUpperCase()}
              </motion.div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-category">{project.category} • {project.year}</p>
                <p className="project-description">{project.description}</p>
                
                <div className="project-meta">
                  <span className="project-count">📊 {project.projectCount}</span>
                  <span className="duration">⏱️ {project.duration}</span>
                </div>

                <div className="features-preview">
                  {project.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                  {project.features.length > 3 && (
                    <span className="feature-tag more">
                      +{project.features.length - 3} more
                    </span>
                  )}
                </div>
              </div>
              
              <div className="project-actions">
                <motion.span 
                  className="view-details"
                  whileHover={{ x: 5 }}
                >
                  View Projects →
                </motion.span>
                <motion.button 
                  className="inquire-btn"
                  onClick={(e) => handleInquireProject(project, e)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Inquire
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;