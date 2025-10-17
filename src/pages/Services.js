import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/Services.css';
const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      icon: "🏠",
      title: "Residential Construction",
      description: "Custom home building and residential projects tailored to your lifestyle.",
      details: "From dream homes to luxury villas and high-rise residential complexes, we bring your vision to life with precision and quality craftsmanship.",
      features: ["Custom Home Building", "Home Renovations", "Kitchen & Bath Remodels", "Room Additions", "High Rise Residential", "Luxury Villas"]
    },
    {
      id: 2,
      icon: "🏢",
      title: "Commercial Construction",
      description: "Office buildings and commercial spaces designed for business success.",
      details: "We create commercial spaces that enhance productivity and reflect your brand identity, from corporate offices to retail establishments.",
      features: ["Office Buildings", "Retail Spaces", "Restaurants", "Commercial Renovations", "Shopping Centers", "Corporate Campuses"]
    },
    {
      id: 3,
      icon: "🏭",
      title: "Industrial Construction",
      description: "Robust industrial facilities and manufacturing plants.",
      details: "We build durable and efficient industrial facilities designed to meet the demanding requirements of manufacturing and production.",
      features: ["Manufacturing Plants", "Warehouses", "Industrial Facilities", "Processing Plants", "Distribution Centers", "Industrial Parks"]
    },
    {
      id: 4,
      icon: "⛪",
      title: "Religious Buildings",
      description: "Sacred spaces that inspire and bring communities together.",
      details: "Creating meaningful religious spaces that serve as centers for worship, community gatherings, and spiritual reflection.",
      features: ["Churches", "Temples", "Mosques", "Community Halls", "Religious Centers", "Prayer Halls"]
    },
    {
      id: 5,
      icon: "🛣️",
      title: "Roads & Infrastructure",
      description: "Modern transportation networks and public infrastructure.",
      details: "Building and maintaining critical transportation infrastructure that connects communities and supports economic growth.",
      features: ["Highways", "Bridges", "Local Roads", "Infrastructure Development", "Transportation Networks", "Public Works"]
    },
    {
      id: 6,
      icon: "🎓",
      title: "Educational Facilities",
      description: "Learning environments that foster education and growth.",
      details: "Constructing modern educational facilities that provide optimal learning environments for students of all ages.",
      features: ["Schools", "Universities", "Libraries", "Research Centers", "Educational Campuses", "Training Facilities"]
    },
    {
      id: 7,
      icon: "🏥",
      title: "Healthcare Facilities",
      description: "Medical centers and healthcare institutions for community wellness.",
      details: "Building state-of-the-art healthcare facilities that meet the highest standards of medical care and patient comfort.",
      features: ["Hospitals", "Clinics", "Medical Centers", "Healthcare Facilities", "Rehabilitation Centers", "Specialty Care Units"]
    },
    {
      id: 8,
      icon: "⚽",
      title: "Sports & Recreational",
      description: "Athletic facilities and recreational spaces for active lifestyles.",
      details: "Creating sports complexes and recreational facilities that promote health, wellness, and community engagement.",
      features: ["Stadiums", "Sports Complexes", "Recreation Centers", "Fitness Facilities", "Athletic Fields", "Swimming Pools"]
    },
    {
      id: 9,
      icon: "🔨",
      title: "Renovation & Remodeling",
      description: "Transform your existing spaces into something extraordinary.",
      details: "Breathe new life into your property with our expert renovation and remodeling services across all building types.",
      features: ["Complete Renovations", "Kitchen Remodels", "Bathroom Updates", "Space Optimization", "Facade Renovations", "Interior Upgrades"]
    },
    {
      id: 10,
      icon: "📊",
      title: "Project Management",
      description: "End-to-end project oversight from concept to completion.",
      details: "Our comprehensive project management ensures your project stays on time and within budget, regardless of scale or complexity.",
      features: ["Budget Management", "Timeline Coordination", "Quality Control", "Stakeholder Communication", "Risk Management", "Contract Administration"]
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
          Comprehensive construction solutions for residential, commercial, industrial, and institutional projects.
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

export default Services;