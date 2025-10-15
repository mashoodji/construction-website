import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesDropdown, setMobileServicesDropdown] = useState(false);
  
  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setServicesDropdown(false);
    setMobileServicesDropdown(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdown(false);
      }
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target)) {
        setMobileServicesDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

  // Enhanced animation variants
  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        when: "afterChildren"
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: {
      x: 50,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 30
      }
    }
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const dropdownVariants = {
    closed: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const mobileDropdownVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  // Enhanced hamburger animations
  const hamburgerVariants = {
    closed: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    },
    open: {
      scale: 1.1,
      rotate: 180,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    }
  };

  const line1Variants = {
    closed: { 
      rotate: 0, 
      y: 0,
      background: "white"
    },
    open: { 
      rotate: 45, 
      y: 8,
      background: "var(--primary)"
    }
  };

  const line2Variants = {
    closed: { 
      opacity: 1,
      scale: 1
    },
    open: { 
      opacity: 0,
      scale: 0
    }
  };

  const line3Variants = {
    closed: { 
      rotate: 0, 
      y: 0,
      background: "white"
    },
    open: { 
      rotate: -45, 
      y: -8,
      background: "var(--primary)"
    }
  };

  const navItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'About', path: '/about', icon: '👥' },
    { 
      name: 'Services', 
      path: '/services', 
      icon: '🛠️',
      submenu: [
        { name: 'Commercial Construction', path: '/services', icon: '🏢' },
        { name: 'Renovation & Remodeling', path: '/architectural-design', icon: '🔨' },
      ]
    },
    { name: 'Projects', path: '/projects', icon: '📦' },
    { name: 'Blog', path: '/blog', icon: '📝', }, // Added Blog
    { name: 'CEO Message', path: '/ceo-message', icon: '💼' },
    { name: 'Cost-Price', path: '/construction-cost', icon: '💲' },
    { name: 'Contact', path: '/contact', icon: '📞' }
  ];

  const handleServicesClick = (e, isMobile = false) => {
    e.preventDefault();
    if (isMobile) {
      setMobileServicesDropdown(!mobileServicesDropdown);
    } else {
      setServicesDropdown(!servicesDropdown);
    }
  };

  const handleSubmenuClick = (path) => {
    closeMenu();
    // You can add navigation logic here if using React Router
    window.location.href = path;
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Logo/Brand */}
        <motion.div 
          className="nav-brand"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Mazeen DEVELOPERS</h2>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.ul 
          className="nav-menu desktop-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navItems.map((item) => (
            <motion.li 
              key={item.name}
              className={item.submenu ? 'has-dropdown' : ''}
              ref={item.submenu ? dropdownRef : null}
            >
              {item.submenu ? (
                <>
                  <motion.a 
                    href={item.path}
                    onClick={(e) => handleServicesClick(e)}
                    onMouseEnter={() => setServicesDropdown(true)}
                    className="dropdown-trigger"
                    whileHover={{ 
                      scale: 1.05,
                      color: 'var(--primary)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                    <motion.span 
                      className="dropdown-arrow"
                      animate={{ rotate: servicesDropdown ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      ▼
                    </motion.span>
                  </motion.a>
                  
                  <AnimatePresence>
                    {servicesDropdown && (
                      <motion.div 
                        className="dropdown-menu"
                        variants={dropdownVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        onMouseLeave={() => setServicesDropdown(false)}
                      >
                        {item.submenu.map((subItem) => (
                          <motion.a
                            key={subItem.name}
                            href={subItem.path}
                            className="dropdown-item"
                            onClick={() => handleSubmenuClick(subItem.path)}
                            whileHover={{ 
                              x: 5,
                              backgroundColor: 'rgba(255, 180, 0, 0.1)'
                            }}
                          >
                            <span className="submenu-icon">{subItem.icon}</span>
                            {subItem.name}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
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
              )}
            </motion.li>
          ))}
        </motion.ul>

        {/* Enhanced Mobile Hamburger Button */}
        <motion.button
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          variants={hamburgerVariants}
          animate={isMenuOpen ? 'open' : 'closed'}
          whileHover={{ 
            scale: 1.1,
            backgroundColor: 'rgba(255, 255, 255, 0.1)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            variants={line1Variants}
            animate={isMenuOpen ? 'open' : 'closed'}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            variants={line2Variants}
            animate={isMenuOpen ? 'open' : 'closed'}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          />
          <motion.span
            variants={line3Variants}
            animate={isMenuOpen ? 'open' : 'closed'}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </motion.button>

        {/* Enhanced Mobile Navigation Drawer */}
        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <>
              {/* Overlay with blur effect */}
              <motion.div
                className="menu-overlay"
                variants={overlayVariants}
                initial="closed"
                animate="open"
                exit="closed"
                onClick={closeMenu}
              />

              {/* Enhanced Drawer Menu */}
              <motion.div
                className="mobile-drawer"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {/* Enhanced Drawer Header */}
                <div className="drawer-header">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Menu
                  </motion.h3>
                  <motion.button
                    className="close-drawer"
                    onClick={closeMenu}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: 'rgba(255, 180, 0, 0.1)'
                    }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Close menu"
                  >
                    <motion.span
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      ×
                    </motion.span>
                  </motion.button>
                </div>

                {/* Enhanced Navigation Items */}
                <motion.ul className="drawer-menu">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      variants={itemVariants}
                      ref={item.submenu ? mobileDropdownRef : null}
                      className={item.submenu ? 'has-mobile-dropdown' : ''}
                    >
                      {item.submenu ? (
                        <>
                          <motion.div
                            className="drawer-link dropdown-trigger-mobile"
                            onClick={(e) => handleServicesClick(e, true)}
                            whileHover={{ 
                              backgroundColor: 'rgba(255, 180, 0, 0.15)'
                            }}
                          >
                            <motion.span 
                              className="nav-icon"
                              whileHover={{ 
                                scale: 1.3,
                                rotate: 10 
                              }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              {item.icon}
                            </motion.span>
                            <span className="nav-text">{item.name}</span>
                            <motion.span 
                              className="nav-arrow dropdown-arrow-mobile"
                              animate={{ rotate: mobileServicesDropdown ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              ▼
                            </motion.span>
                          </motion.div>
                          
                          <AnimatePresence>
                            {mobileServicesDropdown && (
                              <motion.div 
                                className="mobile-dropdown-menu"
                                variants={mobileDropdownVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                              >
                                {item.submenu.map((subItem) => (
                                  <motion.a
                                    key={subItem.name}
                                    href={subItem.path}
                                    className="mobile-dropdown-item"
                                    onClick={() => handleSubmenuClick(subItem.path)}
                                    whileHover={{ 
                                      x: 8,
                                      backgroundColor: 'rgba(255, 180, 0, 0.1)'
                                    }}
                                  >
                                    <span className="submenu-icon">{subItem.icon}</span>
                                    <span className="submenu-text">{subItem.name}</span>
                                  </motion.a>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <motion.a
                          href={item.path}
                          onClick={closeMenu}
                          className="drawer-link"
                          whileHover={{
                            color: 'var(--primary)',
                            backgroundColor: 'rgba(255, 180, 0, 0.15)'
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <motion.span 
                            className="nav-icon"
                            whileHover={{ 
                              scale: 1.3,
                              rotate: 10 
                            }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {item.icon}
                          </motion.span>
                          <span className="nav-text">{item.name}</span>
                          <motion.span 
                            className="nav-arrow"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            whileHover={{ x: 5 }}
                          >
                            →
                          </motion.span>
                        </motion.a>
                      )}
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Drawer Footer with CTA */}
                {/* <motion.div 
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
                </motion.div> */}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;