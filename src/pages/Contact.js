import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

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

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 2px var(--primary)",
      transition: { duration: 0.2 }
    }
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      details: "123 Construction Street\nCity, State 12345",
      delay: 0.1
    },
    {
      icon: "📞",
      title: "Phone",
      details: "+1 (555) 123-4567\n+1 (555) 987-6543",
      delay: 0.2
    },
    {
      icon: "✉️",
      title: "Email",
      details: "info@constructioncompany.com\nsupport@constructioncompany.com",
      delay: 0.3
    },
    {
      icon: "🕒",
      title: "Business Hours",
      details: "Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM",
      delay: 0.4
    }
  ];

  return (
    <motion.div 
      className="contact-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.h1 variants={itemVariants}>Contact Us</motion.h1>
        
        <motion.p variants={itemVariants}>
          Get in touch with our team for your construction needs. We're here to help bring your project to life!
        </motion.p>
        
        <motion.div 
          className="contact-content"
          variants={containerVariants}
        >
          {/* Contact Information */}
          <motion.div 
            className="contact-info"
            variants={cardVariants}
          >
            <motion.h2 variants={itemVariants}>Get In Touch</motion.h2>
            
            {contactInfo.map((info, index) => (
              <motion.div 
                key={info.title}
                className="contact-item"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={{ 
                  scale: 1.02,
                  x: 10,
                  transition: { type: "spring", stiffness: 400 }
                }}
                transition={{ delay: info.delay }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="contact-icon"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0]
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {info.icon}
                </motion.div>
                <div className="contact-details">
                  <h3>{info.title}</h3>
                  <p>{info.details.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < info.details.split('\n').length - 1 && <br />}
                    </span>
                  ))}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="contact-form"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.01,
              transition: { type: "spring", stiffness: 400 }
            }}
          >
            <motion.h2 variants={itemVariants}>Send us a Message</motion.h2>
            
            <motion.form 
              onSubmit={handleSubmit}
              variants={containerVariants}
            >
              <motion.div 
                className="form-group"
                variants={itemVariants}
              >
                <motion.input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </motion.div>
              
              <motion.div 
                className="form-group"
                variants={itemVariants}
              >
                <motion.input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </motion.div>
              
              <motion.div 
                className="form-group"
                variants={itemVariants}
              >
                <motion.input 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                  required 
                  value={formData.subject}
                  onChange={handleChange}
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </motion.div>
              
              <motion.div 
                className="form-group"
                variants={itemVariants}
              >
                <motion.textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows="5" 
                  required
                  value={formData.message}
                  onChange={handleChange}
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </motion.div>
              
              <motion.button 
                type="submit" 
                className={`btn btn-primary ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
                whileHover={{ 
                  scale: isSubmitting ? 1 : 1.05,
                  boxShadow: isSubmitting ? "none" : "0 10px 25px rgba(255, 180, 0, 0.3)"
                }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              >
                {isSubmitting ? (
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    ⏳
                  </motion.span>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
        
        {/* Map Section */}
        <motion.div 
          className="map-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            variants={itemVariants}
            whileHover={{ color: "var(--primary)" }}
            transition={{ duration: 0.3 }}
          >
            Our Location
          </motion.h3>
          
          <motion.div 
            className="map-container"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
            }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div 
              className="map-placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div 
                className="map-pin"
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                📍
              </motion.div>
              <p>Interactive Map Coming Soon</p>
              <motion.p 
                className="map-note"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                123 Construction Street, City, State 12345
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;