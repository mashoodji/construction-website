import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Blog.css';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Pakistan-specific blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Construction Cost in Pakistan 2025: Complete Guide",
      excerpt: "Detailed breakdown of construction costs per square foot in major Pakistani cities including Lahore, Karachi, and Islamabad.",
      category: "costing",
      date: "2025-01-20",
      readTime: "8 min read",
      image: "💰",
      author: "Ahmed Raza",
      tags: ["cost", "pricing", "budget", "pakistan"]
    },
    {
      id: 2,
      title: "Building Materials Price List in Pakistan 2025",
      excerpt: "Current market rates for cement, steel, bricks, and other essential construction materials across Pakistan.",
      category: "materials",
      date: "2025-01-15",
      readTime: "6 min read",
      image: "🏗️",
      author: "Sara Khan",
      tags: ["materials", "cement", "steel", "prices"]
    },
    {
      id: 3,
      title: "LDA & CDA Building Regulations 2025",
      excerpt: "Complete guide to LDA Lahore and CDA Islamabad building codes, permits, and approval processes.",
      category: "regulations",
      date: "2025-01-10",
      readTime: "7 min read",
      image: "📋",
      author: "Bilal Ahmed",
      tags: ["LDA", "CDA", "permits", "regulations"]
    },
    {
      id: 4,
      title: "Monsoon-Proof Construction in Pakistan",
      excerpt: "Essential techniques to protect your construction from heavy rains and flooding during monsoon season.",
      category: "weather",
      date: "2025-01-05",
      readTime: "5 min read",
      image: "🌧️",
      author: "Zainab Malik",
      tags: ["monsoon", "weather", "protection", "pakistan"]
    },
    {
      id: 5,
      title: "Energy Efficient Home Design for Pakistani Climate",
      excerpt: "How to design homes that stay cool in summer and warm in winter while reducing electricity bills.",
      category: "sustainability",
      date: "2024-12-28",
      readTime: "6 min read",
      image: "🌞",
      author: "Usman Ali",
      tags: ["energy", "design", "cooling", "pakistan"]
    },
    {
      id: 6,
      title: "Hiring Contractors in Pakistan: Complete Guide",
      excerpt: "How to verify contractor licenses, check references, and avoid common scams in Pakistani construction industry.",
      category: "tips",
      date: "2024-12-20",
      readTime: "9 min read",
      image: "👷",
      author: "Fatima Noor",
      tags: ["contractors", "hiring", "verification", "pakistan"]
    },
    {
      id: 7,
      title: "Earthquake Resistant Construction in Pakistan",
      excerpt: "Building techniques and materials that can withstand seismic activity in earthquake-prone regions of Pakistan.",
      category: "safety",
      date: "2024-12-15",
      readTime: "7 min read",
      image: "🏢",
      author: "Omar Farooq",
      tags: ["earthquake", "safety", "structure", "pakistan"]
    },
    {
      id: 8,
      title: "Traditional vs Modern Construction in Pakistan",
      excerpt: "Comparing traditional Pakistani building methods with modern construction techniques and their pros/cons.",
      category: "methods",
      date: "2024-12-10",
      readTime: "8 min read",
      image: "🔄",
      author: "Ayesha Siddiqui",
      tags: ["traditional", "modern", "comparison", "pakistan"]
    },
    {
      id: 9,
      title: "Solar System Integration in Pakistani Homes",
      excerpt: "Complete guide to integrating solar panels and inverters in new construction projects across Pakistan.",
      category: "technology",
      date: "2024-12-05",
      readTime: "6 min read",
      image: "☀️",
      author: "Haris Mahmood",
      tags: ["solar", "energy", "inverter", "pakistan"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'costing', name: 'Costing Guide', count: blogPosts.filter(post => post.category === 'costing').length },
    { id: 'materials', name: 'Materials', count: blogPosts.filter(post => post.category === 'materials').length },
    { id: 'regulations', name: 'Regulations', count: blogPosts.filter(post => post.category === 'regulations').length },
    { id: 'weather', name: 'Weather Proofing', count: blogPosts.filter(post => post.category === 'weather').length },
    { id: 'sustainability', name: 'Sustainability', count: blogPosts.filter(post => post.category === 'sustainability').length },
    { id: 'tips', name: 'Expert Tips', count: blogPosts.filter(post => post.category === 'tips').length },
    { id: 'safety', name: 'Safety', count: blogPosts.filter(post => post.category === 'safety').length },
    { id: 'methods', name: 'Methods', count: blogPosts.filter(post => post.category === 'methods').length },
    { id: 'technology', name: 'Technology', count: blogPosts.filter(post => post.category === 'technology').length }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <motion.div 
      className="blog-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        {/* Blog Header */}
        <div className="blog-header">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Pakistan Construction Guide
          </motion.h1>
          <motion.p
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Expert construction advice, costs, and regulations specific to Pakistan
          </motion.p>
        </div>

        {/* Categories */}
        <motion.div 
          className="blog-categories"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name} <span className="count">({category.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <motion.div 
          className="blog-grid"
          layout
        >
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="blog-card"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="blog-image">
                {post.image}
              </div>
              
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                  <span className={`blog-category ${post.category}`}>{post.category}</span>
                </div>
                
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                
                <div className="blog-footer">
                  {/* <span className="blog-author">By {post.author}</span> */}
                  <Link to={`/blog/${post.id}`} className="read-more">
                    View Details →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Pakistan-Specific Newsletter */}
        <motion.div 
          className="blog-newsletter"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3>Pakistan Construction Updates</h3>
          <p>Get latest material prices, regulations, and construction tips specific to Pakistan</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email address" />
            <select>
              <option value="">Select City</option>
              <option value="lahore">Lahore</option>
              <option value="karachi">Karachi</option>
              <option value="islamabad">Islamabad</option>
              <option value="rawalpindi">Rawalpindi</option>
              <option value="faisalabad">Faisalabad</option>
              <option value="multan">Multan</option>
            </select>
            <button type="submit">Subscribe</button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Blog;