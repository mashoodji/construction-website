import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ArchitecturalDesign from './pages/ArchitecturalDesign';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Residential from './pages/Residential';
import BlogPost from './pages/BlogPost'; 
import ConstructionCost from './pages/ConstructionCost';
import CEOMessagePage from './pages/CEOMessagePage';
import Commercial from './pages/Commercial';
import Educational from './pages/Educational';
import Religious from './pages/Religious';
import Industrial from './pages/Industrial';
import Infrastructure from './pages/Infrastructure';
import Road from './pages/Road';
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
                path="/architectural-design" 
                element={
                  <motion.div {...pageTransition}>
                    <ArchitecturalDesign />
                  </motion.div>
                } 
              />
              <Route 
                path="/blog" 
                element={
                  <motion.div {...pageTransition}>
                    <Blog />
                  </motion.div>
                } 
              />
              <Route 
                path="/blog/:id" 
                element={
                  <motion.div {...pageTransition}>
                    <BlogPost />
                  </motion.div>
                } 
              />
              <Route 
                path="/construction-cost" 
                element={
                  <motion.div {...pageTransition}>
                    <ConstructionCost />
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
                path="/residential" 
                element={
                  <motion.div {...pageTransition}>
                    <Residential/>
                  </motion.div>
                } 
              />
              <Route 
                path="/commercial" 
                element={
                  <motion.div {...pageTransition}>
                    <Commercial/>
                  </motion.div>
                } 
              />
              <Route 
                path="/infrastructure" 
                element={
                  <motion.div {...pageTransition}>
                    <Infrastructure/>
                  </motion.div>
                } 
              />
              <Route 
                path="/industrial" 
                element={
                  <motion.div {...pageTransition}>
                    <Industrial/>
                  </motion.div>
                } 
              />
              <Route 
                path="/educational" 
                element={
                  <motion.div {...pageTransition}>
                    <Educational/>
                  </motion.div>
                } 
              />
              <Route 
                path="/religious" 
                element={
                  <motion.div {...pageTransition}>
                    <Religious/>
                  </motion.div>
                } 
              />
              <Route 
                path="/road" 
                element={
                  <motion.div {...pageTransition}>
                    <Road/>
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