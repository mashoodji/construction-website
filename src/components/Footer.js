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
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'YouTube', icon: '📺', url: '#' }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
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
              whileHover={{ color: "var(--primary)" }}
            >
              BuildPro Construction
            </motion.h3>
            <p>
              Building dreams with precision and quality for over 20 years. 
              Your trusted partner in construction excellence.
            </p>
            <div className="contact-info">
              <motion.div 
                className="contact-item"
                whileHover={{ x: 5 }}
              >
                <span className="contact-icon">📞</span>
                <span>+1 (555) 123-4567</span>
              </motion.div>
              <motion.div 
                className="contact-item"
                whileHover={{ x: 5 }}
              >
                <span className="contact-icon">✉️</span>
                <span>info@buildpro.com</span>
              </motion.div>
              <motion.div 
                className="contact-item"
                whileHover={{ x: 5 }}
              >
                <span className="contact-icon">📍</span>
                <span>123 Construction St, City, State 12345</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
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
                      color: "var(--primary)"
                    }}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div 
            className="footer-section newsletter"
            variants={itemVariants}
          >
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter for the latest updates and projects.</p>
            
            <motion.form 
              className="newsletter-form"
              whileHover={{ scale: 1.02 }}
            >
              <motion.input 
                type="email" 
                placeholder="Enter your email"
                whileFocus={{ 
                  scale: 1.05,
                  boxShadow: "0 0 0 2px var(--primary)"
                }}
              />
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </motion.form>

            <div className="social-links">
              <h5>Follow Us</h5>
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
            <p>&copy; {currentYear} BuildPro Construction. All rights reserved.</p>
            <div className="footer-bottom-links">
              <motion.a 
                href="/privacy"
                whileHover={{ color: "var(--primary)" }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="/terms"
                whileHover={{ color: "var(--primary)" }}
              >
                Terms of Service
              </motion.a>
              <motion.a 
                href="/sitemap"
                whileHover={{ color: "var(--primary)" }}
              >
                Sitemap
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;