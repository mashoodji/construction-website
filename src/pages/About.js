import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/About.css';

// Import team member images
import johnSmith from '../assets/images/team/pic1.avif';
import sarahJohnson from '../assets/images/team/pic2.avif';
import mikeChen from '../assets/images/team/pic3.avif';
import emilyDavis from '../assets/images/team/pic4.avif';
import davidWilson from '../assets/images/team/pic5.avif';

const About = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoading, setImageLoading] = useState({});

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const handleImageLoad = (memberName) => {
    setImageLoading(prev => ({ ...prev, [memberName]: true }));
  };

  const teamMembers = [
    { 
      name: "John Smith", 
      role: "CEO & Founder", 
      image: johnSmith,
      shortDescription: "20+ years in construction industry",
      fullDescription: "John founded our company with a vision to revolutionize the construction industry. With over two decades of experience, he has led numerous landmark projects across the country. His leadership and innovative approach have been instrumental in our company's growth and success.",
      education: "MBA - Harvard Business School, Civil Engineering - MIT",
      specialties: ["Strategic Planning", "Business Development", "Project Financing"],
      yearsExperience: 25,
      email: "john.smith@company.com",
      phone: "+1 (555) 123-4567"
    },
    { 
      name: "Sarah Johnson", 
      role: "Project Manager", 
      image: sarahJohnson,
      shortDescription: "Certified PMP with 15 years experience",
      fullDescription: "Sarah brings exceptional organizational skills and attention to detail to every project. She has successfully managed over 50 construction projects ranging from $2M to $50M in budget. Her ability to coordinate teams and manage timelines ensures projects are delivered on time and within budget.",
      education: "MSc Project Management - Stanford University, PMP Certified",
      specialties: ["Budget Management", "Team Leadership", "Risk Assessment"],
      yearsExperience: 15,
      email: "sarah.johnson@company.com",
      phone: "+1 (555) 123-4568"
    },
    { 
      name: "Mike Chen", 
      role: "Head Architect", 
      image: mikeChen,
      shortDescription: "Award-winning architectural designer",
      fullDescription: "Mike is an internationally recognized architect known for his innovative and sustainable designs. He has received multiple awards including the prestigious Architectural Design Award 2022. His designs blend functionality with aesthetic appeal while maintaining environmental consciousness.",
      education: "MArch - Columbia University, LEED AP BD+C Certified",
      specialties: ["Sustainable Design", "3D Modeling", "Urban Planning"],
      yearsExperience: 18,
      email: "mike.chen@company.com",
      phone: "+1 (555) 123-4569"
    },
    { 
      name: "Emily Davis", 
      role: "Quality Control Manager", 
      image: emilyDavis,
      shortDescription: "Ensuring excellence in every project",
      fullDescription: "Emily oversees all quality assurance processes, ensuring every project meets the highest standards of safety and craftsmanship. She has implemented rigorous quality control systems that have reduced defects by 40% across all our projects. Her meticulous approach guarantees client satisfaction.",
      education: "BSc Civil Engineering - UC Berkeley, ASQ CQE Certified",
      specialties: ["Quality Systems", "Safety Compliance", "Materials Testing"],
      yearsExperience: 12,
      email: "emily.davis@company.com",
      phone: "+1 (555) 123-4570"
    },
    { 
      name: "David Wilson", 
      role: "Lead Engineer", 
      image: davidWilson,
      shortDescription: "Structural engineering specialist",
      fullDescription: "David is our structural engineering expert with extensive experience in complex building designs and seismic analysis. He has worked on numerous high-rise buildings and bridges, ensuring structural integrity and safety. His technical expertise is crucial for our most challenging projects.",
      education: "PhD Structural Engineering - MIT, PE Licensed",
      specialties: ["Structural Analysis", "Seismic Design", "Foundation Engineering"],
      yearsExperience: 20,
      email: "david.wilson@company.com",
      phone: "+1 (555) 123-4571"
    }
  ];

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
    setTimeout(() => setSelectedMember(null), 300);
  };

  return (
    <motion.div 
      className="about-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        {/* Hero Section */}
        <motion.div 
          className="about-hero"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants}>About Our Company</motion.h1>
          <motion.div 
            className="about-intro"
            variants={itemVariants}
          >
            We are a leading construction company with over 20 years of experience in building dreams and shaping skylines. Our commitment to excellence and innovation has made us a trusted partner in construction projects nationwide.
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        {/* <motion.div 
          className="stats-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">20+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Professional Team</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">25+</div>
              <div className="stat-label">Awards Won</div>
            </div>
          </div>
        </motion.div> */}
        
        {/* About Sections - Reverted to previous styling */}
        <motion.div 
          className="about-sections"
          variants={containerVariants}
        >
          <motion.section 
            className="about-section"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="section-icon">🏛️</div>
            <h2>Our History</h2>
            <p>Founded in 2003, we've grown from a small local contractor to a renowned construction company serving clients nationwide. Our journey is marked by innovation, quality, and unwavering commitment to excellence.</p>
          </motion.section>
          
          <motion.section 
            className="about-section"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="section-icon">🎯</div>
            <h2>Our Mission</h2>
            <p>To deliver exceptional construction services with quality, safety, and innovation at the forefront of everything we do. We build lasting relationships through trust and outstanding results.</p>
          </motion.section>
          
          <motion.section 
            className="about-section"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="section-icon">🔮</div>
            <h2>Our Vision</h2>
            <p>To be the most trusted and innovative construction partner, transforming communities through excellence in building and sustainable development practices.</p>
          </motion.section>
        </motion.div>

        {/* Team Section */}
        <motion.div 
          className="team-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="section-header">
            <h2>Meet Our Leadership Team</h2>
            <p>Our experienced leadership team brings decades of combined expertise in construction, architecture, and project management.</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                className="team-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring", 
                  stiffness: 100 
                }}
                viewport={{ once: true, margin: "-50px" }}
                onClick={() => handleMemberClick(member)}
              >
                <div className="team-image-container">
                  {!imageLoading[member.name] && (
                    <div className="image-skeleton">
                      <div className="skeleton-loader"></div>
                    </div>
                  )}
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className={`team-image ${imageLoading[member.name] ? 'loaded' : 'loading'}`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(member.name)}
                  />
                  <div className="image-overlay">
                    <span>View Profile</span>
                  </div>
                  <div className="team-badge">
                    {member.yearsExperience}+ Years
                  </div>
                </div>
                <div className="team-content">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.shortDescription}</p>
                  <div className="team-specialties">
                    {member.specialties.slice(0, 2).map((specialty, idx) => (
                      <span key={idx} className="specialty-tag">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Team Member Modal */}
      <AnimatePresence>
        {isModalOpen && selectedMember && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="project-modal team-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-button" onClick={closeModal}>
                &times;
              </button>
              
              <div className="modal-header">
                <div className="modal-image-section">
                  <div className="modal-image-container">
                    <img 
                      src={selectedMember.image} 
                      alt={selectedMember.name}
                      className="modal-profile-image"
                    />
                  </div>
                </div>
                <div className="modal-title-section">
                  <h2>{selectedMember.name}</h2>
                  <p className="modal-role">{selectedMember.role}</p>
                  <div className="experience-badge">
                    {selectedMember.yearsExperience}+ Years Experience
                  </div>
                </div>
              </div>
              
              <div className="modal-content">
                <div className="modal-section">
                  <h4>About</h4>
                  <p className="modal-description">{selectedMember.fullDescription}</p>
                </div>

                <div className="modal-section">
                  <h4>Education & Certification</h4>
                  <p className="education-info">{selectedMember.education}</p>
                </div>

                <div className="modal-section">
                  <h4>Areas of Expertise</h4>
                  <div className="expertise-grid">
                    {selectedMember.specialties.map((specialty, index) => (
                      <div key={index} className="expertise-card">
                        <div className="expertise-icon">⭐</div>
                        <span>{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h4>Contact Information</h4>
                  <div className="contact-grid">
                    <div className="contact-item">
                      <div className="contact-icon">📧</div>
                      <div>
                        <strong>Email</strong>
                        <p>{selectedMember.email}</p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <div className="contact-icon">📞</div>
                      <div>
                        <strong>Phone</strong>
                        <p>{selectedMember.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default About;