import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Contact = () => {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    service: '',
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const mapRef = useRef(null);

  const companyLocation = {
    lat: 31.5204,
    lng: 74.3587,
    address: "Plaza # 97-B Main Boulevard Jubilee Town Housing Scheme Canal Road Lahore"
  };

  useEffect(() => {
    const initializeMap = () => {
      if (!mapRef.current) return;

      const mapContainer = mapRef.current;
      
      mapContainer.innerHTML = '';
      
      const mapContent = document.createElement('div');
      mapContent.className = 'map-content';
      mapContent.innerHTML = `
        <div class="map-icon">📍</div>
        <h3>Our Location</h3>
        <p class="company-address">${companyLocation.address}</p>
        <div class="map-actions">
          <a href="https://maps.google.com/?q=${encodeURIComponent(companyLocation.address)}" 
             target="_blank" 
             rel="noopener noreferrer"
             class="map-link">
            🗺️ View on Map
          </a>
          <a href="https://www.google.com/maps/dir//${encodeURIComponent(companyLocation.address)}" 
             target="_blank" 
             rel="noopener noreferrer"
             class="map-link directions">
            🧭 Get Directions
          </a>
        </div>
      `;
      
      mapContainer.appendChild(mapContent);
    };

    if (location.state?.selectedService) {
      const service = location.state.selectedService;
      setSelectedService(service);
      setFormData(prev => ({
        ...prev,
        subject: `Inquiry about ${service}`,
        service: service
      }));
    }
    
    initializeMap();
  }, [location.state]);

  const showNotification = (message, type = 'info') => {
    setSubmitStatus({ message, type });
    setTimeout(() => setSubmitStatus(null), 8000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        service: formData.service,
        subject: formData.subject,
        message: formData.message,
        date: new Date().toLocaleString('en-PK', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      await emailjs.send(
        'service_3ac5i1w',
        'template_3ir65ea',
        templateParams,
        '13-8c6GYCAfSEjmk5'
      );
      
      showNotification(
        `🎉 Thank you ${formData.name}! Your ${formData.service} request has been sent successfully. We'll contact you within 24 hours.`,
        'success'
      );
      
      setFormData({ 
        name: '', 
        email: '', 
        phone: '',
        subject: selectedService ? `Inquiry about ${selectedService}` : '', 
        message: '',
        service: selectedService || ''
      });
      
    } catch (error) {
      console.error('Email sending failed:', error);
      
      if (error.text && error.text.includes('limit')) {
        showNotification(
          `📧 Email limit reached! For immediate assistance, please contact us directly:\n\n` +
          `📞 Call: +92 (321) 883-6371\n` +
          `📱 WhatsApp: +92 (321) 883-6371\n` +
          `✉️ Email: meezandevelopers.official@gmail.com\n\n` +
          `We apologize for the inconvenience and look forward to assisting you directly.`,
          'info'
        );
      } else {
        showNotification(
          `📧 Thank you for your inquiry! For immediate assistance, please contact us directly:\n\n` +
          `📞 Call: +92 (321) 883-6371\n` +
          `📱 WhatsApp: +92 (321) 883-6371\n` +
          `✉️ Email: meezandevelopers.official@gmail.com\n\n` +
          `We've received your ${formData.service} request and will respond shortly.`,
          'info'
        );
      }
      
    } finally {
      setIsSubmitting(false);
    }
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
        stiffness: 100,
        damping: 10
      }
    }
  };

  const contactInfo = [
    {
      icon: "🏢",
      title: "Office Address",
      details: "Plaza # 97-B Main Boulevard Jubilee Town Housing Scheme Canal Road Lahore",
      delay: 0.1,
      highlight: false
    },
    {
      icon: "📞",
      title: "Contact Numbers",
      details: "Mobile: +92 (321) 883-6371\nWhatsApp: +92 (321) 883-6371",
      delay: 0.2,
      highlight: false
    },
    {
      icon: "✉️",
      title: "Email Address",
      details: "meezandevelopers.official@gmail.com",
      delay: 0.3,
      highlight: false
    },
    {
      icon: "🕒",
      title: "Business Hours",
      details: "Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: Closed",
      delay: 0.4,
      highlight: false
    }
  ];

  const services = [
    "Residential Construction",
    "Commercial Construction", 
    "Industrial Construction",
    "Religious Buildings",
    "Roads & Infrastructure",
    "Educational Facilities",
    "Healthcare Facilities",
    "Sports & Recreational",
    "Renovation & Remodeling",
    "Project Management",
    "Other"
  ];

  return (
    <motion.div 
      className="contact-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        {/* Header Section */}
        <motion.div className="contact-header" variants={itemVariants}>
          <motion.h1 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Let's Build Your Vision Together
          </motion.h1>
          <motion.p variants={itemVariants}>
            Get in touch with our construction experts in Lahore. From project consultation to completion, 
            we're here to bring your architectural dreams to life with quality craftsmanship.
          </motion.p>
        </motion.div>

        {/* Status Notification */}
        <AnimatePresence>
          {submitStatus && (
            <motion.div
              className={`status-notification ${submitStatus.type}`}
              initial={{ opacity: 0, y: -50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="status-icon">
                {submitStatus.type === 'success' && '🎉'}
                {submitStatus.type === 'error' && '❌'}
                {submitStatus.type === 'warning' && '⚠️'}
                {submitStatus.type === 'info' && '💡'}
              </div>
              <div className="status-message">
                {submitStatus.message.split('\n').map((line, index) => (
                  <div key={index} className="message-line">
                    {line}
                    {index < submitStatus.message.split('\n').length - 1 && <br />}
                  </div>
                ))}
              </div>
              <button 
                className="close-status"
                onClick={() => setSubmitStatus(null)}
              >
                ×
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Service Notification */}
        <AnimatePresence>
          {selectedService && (
            <motion.div 
              className="service-notification"
              initial={{ opacity: 0, y: -50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.div 
                className="notification-icon"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                🎯
              </motion.div>
              <div className="notification-content">
                <h3>Project Inquiry Ready!</h3>
                <p>You're inquiring about: <strong>{selectedService}</strong></p>
              </div>
              <motion.button 
                className="close-notification"
                onClick={() => {
                  setSelectedService('');
                  setFormData(prev => ({ ...prev, subject: '', service: '' }));
                }}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Main Content Grid */}
        <motion.div 
          className="contact-content"
          variants={containerVariants}
        >
          {/* Contact Information */}
          <motion.div 
            className="contact-info-card"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="card-header">
              <motion.h2 variants={itemVariants}>Get In Touch</motion.h2>
              <motion.div 
                className="header-decoration"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              />
            </div>
            
            <motion.p variants={itemVariants}>
              Visit our office in Jubilee Town, Lahore. We welcome project discussions, 
              site visits, and client consultations to ensure your construction needs are perfectly met.
            </motion.p>
            
            <div className="contact-items">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={info.title}
                  className={`contact-item ${info.highlight ? 'highlight' : ''}`}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ 
                    scale: 1.03,
                    x: 5,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  transition={{ delay: info.delay }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="contact-icon"
                    whileHover={{ 
                      scale: 1.3,
                      rotate: [0, -5, 5, 0]
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {info.icon}
                  </motion.div>
                  <div className="contact-details">
                    <h3>{info.title}</h3>
                    <p className="contact-text">
                      {info.details.split('\n').map((line, i) => (
                        <span key={i} className="contact-line">
                          {line}
                          {i < info.details.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <motion.div 
              className="quick-actions"
              variants={itemVariants}
            >
              <motion.a 
                href="tel:+923218836371"
                className="quick-btn call"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📞 Call Now
              </motion.a>
              <motion.a 
                href="https://wa.me/923218836371"
                className="quick-btn whatsapp"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                💬 WhatsApp
              </motion.a>
              <motion.a 
                href="mailto:meezandevelopers.official@gmail.com"
                className="quick-btn email"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ✉️ Email Us
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="contact-form-card"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="card-header">
              <motion.h2 variants={itemVariants}>Contact Us</motion.h2>
              <motion.div 
                className="header-decoration"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 }}
              />
            </div>
            
            <motion.p variants={itemVariants}>
              Share your project details and we'll provide you with a comprehensive construction quote 
              within 24 hours. All fields marked with * are required for accurate estimation.
            </motion.p>
            
            <motion.form 
              onSubmit={handleSubmit}
              variants={containerVariants}
            >
              <div className="form-row">
                <motion.div className="form-group" variants={itemVariants}>
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Enter your full name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </motion.div>
                
                <motion.div className="form-group" variants={itemVariants}>
                  <label>Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="your.email@example.com" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </motion.div>
              </div>

              <div className="form-row">
                <motion.div className="form-group" variants={itemVariants}>
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="+92 321 8836371" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </motion.div>

                <motion.div className="form-group" variants={itemVariants}>
                  <label>Service Needed *</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="service-select"
                    required
                  >
                    <option value="">Choose a service</option>
                    {services.map(service => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </motion.div>
              </div>
              
              <motion.div className="form-group" variants={itemVariants}>
                <label>Subject *</label>
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Brief description of your project" 
                  required 
                  value={formData.subject}
                  onChange={handleChange}
                />
              </motion.div>
              
              <motion.div className="form-group" variants={itemVariants}>
                <label>Project Details *</label>
                <textarea 
                  name="message"
                  placeholder="Please describe your project requirements, timeline, budget, and any specific needs..." 
                  rows="6" 
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </motion.div>
              
              <motion.button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
                whileHover={{ 
                  scale: isSubmitting ? 1 : 1.05,
                  boxShadow: isSubmitting ? "none" : "0 10px 25px rgba(245, 158, 11, 0.3)"
                }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="btn-spinner"
                    />
                    Processing Your Request...
                  </>
                ) : (
                  <>
                    <span className="btn-icon">📨</span>
                    Send Request
                  </>
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
          <div className="section-header">
            <motion.h3 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Visit Our Office
            </motion.h3>
            <motion.p variants={itemVariants}>
              Located in Jubilee Town, Lahore with easy access for site visits and project consultations.
            </motion.p>
          </div>
          
          <motion.div 
            className="map-container"
            whileHover={{ 
              scale: 1.02,
            }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div 
              ref={mapRef}
              className="interactive-map"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;