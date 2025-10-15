import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/Projects.css';

// Import your actual project images
import project1 from '../assets/images/projects/villa.avif';
import project2 from '../assets/images/projects/office-complex.webp';
import project3 from '../assets/images/projects/shopping-center.avif';
import project4 from '../assets/images/projects/industrial-facility.avif';
import project5 from '../assets/images/projects/villa.avif';
import project6 from '../assets/images/projects/industrial-facility.avif';
import project7 from '../assets/images/projects/office-complex.webp';
import project8 from '../assets/images/projects/shopping-center.avif';
import project9 from '../assets/images/projects/industrial-facility.avif';
import project10 from '../assets/images/projects/villa.avif';
import project11 from '../assets/images/projects/office-complex.webp';
import project12 from '../assets/images/projects/shopping-center.avif';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
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
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'sports', name: 'Sports & Recreational' }
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      category: "residential",
      status: "completed",
      year: "2023",
      description: "Contemporary luxury villa with sustainable design features and smart home technology.",
      image: project1,
      features: ["Smart Home Automation", "Sustainable Materials", "Infinity Pool", "Landscaped Gardens"],
      location: "Beverly Hills, CA",
      duration: "18 Months",
      budget: "$4.2M"
    },
    {
      id: 2,
      title: "Downtown Office Complex",
      category: "commercial",
      status: "in-progress",
      year: "2024",
      description: "12-story commercial office building with LEED certification in downtown business district.",
      image: project2,
      features: ["LEED Certified", "Underground Parking", "Rooftop Garden", "Smart Building Systems"],
      location: "New York, NY",
      duration: "24 Months",
      budget: "$15.8M"
    },
    {
      id: 3,
      title: "Regional Shopping Center",
      category: "commercial",
      status: "completed",
      year: "2024",
      description: "Modern shopping mall with 50+ stores, food court, and entertainment facilities.",
      image: project3,
      features: ["50+ Retail Stores", "Food Court", "Cinema Complex", "Ample Parking"],
      location: "Austin, TX",
      duration: "20 Months",
      budget: "$12.3M"
    },
    {
      id: 4,
      title: "Industrial Storage Facility",
      category: "industrial",
      status: "completed",
      year: "2023",
      description: "50,000 sq ft industrial warehouse with advanced logistics and storage systems.",
      image: project4,
      features: ["Climate Control", "Advanced Security", "Loading Docks", "Office Space"],
      location: "Chicago, IL",
      duration: "14 Months",
      budget: "$8.7M"
    },
    {
      id: 5,
      title: "Luxury Apartment Complex",
      category: "residential",
      status: "in-progress",
      year: "2024",
      description: "80-unit luxury apartment building with premium amenities and city views.",
      image: project5,
      features: ["Swimming Pool", "Fitness Center", "Rooftop Lounge", "Concierge Service"],
      location: "Miami, FL",
      duration: "22 Months",
      budget: "$9.5M"
    },
    {
      id: 6,
      title: "Beachfront Hotel Resort",
      category: "commercial",
      status: "planned",
      year: "2025",
      description: "Luxury beachfront hotel and resort with spa, restaurants, and conference facilities.",
      image: project6,
      features: ["Ocean Views", "Spa & Wellness", "Multiple Restaurants", "Conference Center"],
      location: "Maui, HI",
      duration: "30 Months",
      budget: "$25M"
    },
    {
      id: 7,
      title: "Community Church",
      category: "religious",
      status: "completed",
      year: "2023",
      description: "Modern church building with traditional architectural elements and community spaces.",
      image: project7,
      features: ["Main Sanctuary", "Community Hall", "Educational Wings", "Landscaped Grounds"],
      location: "Seattle, WA",
      duration: "16 Months",
      budget: "$3.8M"
    },
    {
      id: 8,
      title: "Highway Infrastructure",
      category: "infrastructure",
      status: "in-progress",
      year: "2024",
      description: "Major highway expansion project with bridges and interchanges.",
      image: project8,
      features: ["6-Lane Highway", "3 Bridges", "Smart Traffic System", "Eco-Friendly Design"],
      location: "Denver, CO",
      duration: "36 Months",
      budget: "$45M"
    },
    {
      id: 9,
      title: "University Campus Building",
      category: "educational",
      status: "completed",
      year: "2023",
      description: "State-of-the-art educational facility for engineering and technology programs.",
      image: project9,
      features: ["Research Labs", "Lecture Halls", "Collaborative Spaces", "Green Roof"],
      location: "Boston, MA",
      duration: "28 Months",
      budget: "$18.2M"
    },
    {
      id: 10,
      title: "Medical Center",
      category: "healthcare",
      status: "planned",
      year: "2025",
      description: "Comprehensive healthcare facility with specialized treatment centers.",
      image: project10,
      features: ["Emergency Department", "Surgical Suites", "Diagnostic Center", "Patient Gardens"],
      location: "Phoenix, AZ",
      duration: "32 Months",
      budget: "$32.5M"
    },
    {
      id: 11,
      title: "Sports Complex",
      category: "sports",
      status: "completed",
      year: "2023",
      description: "Multi-purpose sports facility with indoor and outdoor venues.",
      image: project11,
      features: ["Olympic Pool", "Indoor Arena", "Fitness Center", "Sports Medicine"],
      location: "Atlanta, GA",
      duration: "26 Months",
      budget: "$21.8M"
    },
    {
      id: 12,
      title: "Mixed-Use Development",
      category: "commercial",
      status: "in-progress",
      year: "2024",
      description: "Integrated development with retail, office, and residential spaces.",
      image: project12,
      features: ["Retail Spaces", "Office Towers", "Residential Units", "Public Plaza"],
      location: "San Francisco, CA",
      duration: "40 Months",
      budget: "$65M"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleImageLoad = (projectId) => {
    setImageLoading(prev => ({ ...prev, [projectId]: false }));
  };

  const handleImageError = (projectId) => {
    setImageLoading(prev => ({ ...prev, [projectId]: false }));
    // You could set a fallback image here
  };

  const handleInquireProject = (project) => {
    setSelectedProject(null);
    setTimeout(() => {
      navigate('/contact', { 
        state: { 
          selectedService: project.title,
          projectDetails: project
        }
      });
    }, 300);
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

  const projectModalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      rotateX: 10
    },
    visible: { 
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
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
          Explore our diverse portfolio of successful construction projects across various sectors and categories.
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
              onClick={() => setActiveFilter(filter.id)}
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
          Showing {filteredProjects.length} of {projects.length} projects
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          className="projects-grid"
          layout
        >
          <AnimatePresence>
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
                onClick={() => setSelectedProject(project)}
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
                    <span className="location">📍 {project.location}</span>
                    <span className="duration">⏱️ {project.duration}</span>
                  </div>
                </div>
                
                <motion.span 
                  className="view-details"
                  whileHover={{ x: 5 }}
                >
                  View Details →
                </motion.span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              className="project-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                className="project-modal"
                variants={projectModalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button 
                  className="close-button"
                  onClick={() => setSelectedProject(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ×
                </motion.button>
                
                <motion.div 
                  className="project-image large"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </motion.div>
                
                <motion.div 
                  className="project-status-badge"
                  style={{ backgroundColor: getStatusColor(selectedProject.status) }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {getStatusIcon(selectedProject.status)} {selectedProject.status.replace('-', ' ').toUpperCase()}
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {selectedProject.title}
                </motion.h2>
                
                <motion.p 
                  className="project-description"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {selectedProject.description}
                </motion.p>
                
                <motion.div 
                  className="project-features"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <h4>Key Features:</h4>
                  <div className="features-grid">
                    {selectedProject.features.map((feature, index) => (
                      <motion.span 
                        key={feature}
                        className="feature-tag"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div 
                  className="project-details-grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="detail-card">
                    <span className="detail-icon">📍</span>
                    <div>
                      <strong>Location</strong>
                      <p>{selectedProject.location}</p>
                    </div>
                  </div>
                  <div className="detail-card">
                    <span className="detail-icon">⏱️</span>
                    <div>
                      <strong>Duration</strong>
                      <p>{selectedProject.duration}</p>
                    </div>
                  </div>
                  <div className="detail-card">
                    <span className="detail-icon">💰</span>
                    <div>
                      <strong>Budget</strong>
                      <p>{selectedProject.budget}</p>
                    </div>
                  </div>
                  <div className="detail-card">
                    <span className="detail-icon">📅</span>
                    <div>
                      <strong>Year</strong>
                      <p>{selectedProject.year}</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="modal-actions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.button 
                    className="btn btn-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(null)}
                    style={{ color: '#000' }}
                  >
                    Close
                  </motion.button>
                  <motion.button 
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleInquireProject(selectedProject)}
                  >
                    Contact Us About This Project
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Projects;