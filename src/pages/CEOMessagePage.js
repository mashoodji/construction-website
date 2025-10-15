import React from 'react';
import { motion } from 'framer-motion';
import '../styles/CEOMessage.css';

// Import the CEO photo with your provided path
import ceoPhoto from '../assets/images/ceo_image/image1.webp';

const CEOMessagePage = () => {
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
        stiffness: 100
      }
    }
  };

  const imageVariants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
      rotateY: 180 
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1
      }
    }
  };

  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const values = [
    { icon: "⭐", title: "Quality", description: "Uncompromising excellence in every project" },
    { icon: "🤝", title: "Integrity", description: "Honest and transparent business practices" },
    { icon: "💡", title: "Innovation", description: "Embracing new technologies and methods" },
    { icon: "❤️", title: "Commitment", description: "Dedicated to client satisfaction" }
  ];

  return (
    <motion.div 
      className="ceo-message-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        {/* Enhanced Header Section */}
        <motion.div 
          className="ceo-header"
          variants={containerVariants}
        >
          <motion.div 
            className=""
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          />
          <motion.h1 variants={itemVariants}>Leadership Vision</motion.h1>
          <motion.div className="header-divider" variants={itemVariants} />
          <motion.p 
            className="ceo-subtitle"
            variants={itemVariants}
          >
            A Message from Our CEO
          </motion.p>
        </motion.div>
        
        {/* Main Content Section */}
        <motion.div 
          className="ceo-content"
          variants={containerVariants}
        >
          <motion.div 
            className="ceo-image-section"
            variants={imageVariants}
          >
            <motion.div 
              className="ceo-image-container"
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.div 
                className="ceo-photo-frame"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <img 
                  src={ceoPhoto} 
                  alt="Sardar Saif Us Sajjad - Chief Executive Officer"
                  className="ceo-portrait"
                />
                <motion.div 
                  className="portrait-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="overlay-content">
                    <span className="ceo-name">SARDAR SAIF US SAJJAD</span>
                    <span className="ceo-position">Chief Executive Officer</span>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Enhanced Crown Badge */}
              <motion.div 
                className="leadership-badge"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 0.8,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
              >
                <div className="crown-icon">👑</div>
                <div className="badge-glow" />
              </motion.div>

              {/* CEO Credentials */}
              <motion.div 
                className="ceo-credentials"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="credential-item">
                  <span className="credential-label">Experience</span>
                  <span className="credential-value">20+ Years</span>
                </div>
                <div className="credential-item">
                  <span className="credential-label">Projects</span>
                  <span className="credential-value">500+</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* CEO Message */}
          <motion.div 
            className="ceo-message-content"
            variants={textVariants}
          >
            <motion.div 
              className="message-header"
              variants={itemVariants}
            >
              <motion.h2 
                whileHover={{ 
                  color: "var(--primary)",
                  x: 10
                }}
                transition={{ duration: 0.3 }}
              >
                Building the Future Together
              </motion.h2>
              <motion.div 
                className="quote-mark top"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                
              </motion.div>
            </motion.div>
            
            <div className="message-text">
              <motion.p variants={itemVariants}>
                I believe success is built on vision, integrity, and commitment. Every project we undertake is 
                more than just work — it's a responsibility to deliver excellence, innovation, and long-term value.
              </motion.p>
              
              <motion.p variants={itemVariants}>
                As a CEO, my mission is to create an organization where professionalism meets passion, and 
                where every client feels trust in the quality we deliver. 
              </motion.p>
              
              <motion.p variants={itemVariants}>
                Together with my team, I aim to not only construct buildings, but also to build lasting 
                relationships and a brighter future for all.
              </motion.p>
              
              {/* <motion.p variants={itemVariants}>
                Thank you for considering us for your construction needs. We look forward to building a 
                better future together.
              </motion.p> */}
            </div>
            
            {/* Enhanced Signature */}
            <motion.div 
              className="ceo-signature-section"
              variants={itemVariants}
            >
              <motion.div 
                className="signature-line"
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ delay: 1.2, duration: 1 }}
              />
              
              <motion.div className="signature-content">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  <strong>Sardar Saif Us Sajjad</strong>
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                >
                  Chief Executive Officer
                </motion.p>
                
                <motion.p 
                  className="signature-date"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                >
                  Leading Since 2003
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Core Values Section */}
        <motion.div 
          className="core-values-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Guiding Principles
            </motion.h3>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              The foundation of our success and commitment to excellence
            </motion.p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div 
                key={value.title}
                className="value-card"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  transition: { type: "spring", stiffness: 400 }
                }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring", 
                  stiffness: 100 
                }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="value-icon-container"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="value-icon">{value.icon}</span>
                </motion.div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div 
          className="ceo-cta-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              Ready to Start Your Vision?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Let's discuss how we can bring your vision to life with the same dedication and excellence that defines our work.
            </motion.p>
            <motion.div 
              className="cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="/contact" 
                className="btn btn-primary"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(255, 180, 0, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.a>
              <motion.a 
                href="/about" 
                className="btn btn-secondary"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(45, 62, 80, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Us
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CEOMessagePage;