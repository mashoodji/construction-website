import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/ProjectDetails.css';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Complete projects data for all 12 projects
  const projectsData = {
    1: {
      id: 1,
      title: "Modern Luxury Villa",
      category: "residential",
      status: "completed",
      year: "2023",
      description: "Contemporary luxury villa with sustainable design features and smart home technology.",
      fullDescription: "This magnificent luxury villa spans over 8,000 square feet and sits on a 2-acre plot with panoramic views. The architecture combines clean lines with natural materials, creating a harmonious balance between modern design and natural surroundings. The villa features floor-to-ceiling windows, an open-concept living space, and seamless indoor-outdoor integration. Every aspect of this home was designed with sustainability in mind, from the solar panel installation to the rainwater harvesting system.",
      image: "🏡",
      features: [
        "Smart Home Automation System",
        "Solar Panel Installation",
        "Infinity Edge Pool",
        "Landscaped Gardens with Native Plants",
        "Home Theater System",
        "Wine Cellar",
        "Gourmet Kitchen with Smart Appliances",
        "Home Gym and Spa",
        "Rainwater Harvesting System",
        "Geothermal Heating and Cooling"
      ],
      location: "Beverly Hills, CA",
      duration: "18 Months",
      budget: "$4.2M",
      size: "8,000 sq ft",
      team: "15 Professionals",
      challenges: [
        "Complex hillside construction",
        "Sustainable material sourcing",
        "Smart home integration",
        "Landscape preservation"
      ],
      solutions: [
        "Advanced foundation engineering",
        "Local sustainable material partnerships",
        "Custom smart home programming",
        "Native plant preservation program"
      ],
      gallery: ["🏡", "🌅", "🏊", "🍳", "🛏️", "🌿"]
    },
    2: {
      id: 2,
      title: "Downtown Office Complex",
      category: "commercial",
      status: "in-progress",
      year: "2024",
      description: "12-story commercial office building with LEED certification in downtown business district.",
      fullDescription: "This state-of-the-art office complex is designed to meet the highest standards of sustainability and workplace efficiency. The building features flexible office spaces, collaborative areas, and premium amenities for modern businesses. With its innovative design and cutting-edge technology, this complex sets a new standard for commercial construction in urban environments.",
      image: "🏢",
      features: [
        "LEED Platinum Certification",
        "Underground Parking for 200 vehicles",
        "Rooftop Garden and Terrace",
        "Smart Building Management System",
        "High-Speed Elevators",
        "Fiber Optic Connectivity",
        "Conference Center",
        "Wellness Facilities",
        "Bike Storage and Changing Rooms",
        "Electric Vehicle Charging Stations"
      ],
      location: "New York, NY",
      duration: "24 Months",
      budget: "$15.8M",
      size: "150,000 sq ft",
      team: "45 Professionals",
      challenges: [
        "Downtown site constraints",
        "LEED certification requirements",
        "Traffic management during construction",
        "Noise control in urban area"
      ],
      solutions: [
        "Phased construction approach",
        "Sustainable material selection",
        "Comprehensive traffic planning",
        "Advanced noise mitigation systems"
      ],
      gallery: ["🏢", "🏗️", "🌿", "💻", "🚗", "🏃‍♂️"]
    },
    3: {
      id: 3,
      title: "Regional Shopping Center",
      category: "commercial",
      status: "completed",
      year: "2024",
      description: "Modern shopping mall with 50+ stores, food court, and entertainment facilities.",
      fullDescription: "A comprehensive retail destination designed to serve the growing community with diverse shopping, dining, and entertainment options. The center features anchor stores, specialty retailers, and family-friendly amenities. The design incorporates natural light, open spaces, and sustainable features to create an inviting atmosphere for visitors.",
      image: "🛍️",
      features: [
        "50+ Retail Stores",
        "Food Court with 12 Restaurants",
        "8-Screen Cinema Complex",
        "Ample Parking for 1,500 vehicles",
        "Children's Play Area",
        "Outdoor Plaza for Events",
        "Digital Navigation System",
        "EV Charging Stations",
        "Solar-Powered Lighting",
        "Water Recycling System"
      ],
      location: "Austin, TX",
      duration: "20 Months",
      budget: "$12.3M",
      size: "300,000 sq ft",
      team: "60 Professionals",
      challenges: [
        "Large-scale coordination",
        "Multiple tenant requirements",
        "Parking optimization",
        "Energy efficiency in large space"
      ],
      solutions: [
        "Advanced project management",
        "Customizable tenant spaces",
        "Smart parking solutions",
        "Integrated energy management system"
      ],
      gallery: ["🛍️", "🎬", "🍕", "🚙", "🎠", "🌞"]
    },
    4: {
      id: 4,
      title: "Industrial Storage Facility",
      category: "industrial",
      status: "completed",
      year: "2023",
      description: "50,000 sq ft industrial warehouse with advanced logistics and storage systems.",
      fullDescription: "This state-of-the-art industrial facility was designed to meet the growing demands of modern logistics and storage. The warehouse incorporates advanced automation systems, climate control, and security features to ensure optimal storage conditions and operational efficiency.",
      image: "🏭",
      features: [
        "Climate Control Systems",
        "Advanced Security and Surveillance",
        "Multiple Loading Docks",
        "Office and Administrative Space",
        "Automated Storage Retrieval System",
        "Fire Suppression System",
        "Energy-Efficient Lighting",
        "Solar Panel Array",
        "Water Collection System",
        "Advanced Inventory Management"
      ],
      location: "Chicago, IL",
      duration: "14 Months",
      budget: "$8.7M",
      size: "50,000 sq ft",
      team: "35 Professionals",
      challenges: [
        "Rapid construction timeline",
        "Complex automation integration",
        "Climate control precision",
        "Security system implementation"
      ],
      solutions: [
        "Modular construction techniques",
        "Phased technology integration",
        "Advanced HVAC systems",
        "Comprehensive security protocol"
      ],
      gallery: ["🏭", "📦", "🔧", "🌡️", "🔒", "⚡"]
    },
    5: {
      id: 5,
      title: "Luxury Apartment Complex",
      category: "residential",
      status: "in-progress",
      year: "2024",
      description: "80-unit luxury apartment building with premium amenities and city views.",
      fullDescription: "This upscale apartment complex offers modern urban living with premium amenities and stunning city views. The building features spacious units, shared community spaces, and resort-style amenities that redefine luxury apartment living in the city center.",
      image: "🏘️",
      features: [
        "Swimming Pool and Jacuzzi",
        "State-of-the-Art Fitness Center",
        "Rooftop Lounge with City Views",
        "24/7 Concierge Service",
        "Underground Parking",
        "Co-Working Spaces",
        "Pet Spa and Dog Park",
        "Package Delivery System",
        "Smart Home Features",
        "Green Roof System"
      ],
      location: "Miami, FL",
      duration: "22 Months",
      budget: "$9.5M",
      size: "120,000 sq ft",
      team: "40 Professionals",
      challenges: [
        "Urban site limitations",
        "Luxury finish coordination",
        "Amenity space optimization",
        "View preservation"
      ],
      solutions: [
        "Vertical construction approach",
        "Premium material sourcing",
        "Multi-functional space design",
        "Strategic window placement"
      ],
      gallery: ["🏘️", "🏊", "💪", "🌇", "🐕", "📦"]
    },
    6: {
      id: 6,
      title: "Beachfront Hotel Resort",
      category: "commercial",
      status: "planned",
      year: "2025",
      description: "Luxury beachfront hotel and resort with spa, restaurants, and conference facilities.",
      fullDescription: "An exclusive beachfront resort offering unparalleled luxury and relaxation. This project combines traditional hospitality with modern amenities, featuring multiple dining options, a world-class spa, and comprehensive conference facilities for business and leisure travelers alike.",
      image: "🏨",
      features: [
        "Ocean View Rooms and Suites",
        "Full-Service Spa and Wellness Center",
        "Multiple Fine Dining Restaurants",
        "Large Conference and Event Center",
        "Infinity Pool with Swim-up Bar",
        "Private Beach Access",
        "Water Sports Facilities",
        "Kids Club and Activities",
        "Sustainable Design Features",
        "Helipad Access"
      ],
      location: "Maui, HI",
      duration: "30 Months",
      budget: "$25M",
      size: "200,000 sq ft",
      team: "75 Professionals",
      challenges: [
        "Beachfront environmental regulations",
        "Luxury finish coordination",
        "Multiple amenity integration",
        "Coastal weather considerations"
      ],
      solutions: [
        "Environmental impact assessment",
        "International material sourcing",
        "Integrated design approach",
        "Hurricane-resistant construction"
      ],
      gallery: ["🏨", "🌊", "💆", "🍽️", "👨‍💼", "🏄"]
    },
    7: {
      id: 7,
      title: "Community Church",
      category: "religious",
      status: "completed",
      year: "2023",
      description: "Modern church building with traditional architectural elements and community spaces.",
      fullDescription: "This community church combines traditional spiritual elements with modern functionality. The design creates a welcoming space for worship, community gatherings, and educational activities, serving as a central hub for the local community.",
      image: "⛪",
      features: [
        "Main Sanctuary with 500 Seating Capacity",
        "Community Hall for Events",
        "Educational Wings for Classes",
        "Beautifully Landscaped Grounds",
        "State-of-the-Art Audio/Visual System",
        "Commercial Kitchen Facilities",
        "Accessible Design Throughout",
        "Outdoor Prayer Garden",
        "Library and Study Rooms",
        "Ample Parking Facilities"
      ],
      location: "Seattle, WA",
      duration: "16 Months",
      budget: "$3.8M",
      size: "25,000 sq ft",
      team: "25 Professionals",
      challenges: [
        "Balancing tradition with modernity",
        "Acoustic perfection requirements",
        "Community input integration",
        "Budget constraints"
      ],
      solutions: [
        "Collaborative design process",
        "Advanced acoustic engineering",
        "Community workshops",
        "Value engineering approach"
      ],
      gallery: ["⛪", "🙏", "📚", "🌳", "🎤", "🍽️"]
    },
    8: {
      id: 8,
      title: "Highway Infrastructure",
      category: "infrastructure",
      status: "in-progress",
      year: "2024",
      description: "Major highway expansion project with bridges and interchanges.",
      fullDescription: "This critical infrastructure project involves expanding existing highway capacity while improving safety and traffic flow. The project includes new bridges, modern interchanges, and smart traffic management systems to serve the growing regional transportation needs.",
      image: "🛣️",
      features: [
        "6-Lane Highway Expansion",
        "3 New Modern Bridges",
        "Smart Traffic Management System",
        "Eco-Friendly Drainage Systems",
        "Advanced Lighting Solutions",
        "Emergency Vehicle Access",
        "Bicycle and Pedestrian Paths",
        "Noise Reduction Barriers",
        "Wildlife Crossing Structures",
        "Digital Traffic Monitoring"
      ],
      location: "Denver, CO",
      duration: "36 Months",
      budget: "$45M",
      size: "15 Miles",
      team: "120 Professionals",
      challenges: [
        "Maintaining traffic during construction",
        "Environmental impact mitigation",
        "Complex geological conditions",
        "Multiple stakeholder coordination"
      ],
      solutions: [
        "Night and weekend work schedules",
        "Environmental protection measures",
        "Advanced geotechnical engineering",
        "Regular stakeholder meetings"
      ],
      gallery: ["🛣️", "🌉", "🚗", "🌿", "🚧", "📊"]
    },
    9: {
      id: 9,
      title: "University Campus Building",
      category: "educational",
      status: "completed",
      year: "2023",
      description: "State-of-the-art educational facility for engineering and technology programs.",
      fullDescription: "This cutting-edge academic building provides advanced learning environments for engineering and technology students. The facility includes specialized laboratories, collaborative spaces, and innovative classrooms designed to foster creativity and innovation.",
      image: "🎓",
      features: [
        "Advanced Research Laboratories",
        "Large Lecture Halls with Technology",
        "Collaborative Study Spaces",
        "Green Roof with Study Areas",
        "3D Printing and Fabrication Lab",
        "Computer Simulation Centers",
        "Faculty Research Offices",
        "Student Innovation Hub",
        "Sustainable Design Features",
        "Accessible Design Throughout"
      ],
      location: "Boston, MA",
      duration: "28 Months",
      budget: "$18.2M",
      size: "85,000 sq ft",
      team: "50 Professionals",
      challenges: [
        "Advanced technology integration",
        "Flexible space requirements",
        "Research facility specifications",
        "Academic calendar constraints"
      ],
      solutions: [
        "Modular technology infrastructure",
        "Adaptable room configurations",
        "Early equipment planning",
        "Phased completion approach"
      ],
      gallery: ["🎓", "🔬", "💻", "🌿", "👥", "🚀"]
    },
    10: {
      id: 10,
      title: "Medical Center",
      category: "healthcare",
      status: "planned",
      year: "2025",
      description: "Comprehensive healthcare facility with specialized treatment centers.",
      fullDescription: "This modern medical center will provide comprehensive healthcare services with specialized treatment centers and advanced medical technology. The facility is designed to create a healing environment while supporting the latest in medical care and patient comfort.",
      image: "🏥",
      features: [
        "Emergency Department with Trauma Center",
        "Advanced Surgical Suites",
        "Comprehensive Diagnostic Imaging Center",
        "Healing Gardens and Patient Areas",
        "Specialized Treatment Centers",
        "Medical Research Facilities",
        "Pharmacy and Laboratory Services",
        "Patient and Family Support Areas",
        "Helipad for Emergency Transport",
        "Sustainable Medical Waste Management"
      ],
      location: "Phoenix, AZ",
      duration: "32 Months",
      budget: "$32.5M",
      size: "180,000 sq ft",
      team: "85 Professionals",
      challenges: [
        "Medical equipment integration",
        "Infection control requirements",
        "Multiple specialty areas",
        "Patient flow optimization"
      ],
      solutions: [
        "Early equipment planning",
        "Advanced HVAC and filtration",
        "Specialized design teams",
        "Patient-centered layout design"
      ],
      gallery: ["🏥", "🚑", "💊", "🌳", "🔬", "👨‍⚕️"]
    },
    11: {
      id: 11,
      title: "Sports Complex",
      category: "sports",
      status: "completed",
      year: "2023",
      description: "Multi-purpose sports facility with indoor and outdoor venues.",
      fullDescription: "This comprehensive sports complex serves both professional athletes and community members with state-of-the-art facilities for various sports and recreational activities. The complex promotes health, wellness, and community engagement through sports.",
      image: "⚽",
      features: [
        "Olympic-Size Swimming Pool",
        "Indoor Arena for Multiple Sports",
        "Comprehensive Fitness Center",
        "Sports Medicine and Therapy Center",
        "Outdoor Athletic Fields",
        "Running Track and Field Facilities",
        "Climbing Wall and Adventure Sports",
        "Community Meeting Rooms",
        "Pro Shop and Equipment Rental",
        "Sustainable Energy Systems"
      ],
      location: "Atlanta, GA",
      duration: "26 Months",
      budget: "$21.8M",
      size: "150,000 sq ft",
      team: "55 Professionals",
      challenges: [
        "Multiple sport requirements",
        "Community accessibility needs",
        "Professional and amateur use balance",
        "Maintenance and operational planning"
      ],
      solutions: [
        "Multi-functional space design",
        "Universal accessibility features",
        "Flexible scheduling systems",
        "Comprehensive maintenance planning"
      ],
      gallery: ["⚽", "🏊", "💪", "🏃", "🧗", "🏥"]
    },
    12: {
      id: 12,
      title: "Mixed-Use Development",
      category: "commercial",
      status: "in-progress",
      year: "2024",
      description: "Integrated development with retail, office, and residential spaces.",
      fullDescription: "This innovative mixed-use development creates a vibrant urban community by combining retail, office, and residential spaces in a single, cohesive environment. The project promotes walkability, community interaction, and sustainable urban living.",
      image: "🏙️",
      features: [
        "Retail Spaces for Various Businesses",
        "Modern Office Towers",
        "Luxury Residential Units",
        "Public Plaza and Gathering Spaces",
        "Underground Parking Facility",
        "Green Spaces and Parks",
        "Public Transportation Integration",
        "Bike Sharing Stations",
        "Community Event Spaces",
        "Sustainable Urban Design"
      ],
      location: "San Francisco, CA",
      duration: "40 Months",
      budget: "$65M",
      size: "400,000 sq ft",
      team: "95 Professionals",
      challenges: [
        "Multiple use integration",
        "Urban density management",
        "Community impact considerations",
        "Long-term sustainability"
      ],
      solutions: [
        "Integrated design approach",
        "Smart density planning",
        "Community engagement program",
        "Green building certification"
      ],
      gallery: ["🏙️", "🛍️", "🏢", "🏠", "🌳", "🚇"]
    }
  };

  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project Not Found</h2>
        <button onClick={() => navigate('/projects')}>Back to Projects</button>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return '#10b981';
      case 'in-progress': return '#f59e0b';
      case 'planned': return '#8b5cf6';
      default: return '#6b7280';
    }
  };

  const handleInquireProject = () => {
    navigate('/contact', { 
      state: { 
        selectedService: project.title,
        projectDetails: project
      }
    });
  };

  return (
    <motion.div 
      className="project-details-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header Section */}
      <section className="project-hero">
        <div className="container">
          <motion.button 
            className="back-button"
            onClick={() => navigate('/projects')}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Projects
          </motion.button>
          
          <motion.div 
            className="hero-content"
            variants={containerVariants}
          >
            <motion.div 
              className="project-icon"
              variants={itemVariants}
            >
              {project.image}
            </motion.div>
            
            <motion.h1 variants={itemVariants}>{project.title}</motion.h1>
            
            <motion.div 
              className="project-meta"
              variants={itemVariants}
            >
              <span className="category">{project.category}</span>
              <span 
                className="status"
                style={{ backgroundColor: getStatusColor(project.status) }}
              >
                {project.status.replace('-', ' ').toUpperCase()}
              </span>
              <span className="year">{project.year}</span>
            </motion.div>
            
            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              {project.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="project-content">
        <div className="container">
          <div className="content-grid">
            {/* Main Content */}
            <motion.div 
              className="main-content"
              variants={containerVariants}
            >
              {/* Full Description */}
              <motion.section 
                className="description-section"
                variants={itemVariants}
              >
                <h2>Project Overview</h2>
                <p>{project.fullDescription}</p>
              </motion.section>

              {/* Features */}
              <motion.section 
                className="features-section"
                variants={itemVariants}
              >
                <h2>Key Features</h2>
                <div className="features-grid">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="feature-card"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Gallery */}
              <motion.section 
                className="gallery-section"
                variants={itemVariants}
              >
                <h2>Project Gallery</h2>
                <div className="gallery-grid">
                  {project.gallery.map((item, index) => (
                    <motion.div
                      key={index}
                      className="gallery-item"
                      whileHover={{ scale: 1.1, rotate: [0, -1, 1, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="gallery-icon">{item}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Challenges & Solutions */}
              <motion.section 
                className="challenges-section"
                variants={itemVariants}
              >
                <div className="challenges-grid">
                  <div className="challenges-card">
                    <h3>🏗️ Challenges</h3>
                    <ul>
                      {project.challenges.map((challenge, index) => (
                        <motion.li
                          key={challenge}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {challenge}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="solutions-card">
                    <h3>💡 Solutions</h3>
                    <ul>
                      {project.solutions.map((solution, index) => (
                        <motion.li
                          key={solution}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {solution}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.section>
            </motion.div>

            {/* Sidebar */}
            <motion.div 
              className="sidebar"
              variants={containerVariants}
            >
              <motion.div 
                className="project-info-card"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <h3>Project Details</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">📍 Location</span>
                    <span className="info-value">{project.location}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">⏱️ Duration</span>
                    <span className="info-value">{project.duration}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">💰 Budget</span>
                    <span className="info-value">{project.budget}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">📏 Size</span>
                    <span className="info-value">{project.size}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">👥 Team Size</span>
                    <span className="info-value">{project.team}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">📅 Year</span>
                    <span className="info-value">{project.year}</span>
                  </div>
                </div>
              </motion.div>

              <motion.button 
                className="inquire-btn"
                onClick={handleInquireProject}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Inquire About Similar Project
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetails;