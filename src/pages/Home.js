import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';

const Home = () => {
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
        stiffness: 100
      }
    }
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
              Building Your Dreams with <span className="highlight">Precision</span> & <span className="highlight">Quality</span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              variants={itemVariants}
            >
              Leading construction company with over 20 years of experience in residential, commercial, and industrial projects.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              variants={itemVariants}
            >
              <motion.a 
                href="/projects" 
                className="btn btn-primary"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(255, 180, 0, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Projects
              </motion.a>
              <motion.a 
                href="/contact" 
                className="btn btn-secondary"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Quote
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-stats"
            variants={containerVariants}
          >
            {[
              { number: "500+", text: "Projects Completed" },
              { number: "20+", text: "Years Experience" },
              { number: "50+", text: "Expert Team Members" },
              { number: "25+", text: "Awards Won" }
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
                <h3>{stat.number}</h3>
                <p>{stat.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.h2>
          
          <div className="features-grid">
            {[
              { icon: "🏗️", title: "Quality Construction", desc: "We use only the highest quality materials and latest construction techniques." },
              { icon: "⏱️", title: "On-Time Delivery", desc: "We complete projects within deadlines without compromising quality." },
              { icon: "💼", title: "Professional Team", desc: "Our experienced professionals ensure excellence in every project." },
              { icon: "💰", title: "Competitive Pricing", desc: "Get the best value for your investment with our transparent pricing." }
            ].map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="feature-card"
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10
                }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div 
                  className="feature-icon"
                  whileHover={{ scale: 1.2 }}
                >
                  {feature.icon}
                </motion.div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;