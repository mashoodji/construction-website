import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Fixed animation variants - only two keyframes
  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: {
      x: 50,
      opacity: 0
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 500
      }
    }
  };

  const overlayVariants = {
    closed: {
      opacity: 0
    },
    open: {
      opacity: 1
    }
  };

  // Fixed hamburger line animations - only two states
  const line1Variants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 }
  };

  const line2Variants = {
    closed: { opacity: 1 },
    open: { opacity: 0 }
  };

  const line3Variants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 }
  };

  const navItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'About', path: '/about', icon: '👥' },
    { name: 'Services', path: '/services', icon: '🛠️' },
    { name: 'Projects', path: '/projects', icon: '🏗️' },
    { name: 'CEO Message', path: '/ceo-message', icon: '💼' },
    { name: 'Contact', path: '/contact', icon: '📞' }
  ];

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo/Brand */}
        <motion.div 
          className="nav-brand"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>BuildPro Construction</h2>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.ul 
          className="nav-menu desktop-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navItems.map((item) => (
            <motion.li key={item.name}>
              <motion.a 
                href={item.path}
                whileHover={{ 
                  scale: 1.05,
                  color: 'var(--primary)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Hamburger Button */}
        <motion.button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            variants={line1Variants}
            animate={isMenuOpen ? 'open' : 'closed'}
          />
          <motion.span
            variants={line2Variants}
            animate={isMenuOpen ? 'open' : 'closed'}
          />
          <motion.span
            variants={line3Variants}
            animate={isMenuOpen ? 'open' : 'closed'}
          />
        </motion.button>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="menu-overlay"
                variants={overlayVariants}
                initial="closed"
                animate="open"
                exit="closed"
                onClick={closeMenu}
              />

              {/* Drawer Menu */}
              <motion.div
                className="mobile-drawer"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {/* Drawer Header */}
                <div className="drawer-header">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    Navigation
                  </motion.h3>
                  <motion.button
                    className="close-drawer"
                    onClick={closeMenu}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Close menu"
                  >
                    <span>×</span>
                  </motion.button>
                </div>

                {/* Navigation Items */}
                <motion.ul className="drawer-menu">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      variants={itemVariants}
                      whileHover={{ 
                        x: 10,
                        backgroundColor: 'rgba(255, 180, 0, 0.1)'
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.a
                        href={item.path}
                        onClick={closeMenu}
                        className="drawer-link"
                      >
                        <motion.span 
                          className="nav-icon"
                          whileHover={{ scale: 1.2 }}
                        >
                          {item.icon}
                        </motion.span>
                        <span className="nav-text">{item.name}</span>
                        <motion.span 
                          className="nav-arrow"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          →
                        </motion.span>
                      </motion.a>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Drawer Footer */}
                <motion.div 
                  className="drawer-footer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <p>Ready to start your project?</p>
                  <motion.a
                    href="/contact"
                    className="btn btn-primary"
                    onClick={closeMenu}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Free Quote
                  </motion.a>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;