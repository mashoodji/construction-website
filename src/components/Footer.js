import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com/meezandevelopers' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/meezandevelopers' },
    { name: 'WhatsApp', icon: '💬', url: 'https://wa.me/+923218836371' }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'Residential Construction',
    'Commercial Construction',
    'Industrial Construction',
    'Religious Buildings',
    'Roads & Infrastructure',
    'Renovation & Remodeling'
  ];

  return (
    <motion.footer 
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <motion.div 
            className="footer-section company-info"
            variants={itemVariants}
          >
            <motion.h3 
              className="footer-logo"
              whileHover={{ scale: 1.05 }}
            >
              🏗️ Meezan Developers
            </motion.h3>
            <p className="company-description">
              Building excellence with precision and quality for over a decade. 
              Your trusted construction partner in Lahore, delivering exceptional 
              residential, commercial, and infrastructure projects.
            </p>
            <div className="contact-info">
              <motion.div 
                className="contact-item"
                whileHover={{ x: 5 }}
              >
                <span className="contact-icon">📞</span>
                <div className="contact-details">
                  <span className="contact-label">Call Us</span>
                  <span className="contact-value">+92 (321) 883-6371</span>
                </div>
              </motion.div>
              <motion.div 
                className="contact-item"
                whileHover={{ x: 5 }}
              >
                <span className="contact-icon">💬</span>
                <div className="contact-details">
                  <span className="contact-label">WhatsApp</span>
                  <span className="contact-value">+92 (311) 178-6646</span>
                </div>
              </motion.div>
              <motion.div 
                className="contact-item"
                whileHover={{ x: 5 }}
              >
                <span className="contact-icon">✉️</span>
                <div className="contact-details">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">meezandevelopers.official@gmail.com</span>
                </div>
              </motion.div>
              <motion.div 
                className="contact-item"
                whileHover={{ x: 5 }}
              >
                <span className="contact-icon">📍</span>
                <div className="contact-details">
                  <span className="contact-label">Address</span>
                  <span className="contact-value">Plaza # 97-B Main Boulevard Jubilee Town, Canal Road Lahore</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links & Services */}
          <div className="footer-links-container">
            <motion.div 
              className="footer-section quick-links"
              variants={itemVariants}
            >
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link) => (
                  <motion.li key={link.name}>
                    <motion.a 
                      href={link.path}
                      whileHover={{ 
                        x: 5,
                        color: "#f59e0b"
                      }}
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="footer-section services-links"
              variants={itemVariants}
            >
              <h4>Our Services</h4>
              <ul>
                {services.map((service) => (
                  <motion.li key={service}>
                    <motion.a 
                      href="/services"
                      whileHover={{ 
                        x: 5,
                        color: "#f59e0b"
                      }}
                    >
                      {service}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter & Social */}
          <motion.div 
            className="footer-section newsletter"
            variants={itemVariants}
          >
            <h4>Get Free Consultation</h4>
            <p className="consultation-text">Contact us for project estimates and construction consultations.</p>
            
            <motion.div className="cta-buttons">
              <motion.a 
                href="tel:+923218836371"
                className="cta-btn call"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="btn-icon">📞</span>
                <span className="btn-text">Call Now</span>
              </motion.a>
              <motion.a 
                href="https://wa.me/+923218836371"
                className="cta-btn whatsapp"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="btn-icon">💬</span>
                <span className="btn-text">WhatsApp</span>
              </motion.a>
            </motion.div>

            <div className="business-hours">
              <h5>Business Hours</h5>
              <div className="hours-list">
                <div className="hour-item">
                  <span className="day">Mon - Fri:</span>
                  <span className="time">8:00 AM - 6:00 PM</span>
                </div>
                <div className="hour-item">
                  <span className="day">Saturday:</span>
                  <span className="time">9:00 AM - 2:00 PM</span>
                </div>
                <div className="hour-item">
                  <span className="day">Sunday:</span>
                  <span className="time closed">Closed</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h5>Follow Our Work</h5>
              <div className="social-icons">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="social-icon"
                    aria-label={social.name}
                    whileHover={{ 
                      scale: 1.2,
                      y: -5
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span>{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p className="copyright">&copy; {currentYear} Meezan Developers. All rights reserved.</p>
            <div className="footer-bottom-links">
              <motion.a 
                href="/privacy"
                whileHover={{ color: "#f59e0b" }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="/terms"
                whileHover={{ color: "#f59e0b" }}
              >
                Terms of Service
              </motion.a>
              <motion.a 
                href="/sitemap"
                whileHover={{ color: "#f59e0b" }}
              >
                Sitemap
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Construction Pattern Overlay */}
      <div className="construction-pattern"></div>
    </motion.footer>
  );
};

export default Footer;