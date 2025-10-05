import React from 'react';
import { motion } from 'framer-motion';
import '../styles/CEOMessage.css';

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

  const signatureVariants = {
    hidden: { 
      pathLength: 0,
      opacity: 0 
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
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
        <motion.div 
          className="ceo-header"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants}>Message from Our CEO</motion.h1>
          <motion.p 
            className="ceo-title"
            variants={itemVariants}
          >
            John Smith, Chief Executive Officer
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="ceo-content"
          variants={containerVariants}
        >
          <motion.div 
            className="ceo-image"
            variants={imageVariants}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <motion.div 
              className="placeholder-image"
              whileHover={{ 
                boxShadow: "0 20px 40px rgba(255, 180, 0, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="image-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span>CEO Photo</span>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="ceo-badge"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                delay: 0.5,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: 360,
                transition: { duration: 0.5 }
              }}
            >
              👑
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="ceo-message"
            variants={textVariants}
          >
            <motion.h2 
              variants={itemVariants}
              whileHover={{ 
                color: "var(--primary)",
                x: 10
              }}
              transition={{ duration: 0.3 }}
            >
              Building the Future Together
            </motion.h2>
            
            <motion.p variants={itemVariants}>
              Welcome to our construction company. For over two decades, we have been committed 
              to excellence in every project we undertake. Our philosophy is simple: quality, 
              integrity, and innovation in everything we do.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              We believe that great construction is not just about buildings—it's about creating 
              spaces where people can thrive, work, and build memories. Our team of dedicated 
              professionals shares this vision and works tirelessly to bring your dreams to life.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              In today's rapidly evolving world, we embrace sustainable practices and cutting-edge 
              technology to deliver projects that stand the test of time while minimizing our 
              environmental impact.
            </motion.p>

            {/* Core Values */}
            <motion.div 
              className="core-values"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Our Core Values</h3>
              <div className="values-grid">
                {values.map((value, index) => (
                  <motion.div 
                    key={value.title}
                    className="value-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
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
                      className="value-icon"
                      whileHover={{ 
                        scale: 1.3,
                        rotate: [0, -10, 10, 0]
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {value.icon}
                    </motion.div>
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.p variants={itemVariants}>
              Thank you for considering us for your construction needs. We look forward to 
              building a better future together.
            </motion.p>
            
            <motion.div 
              className="ceo-signature"
              variants={itemVariants}
            >
              <motion.div 
                className="signature-line"
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ delay: 1, duration: 1 }}
              />
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <strong>John Smith</strong>
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 }}
              >
                Chief Executive Officer
              </motion.p>
              
              <motion.p 
                className="signature-date"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.9 }}
              >
                Since 2003
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="ceo-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h3
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Ready to Start Your Project?
          </motion.h3>
          <motion.p>
            Let's discuss how we can bring your vision to life with the same dedication and excellence that defines our work.
          </motion.p>
          <motion.a 
            href="/contact" 
            className="btn btn-primary"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(255, 180, 0, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CEOMessagePage;