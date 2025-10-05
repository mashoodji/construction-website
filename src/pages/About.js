import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
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

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const teamMembers = [
    { name: "John Smith", role: "CEO & Founder", emoji: "👔" },
    { name: "Sarah Johnson", role: "Project Manager", emoji: "👷‍♀️" },
    { name: "Mike Chen", role: "Head Architect", emoji: "📐" },
    { name: "Emily Davis", role: "Quality Control", emoji: "✅" }
  ];

  return (
    <motion.div 
      className="about-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.h1 variants={itemVariants}>About Our Company</motion.h1>
        
        <motion.div 
          className="about-content"
          variants={containerVariants}
        >
          <motion.p variants={itemVariants}>
            We are a leading construction company with over 20 years of experience in building dreams and shaping skylines.
          </motion.p>
          
          <motion.div 
            className="about-sections"
            variants={containerVariants}
          >
            <motion.section 
              className="about-section"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              <motion.h2 
                whileHover={{ color: "var(--primary)" }}
                transition={{ duration: 0.3 }}
              >
                Our History
              </motion.h2>
              <p>Founded in 2003, we've grown from a small local contractor to a renowned construction company serving clients nationwide.</p>
            </motion.section>
            
            <motion.section 
              className="about-section"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              <motion.h2 
                whileHover={{ color: "var(--primary)" }}
                transition={{ duration: 0.3 }}
              >
                Our Mission
              </motion.h2>
              <p>To deliver exceptional construction services with quality, safety, and innovation at the forefront of everything we do.</p>
            </motion.section>
            
            <motion.section 
              className="about-section"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              <motion.h2 
                whileHover={{ color: "var(--primary)" }}
                transition={{ duration: 0.3 }}
              >
                Our Vision
              </motion.h2>
              <p>To be the most trusted and innovative construction partner, transforming communities through excellence in building.</p>
            </motion.section>
          </motion.div>

          {/* Team Section */}
          <motion.div 
            className="team-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Meet Our Leadership Team</h2>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={member.name}
                  className="team-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 10,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring", 
                    stiffness: 100 
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="team-emoji"
                    whileHover={{ 
                      scale: 1.3,
                      rotate: [0, -10, 10, 0]
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {member.emoji}
                  </motion.div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;