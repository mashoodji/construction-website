import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/ArchitecturalDesign.css';

const ArchitecturalDesign = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      icon: "🏠",
      title: "Residential Design",
      description: "Custom home designs and residential architectural solutions.",
      details: "From dream homes to luxury villas and residential complexes, we create innovative designs that blend functionality with aesthetic appeal.",
      features: ["Custom Home Design", "Villa Architecture", "Apartment Complexes", "Residential Master Planning", "Sustainable Housing", "Interior-Exterior Integration"]
    },
    {
      id: 2,
      icon: "🏢",
      title: "Commercial Design",
      description: "Innovative commercial spaces designed for business excellence.",
      details: "We design commercial buildings that enhance productivity, reflect brand identity, and create inspiring work environments.",
      features: ["Office Building Design", "Retail Space Planning", "Shopping Mall Architecture", "Commercial Complexes", "Corporate Campuses", "Mixed-Use Developments"]
    },
    {
      id: 3,
      icon: "🎨",
      title: "Concept Design",
      description: "Creative conceptualization and initial design development.",
      details: "Transforming ideas into visual concepts through sketches, mood boards, and preliminary designs that capture your vision.",
      features: ["Design Conceptualization", "Mood Boards", "Preliminary Sketches", "Design Development", "Creative Direction", "Vision Establishment"]
    },
    {
      id: 4,
      icon: "📐",
      title: "3D Modeling & Visualization",
      description: "Realistic 3D representations of architectural projects.",
      details: "Bringing designs to life with detailed 3D models, renderings, and virtual walkthroughs for better decision making.",
      features: ["3D Architectural Modeling", "Photorealistic Rendering", "Virtual Reality Walkthroughs", "Animation Videos", "Material Visualization", "Lighting Studies"]
    },
    {
      id: 5,
      icon: "📋",
      title: "Architectural Planning",
      description: "Comprehensive space planning and functional layouts.",
      details: "Creating efficient and practical floor plans that optimize space utilization while maintaining aesthetic integrity.",
      features: ["Space Planning", "Floor Plan Design", "Circulation Analysis", "Functional Layouts", "Zoning Compliance", "Accessibility Planning"]
    },
    {
      id: 6,
      icon: "🏛️",
      title: "Institutional Design",
      description: "Architectural solutions for educational and public institutions.",
      details: "Designing inspiring educational and institutional spaces that foster learning, collaboration, and community engagement.",
      features: ["School & University Design", "Library Architecture", "Government Buildings", "Community Centers", "Cultural Institutions", "Public Facilities"]
    },
    {
      id: 7,
      icon: "🏥",
      title: "Healthcare Design",
      description: "Healing environments designed for patient care and wellness.",
      details: "Creating healthcare facilities that prioritize patient comfort, staff efficiency, and medical functionality.",
      features: ["Hospital Design", "Clinic Planning", "Medical Office Buildings", "Healthcare Facilities", "Patient Room Design", "Medical Space Planning"]
    },
    {
      id: 8,
      icon: "🌿",
      title: "Sustainable Design",
      description: "Eco-friendly and energy-efficient architectural solutions.",
      details: "Incorporating sustainable practices, green building principles, and energy-efficient systems into architectural designs.",
      features: ["Green Building Design", "LEED Certification", "Energy Efficiency", "Sustainable Materials", "Passive Design", "Environmental Integration"]
    },
    {
      id: 9,
      icon: "🔄",
      title: "Renovation Design",
      description: "Transforming existing spaces with innovative redesigns.",
      details: "Breathing new life into existing structures through creative renovation designs that enhance functionality and aesthetics.",
      features: ["Building Renovation", "Space Reconfiguration", "Facade Redesign", "Interior Remodeling", "Adaptive Reuse", "Heritage Restoration"]
    },
    {
      id: 10,
      icon: "📊",
      title: "Design Consultation",
      description: "Expert architectural advice and design guidance.",
      details: "Providing professional consultation services to guide your project from initial concept through to design development.",
      features: ["Design Strategy", "Architectural Advice", "Project Feasibility", "Design Review", "Code Compliance", "Technical Guidance"]
    }
  ];

  const handleGetService = (service) => {
    // Close the modal first
    setSelectedService(null);
    
    // Navigate to contact page after a small delay for smooth transition
    setTimeout(() => {
      navigate('/contact', { 
        state: { 
          selectedService: service.title,
          serviceDetails: service
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div 
      className="architectural-design-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.h1 variants={itemVariants}>Architectural Design Services</motion.h1>
        
        <motion.p 
          className="services-intro"
          variants={itemVariants}
        >
          Innovative architectural solutions that blend creativity, functionality, and sustainability for exceptional built environments.
        </motion.p>
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="service-item"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { type: "spring", stiffness: 400 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedService(service)}
            >
              <motion.div 
                className="service-icon"
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
              </motion.div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <motion.span 
                className="learn-more"
                whileHover={{ x: 5 }}
              >
                Learn More →
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div 
              className="service-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            >
              <motion.div 
                className="service-modal"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button 
                  className="close-button"
                  onClick={() => setSelectedService(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ×
                </motion.button>
                
                <motion.div 
                  className="service-icon large"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  {selectedService.icon}
                </motion.div>
                
                <h2>{selectedService.title}</h2>
                <p className="service-detail">{selectedService.details}</p>
                
                <div className="service-features">
                  <h4>What We Offer:</h4>
                  <ul>
                    {selectedService.features.map((feature, index) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <motion.button 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleGetService(selectedService)}
                >
                  Get This Service
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ArchitecturalDesign;