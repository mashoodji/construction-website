import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Services.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: "🏠",
      title: "Residential Construction",
      description: "Custom home building and renovations tailored to your lifestyle.",
      details: "From dream homes to luxury villas, we bring your vision to life with precision and quality craftsmanship.",
      features: ["Custom Home Building", "Home Renovations", "Kitchen & Bath Remodels", "Room Additions"]
    },
    {
      id: 2,
      icon: "🏢",
      title: "Commercial Construction",
      description: "Office buildings and retail spaces designed for business success.",
      details: "We create commercial spaces that enhance productivity and reflect your brand identity.",
      features: ["Office Buildings", "Retail Spaces", "Restaurants", "Commercial Renovations"]
    },
    {
      id: 3,
      icon: "🔨",
      title: "Renovation & Remodeling",
      description: "Transform your existing spaces into something extraordinary.",
      details: "Breathe new life into your property with our expert renovation and remodeling services.",
      features: ["Complete Renovations", "Kitchen Remodels", "Bathroom Updates", "Space Optimization"]
    },
    {
      id: 4,
      icon: "📊",
      title: "Project Management",
      description: "End-to-end project oversight from concept to completion.",
      details: "Our comprehensive project management ensures your project stays on time and within budget.",
      features: ["Budget Management", "Timeline Coordination", "Quality Control", "Stakeholder Communication"]
    }
  ];

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
      className="services-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.h1 variants={itemVariants}>Our Services</motion.h1>
        
        <motion.p 
          className="services-intro"
          variants={itemVariants}
        >
          Comprehensive construction solutions for residential and commercial projects.
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

export default Services;