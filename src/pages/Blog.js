import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Blog.css';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Complete blog posts database
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Questions to Ask Before Hiring a Construction Company",
      excerpt: "Make an informed decision when choosing your construction partner with these critical questions about experience, pricing, and project management.",
      category: "tips",
      date: "2025-01-20",
      readTime: "6 min read",
      image: "❓",
      author: "Sarah Johnson",
      tags: ["hiring", "tips", "selection"]
    },
    {
      id: 2,
      title: "Sustainable Building: Eco-Friendly Materials for Modern Construction",
      excerpt: "Discover the latest sustainable materials that reduce environmental impact while delivering superior performance and durability.",
      category: "sustainability",
      date: "2025-01-15",
      readTime: "8 min read",
      image: "🌿",
      author: "Mike Chen",
      tags: ["sustainability", "materials", "eco-friendly"]
    },
    {
      id: 3,
      title: "Construction Cost Breakdown: Understanding Your Project Budget",
      excerpt: "A detailed look at where your construction dollars go, from materials and labor to permits and unexpected expenses.",
      category: "budgeting",
      date: "2025-01-10",
      readTime: "7 min read",
      image: "💰",
      author: "Emily Davis",
      tags: ["budget", "cost", "planning"]
    },
    {
      id: 4,
      title: "The Complete Home Renovation Timeline: What to Expect",
      excerpt: "From initial consultation to final walkthrough, understand each phase of your home renovation project timeline.",
      category: "renovation",
      date: "2025-01-05",
      readTime: "5 min read",
      image: "📅",
      author: "John Smith",
      tags: ["renovation", "timeline", "planning"]
    },
    {
      id: 5,
      title: "Building Safety Standards Every Homeowner Should Know",
      excerpt: "Key safety protocols and building codes that ensure your construction project meets all regulatory requirements.",
      category: "safety",
      date: "2024-12-28",
      readTime: "6 min read",
      image: "🦺",
      author: "David Wilson",
      tags: ["safety", "codes", "regulations"]
    },
    {
      id: 6,
      title: "Smart Home Technology Integration in New Construction",
      excerpt: "How to seamlessly incorporate smart home features during construction for maximum efficiency and convenience.",
      category: "technology",
      date: "2024-12-20",
      readTime: "9 min read",
      image: "🏠",
      author: "Lisa Brown",
      tags: ["smart home", "technology", "automation"]
    },
    {
      id: 7,
      title: "Commercial vs Residential Construction: Key Differences",
      excerpt: "Understanding the fundamental differences between commercial and residential construction projects.",
      category: "education",
      date: "2024-12-15",
      readTime: "5 min read",
      image: "🏢",
      author: "Sarah Johnson",
      tags: ["commercial", "residential", "differences"]
    },
    {
      id: 8,
      title: "Weather-Proofing Your Construction Project",
      excerpt: "Essential strategies to protect your construction project from weather-related delays and damage.",
      category: "tips",
      date: "2024-12-10",
      readTime: "4 min read",
      image: "⛈️",
      author: "Mike Chen",
      tags: ["weather", "protection", "planning"]
    },
    {
      id: 9,
      title: "The Rise of Modular Construction: Benefits and Considerations",
      excerpt: "Exploring the advantages of modular construction methods for faster, more efficient building projects.",
      category: "innovation",
      date: "2024-12-05",
      readTime: "7 min read",
      image: "🏗️",
      author: "John Smith",
      tags: ["modular", "innovation", "efficiency"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'tips', name: 'Expert Tips', count: blogPosts.filter(post => post.category === 'tips').length },
    { id: 'sustainability', name: 'Sustainability', count: blogPosts.filter(post => post.category === 'sustainability').length },
    { id: 'budgeting', name: 'Budgeting', count: blogPosts.filter(post => post.category === 'budgeting').length },
    { id: 'renovation', name: 'Renovation', count: blogPosts.filter(post => post.category === 'renovation').length },
    { id: 'safety', name: 'Safety', count: blogPosts.filter(post => post.category === 'safety').length },
    { id: 'technology', name: 'Technology', count: blogPosts.filter(post => post.category === 'technology').length },
    { id: 'education', name: 'Education', count: blogPosts.filter(post => post.category === 'education').length },
    { id: 'innovation', name: 'Innovation', count: blogPosts.filter(post => post.category === 'innovation').length }
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
            Construction Insights & Tips
          </motion.h1>
          <motion.p
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Expert advice, industry trends, and practical tips for your construction projects
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
                  <span className="blog-author">By {post.author}</span>
                  <Link to={`/blog/${post.id}`} className="read-more">
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div 
          className="blog-newsletter"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3>Stay Updated with Construction Insights</h3>
          <p>Get the latest tips and industry trends delivered to your inbox</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Blog;