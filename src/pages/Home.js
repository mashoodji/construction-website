import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
        stiffness: 100,
        damping: 10
      }
    }
  };

  const statVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.5
      }
    }
  };

  const featureVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
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

  const features = [
    {
      id: 1,
      icon: "🏗️",
      title: "Quality Construction",
      shortDesc: "We use only the highest quality materials and latest construction techniques.",
      fullDesc: "Our commitment to quality construction is unwavering. We utilize premium materials, advanced construction techniques, and rigorous quality control processes to ensure every project meets the highest standards of durability, safety, and aesthetic appeal.",
      benefits: [
        "Premium materials from trusted suppliers",
        "Advanced construction methodologies",
        "Rigorous quality control at every stage",
        "Sustainable and eco-friendly practices",
        "Compliance with international standards"
      ],
      stats: "99% Client Satisfaction Rate"
    },
    {
      id: 2,
      icon: "⏱️",
      title: "On-Time Delivery",
      shortDesc: "We complete projects within deadlines without compromising quality.",
      fullDesc: "Time is money, and we respect both. Our project management expertise ensures that every project is delivered on schedule through meticulous planning, efficient resource allocation, and proactive problem-solving.",
      benefits: [
        "Advanced project planning and scheduling",
        "Efficient resource management",
        "Proactive risk mitigation",
        "Regular progress monitoring",
        "Streamlined communication channels"
      ],
      stats: "95% Projects Delivered On Time"
    },
    {
      id: 3,
      icon: "💼",
      title: "Professional Team",
      shortDesc: "Our experienced professionals ensure excellence in every project.",
      fullDesc: "Our team comprises industry veterans, certified professionals, and skilled craftsmen who bring decades of combined experience to your project. Continuous training and development keep us at the forefront of construction innovation.",
      benefits: [
        "Certified and licensed professionals",
        "Decades of combined experience",
        "Continuous training and development",
        "Specialized expertise across sectors",
        "Strong attention to detail"
      ],
      stats: "50+ Expert Professionals"
    },
    {
      id: 4,
      icon: "💰",
      title: "Competitive Pricing",
      shortDesc: "Get the best value for your investment with our transparent pricing.",
      fullDesc: "We believe in transparent, competitive pricing without hidden costs. Our efficient operations and strategic partnerships allow us to offer exceptional value while maintaining the highest quality standards.",
      benefits: [
        "Transparent cost breakdowns",
        "No hidden charges",
        "Value engineering solutions",
        "Strategic material sourcing",
        "Cost optimization without quality compromise"
      ],
      stats: "Average 15% Cost Savings"
    },
    {
      id: 5,
      icon: "🛡️",
      title: "Safety First",
      shortDesc: "Comprehensive safety protocols for every project.",
      fullDesc: "Safety is our top priority. We implement rigorous safety protocols, regular training, and state-of-the-art safety equipment to protect our team, clients, and the public on every construction site.",
      benefits: [
        "OSHA-compliant safety protocols",
        "Regular safety training and drills",
        "Advanced safety equipment",
        "Daily safety inspections",
        "Zero-accident commitment"
      ],
      stats: "Zero Major Accidents in 5 Years"
    },
    {
      id: 6,
      icon: "🌱",
      title: "Sustainable Solutions",
      shortDesc: "Eco-friendly construction practices for a better future.",
      fullDesc: "We integrate sustainable practices into every project, from material selection to construction methods, helping reduce environmental impact while creating healthier, more efficient buildings.",
      benefits: [
        "LEED certification support",
        "Energy-efficient designs",
        "Sustainable material sourcing",
        "Waste reduction strategies",
        "Green building technologies"
      ],
      stats: "30% Reduced Carbon Footprint"
    }
  ];

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handleExploreProjects = () => {
    navigate('/projects');
  };

  return (
    <motion.div 
      className="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            variants={containerVariants}
          >
            <motion.h1 
              className="hero-title"
              variants={itemVariants}
            >
              Building <span className="highlight">Excellence</span> in Every Project
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              variants={itemVariants}
            >
              Premier construction partners delivering innovative, sustainable, and high-quality building solutions for residential, commercial, and industrial projects worldwide.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              variants={itemVariants}
            >
              <motion.button 
                className="btn btn-primary"
                onClick={handleExploreProjects}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(255, 180, 0, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Portfolio
              </motion.button>
              <motion.button 
                className="btn btn-secondary"
                onClick={handleGetStarted}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-stats"
            variants={containerVariants}
          >
            {[
              { number: "750+", text: "Projects Successfully Delivered", icon: "🏆" },
              { number: "25+", text: "Years of Excellence", icon: "⭐" },
              { number: "150+", text: "Expert Professionals", icon: "👷" },
              { number: "50+", text: "Industry Awards", icon: "🎯" }
            ].map((stat, index) => (
              <motion.div 
                key={stat.text}
                className="stat-item"
                variants={statVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <h3>{stat.number}</h3>
                <p>{stat.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="features">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h2 
              className="section-title"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Why Choose Us
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              Discover what sets us apart in the construction industry and why we're the trusted choice for projects of all scales.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="feature-card"
                variants={featureVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFeature(feature)}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div 
                  className="feature-icon"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3>{feature.title}</h3>
                <p>{feature.shortDesc}</p>
                <motion.span 
                  className="learn-more"
                  whileHover={{ x: 5 }}
                >
                  Learn More →
                </motion.span>
              </motion.div>
            ))}
          </motion.div>

          {/* Feature Detail Modal */}
          <AnimatePresence>
            {selectedFeature && (
              <motion.div 
                className="feature-modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedFeature(null)}
              >
                <motion.div 
                  className="feature-modal"
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.button 
                    className="close-button"
                    onClick={() => setSelectedFeature(null)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ color: '#000' }}
                  >
                    ×
                  </motion.button>
                  
                  <motion.div 
                    className="feature-icon large"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    {selectedFeature.icon}
                  </motion.div>
                  
                  <h2>{selectedFeature.title}</h2>
                  <p className="feature-detail">{selectedFeature.fullDesc}</p>
                  
                  <motion.div 
                    className="feature-stats"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="stat-badge">{selectedFeature.stats}</span>
                  </motion.div>
                  
                  <div className="feature-benefits">
                    <h4>Key Benefits:</h4>
                    <ul>
                      {selectedFeature.benefits.map((benefit, index) => (
                        <motion.li
                          key={benefit}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <motion.button 
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleGetStarted}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    Start Your Project
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2>Ready to Start Your Construction Project?</h2>
            <p>Let's discuss your vision and turn it into reality with our expert construction services.</p>
            <motion.button 
              className="btn btn-primary large"
              onClick={handleGetStarted}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(255, 180, 0, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;