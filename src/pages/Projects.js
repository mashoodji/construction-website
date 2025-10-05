import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'industrial', name: 'Industrial' }
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Villa Project",
      category: "residential",
      status: "completed",
      year: "2023",
      description: "Luxury modern villa with sustainable design features",
      image: "🏡"
    },
    {
      id: 2,
      title: "Office Complex",
      category: "commercial",
      status: "in-progress",
      year: "2024",
      description: "12-story commercial office building in downtown",
      image: "🏢"
    },
    {
      id: 3,
      title: "Shopping Mall",
      category: "commercial",
      status: "completed",
      year: "2024",
      description: "Regional shopping center with 50+ stores",
      image: "🛍️"
    },
    {
      id: 4,
      title: "Industrial Warehouse",
      category: "industrial",
      status: "completed",
      year: "2023",
      description: "50,000 sq ft industrial storage facility",
      image: "🏭"
    },
    {
      id: 5,
      title: "Apartment Building",
      category: "residential",
      status: "in-progress",
      year: "2024",
      description: "80-unit luxury apartment complex",
      image: "🏘️"
    },
    {
      id: 6,
      title: "Hotel Resort",
      category: "commercial",
      status: "planned",
      year: "2025",
      description: "Beachfront luxury hotel and resort",
      image: "🏨"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
          variants={itemVariants}
        >
          Explore our portfolio of successful construction projects.
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
                  {project.image}
                </motion.div>
                
                <motion.div 
                  className="project-badge"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  {project.status === 'completed' ? '✅ Completed' : 
                   project.status === 'in-progress' ? '🔄 In Progress' : '📅 Planned'}
                </motion.div>
                
                <h3>{project.title}</h3>
                <p>{project.category} • {project.year}</p>
                
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
                  {selectedProject.image}
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
                  className="project-details"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="detail-item">
                    <strong>Category:</strong> {selectedProject.category}
                  </div>
                  <div className="detail-item">
                    <strong>Status:</strong> {selectedProject.status}
                  </div>
                  <div className="detail-item">
                    <strong>Year:</strong> {selectedProject.year}
                  </div>
                </motion.div>
                
                <motion.button 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  View Full Case Study
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Projects;