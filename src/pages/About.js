import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/About.css';

// Import team member images
import EHSANURREHMAN from '../assets/images/team/1.jpg';
import MARIANAFEES from '../assets/images/team/2.png';
import RIZWANNAZIR from '../assets/images/team/3.jpg';
import TAHIRABBAS from '../assets/images/team/4.jpg';
import MuftiRaeesAhmed  from '../assets/images/team/5.jpg';

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
      name: "EHSAN UR REHMAN",
      role: "RESIDENT ENGINEER", 
      image: EHSANURREHMAN,
      shortDescription: "Overseeing on-site construction operations and quality control",
      fullDescription: "Ehsan brings over two decades of hands-on experience in construction supervision and project execution. As Resident Engineer, he ensures all construction activities comply with design specifications, building codes, and safety standards. His meticulous site management and technical expertise have been instrumental in delivering numerous successful projects on time and within budget.",
      // education: "MSc Civil Engineering - NED University, PE Licensed, OSHA Certified",
      specialties: ["Site Supervision", "Quality Control", "Construction Methodology", "Safety Management"],
      yearsExperience: 20,
      email: "ehsan.rehman@company.com",
      phone: "+92 (300) 123-4567"
    },
    { 
      name: "MARIA NAFEES",
      role: "HEAD ARCHITECTURE", 
      image: MARIANAFEES,
      shortDescription: "Leading architectural design and creative vision",
      fullDescription: "Maria is an accomplished architect with a passion for innovative design and sustainable architecture. As Head of Architecture, she leads our design team in creating functional, aesthetically pleasing spaces that meet client needs while incorporating modern architectural principles. Her designs seamlessly blend form and function, creating landmarks that stand the test of time.",
      // education: "MArch - University of Engineering & Technology, LEED AP Certified",
      specialties: ["Concept Design", "Sustainable Architecture", "3D Visualization", "Space Planning"],
      yearsExperience: 12,
      email: "maria.nafees@company.com",
      phone: "+92 (300) 123-4568"
    },
    { 
      name: "RIZWAN NAZIR",
      role: "STRUCTURE ENGINEER", 
      image: RIZWANNAZIR,
      shortDescription: "Ensuring structural integrity and safety of all projects",
      fullDescription: "Rizwan is our structural engineering expert with extensive experience in analyzing and designing robust building structures. He specializes in calculating loads, stresses, and strains to ensure our buildings can withstand environmental forces and usage demands. His technical expertise in structural analysis and foundation design guarantees the safety and durability of all our constructions.",
      // education: "MSc Structural Engineering - UET Lahore, PE Licensed",
      specialties: ["Structural Analysis", "Seismic Design", "Foundation Engineering", "Load Calculations"],
      yearsExperience: 15,
      email: "rizwan.nazir@company.com",
      phone: "+92 (300) 123-4569"
    },
    { 
      name: "TAHIR ABBAS",
      role: "PROCUREMENT MANAGER", 
      image: TAHIRABBAS,
      shortDescription: "Managing material sourcing and supply chain operations",
      fullDescription: "Tahir excels in procurement and supply chain management, ensuring timely availability of quality materials at competitive prices. As Procurement Manager, he develops strategic vendor relationships, negotiates contracts, and maintains optimal inventory levels. His efficient procurement strategies have significantly reduced project costs while maintaining the highest quality standards.",
      // education: "MBA Supply Chain Management - IBA Karachi, CIPS Certified",
      specialties: ["Vendor Management", "Contract Negotiation", "Supply Chain Optimization", "Cost Control"],
      yearsExperience: 10,
      email: "tahir.abbas@company.com",
      phone: "+92 (300) 123-4570"
    },
    { 
      name: "Mufti Raees Ahmed", 
      role: "Director Marketing & Public Relations", 
      image: MuftiRaeesAhmed,
      shortDescription: "Building brand reputation and client relationships",
      fullDescription: "Mufti Raees Ahmed leads our marketing and public relations efforts with strategic vision and exceptional communication skills. He develops comprehensive marketing strategies that enhance our brand visibility and manages stakeholder relationships. His expertise in digital marketing and public relations has been crucial in expanding our market presence and maintaining our reputation as a trusted construction partner.",
      // education: "MBA Marketing - LUMS, Digital Marketing Certification",
      specialties: ["Brand Management", "Digital Marketing", "Stakeholder Relations", "Strategic Communications"],
      yearsExperience: 8,
      email: "raees.ahmed@company.com",
      phone: "+92 (300) 123-4571"
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

        {/* About Sections */}
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

      {/* Team Member Modal - FIXED CLASS NAMES */}
      <AnimatePresence>
        {isModalOpen && selectedMember && (
          <motion.div
            className="team-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="team-modal"
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

                {/* <div className="modal-section">
                  <h4>Education & Certification</h4>
                  <p className="education-info">{selectedMember.education}</p>
                </div> */}

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