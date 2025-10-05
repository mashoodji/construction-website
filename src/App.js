import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CEOMessagePage from './pages/CEOMessagePage';
import './styles/global.css';

// Simplified page transition
const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <AnimatePresence mode="wait">
            <Routes>
              <Route 
                path="/" 
                element={
                  <motion.div {...pageTransition}>
                    <Home />
                  </motion.div>
                } 
              />
              <Route 
                path="/about" 
                element={
                  <motion.div {...pageTransition}>
                    <About />
                  </motion.div>
                } 
              />
              <Route 
                path="/services" 
                element={
                  <motion.div {...pageTransition}>
                    <Services />
                  </motion.div>
                } 
              />
              <Route 
                path="/projects" 
                element={
                  <motion.div {...pageTransition}>
                    <Projects />
                  </motion.div>
                } 
              />
              <Route 
                path="/ceo-message" 
                element={
                  <motion.div {...pageTransition}>
                    <CEOMessagePage />
                  </motion.div>
                } 
              />
              <Route 
                path="/contact" 
                element={
                  <motion.div {...pageTransition}>
                    <Contact />
                  </motion.div>
                } 
              />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;