import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import '../styles/Blog.css';

const BlogPost = () => {
  const { id } = useParams();

  // Complete blog content database
  const blogPosts = {
    1: {
      title: "10 Essential Questions to Ask Before Hiring a Construction Company",
      content: `
        <h2>Making the Right Choice for Your Construction Project</h2>
        
        <p>Choosing the right construction company is one of the most important decisions you'll make for your project. Asking the right questions can save you time, money, and stress. Here are 10 essential questions every homeowner should ask:</p>
        
        <h3>1. How Long Have You Been in Business?</h3>
        <p>Experience matters in construction. Look for companies with a proven track record and extensive experience in projects similar to yours.</p>
        
        <h3>2. Can You Provide References from Recent Projects?</h3>
        <p>Speaking with past clients gives you valuable insights into the company's work quality, communication, and reliability.</p>
        
        <h3>3. Are You Licensed and Insured?</h3>
        <p>Verify that the company holds all necessary licenses and carries adequate insurance coverage, including liability and workers' compensation.</p>
        
        <h3>4. What is Your Project Timeline?</h3>
        <p>Understand the estimated start date, duration, and completion timeline. Ask about their process for handling delays.</p>
        
        <h3>5. How Do You Handle Change Orders?</h3>
        <p>Changes are common in construction projects. Ensure there's a clear process for documenting and pricing changes.</p>
        
        <h3>6. Who Will Be My Point of Contact?</h3>
        <p>Know who to contact with questions or concerns throughout the project. Clear communication is crucial.</p>
        
        <h3>7. What is Your Payment Schedule?</h3>
        <p>Understand when payments are due and what they cover. Be wary of companies demanding large upfront payments.</p>
        
        <h3>8. Do You Provide Warranties on Your Work?</h3>
        <p>Ask about warranties for materials and workmanship. Reputable companies stand behind their work.</p>
        
        <h3>9. How Do You Handle Permits and Inspections?</h3>
        <p>Ensure the company handles all necessary permits and coordinates with local building inspectors.</p>
        
        <h3>10. What Sets You Apart from Other Construction Companies?</h3>
        <p>This question helps you understand their unique value proposition and commitment to quality.</p>
        
        <h2>Final Thoughts</h2>
        <p>Taking the time to ask these questions will help you find a construction partner who understands your vision, communicates clearly, and delivers quality results. Remember, the cheapest option isn't always the best value when it comes to construction.</p>
        
        <p>At BuildPro Construction, we welcome these questions and are transparent about our processes, pricing, and track record. We believe an informed client is our best partner.</p>
      `,
      author: "Sarah Johnson",
      date: "2025-01-20",
      readTime: "6 min read",
      category: "tips",
      image: "❓",
      tags: ["hiring", "tips", "selection", "questions"]
    },
    2: {
      title: "Sustainable Building: Eco-Friendly Materials for Modern Construction",
      content: `
        <h2>Building a Greener Future</h2>
        
        <p>Sustainable construction is no longer a trend—it's a necessity. As environmental awareness grows, more homeowners and builders are seeking eco-friendly materials that reduce environmental impact without compromising quality. Here's our comprehensive guide to sustainable building materials.</p>
        
        <h3>Bamboo: The Renewable Wonder</h3>
        <p>Bamboo is one of the fastest-growing plants on Earth, making it an excellent renewable resource. It's stronger than many hardwoods and perfect for flooring, cabinetry, and structural elements.</p>
        
        <h3>Recycled Steel: Strength with Sustainability</h3>
        <p>Using recycled steel reduces energy consumption by up to 75% compared to new steel production. It's durable, strong, and perfect for structural frameworks.</p>
        
        <h3>Reclaimed Wood: Character with Conscience</h3>
        <p>Reclaimed wood from old buildings, barns, and factories adds unique character while reducing deforestation. Each piece tells a story while being environmentally responsible.</p>
        
        <h3>Insulated Concrete Forms (ICFs)</h3>
        <p>ICFs provide excellent insulation, reducing energy costs by up to 20%. They're made from recycled materials and offer superior durability and disaster resistance.</p>
        
        <h3>Low-VOC Paints and Finishes</h3>
        <p>Traditional paints release volatile organic compounds (VOCs) that can affect indoor air quality. Low-VOC alternatives are healthier for your family and the environment.</p>
        
        <h3>Solar Tiles: Beauty Meets Function</h3>
        <p>Modern solar tiles integrate seamlessly with traditional roofing materials while generating clean energy. They're durable, efficient, and aesthetically pleasing.</p>
        
        <h3>Cork Flooring: Comfort Underfoot</h3>
        <p>Cork is harvested from the bark of cork oak trees without harming the tree. It's renewable, provides excellent insulation, and offers natural comfort underfoot.</p>
        
        <h2>Benefits of Sustainable Materials</h2>
        
        <h3>Energy Efficiency</h3>
        <p>Many sustainable materials provide better insulation, reducing heating and cooling costs significantly.</p>
        
        <h3>Improved Indoor Air Quality</h3>
        <p>Natural materials often have lower chemical emissions, creating healthier living environments.</p>
        
        <h3>Long-Term Savings</h3>
        <p>While some sustainable materials have higher upfront costs, they often last longer and reduce maintenance expenses.</p>
        
        <h3>Increased Property Value</h3>
        <p>Green buildings often command higher resale values and attract environmentally conscious buyers.</p>
        
        <h2>Our Commitment to Sustainability</h2>
        <p>At BuildPro Construction, we're committed to incorporating sustainable practices in every project. We work with clients to select materials that align with their environmental values while meeting their practical needs and budget constraints.</p>
        
        <p>The future of construction is green, and we're proud to be leading the way in sustainable building practices that benefit both our clients and our planet.</p>
      `,
      author: "Mike Chen",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "sustainability",
      image: "🌿",
      tags: ["sustainability", "materials", "eco-friendly", "green-building"]
    }
    // Add more posts following the same structure
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="blog-post-page" style={{marginTop: '80px', padding: '2rem'}}>
        <div className="container">
          <h1>Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="back-to-blog">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="blog-post-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.article 
          className="blog-post"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Post Header */}
          <header className="post-header">
            <motion.div 
              className="post-image"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {post.image}
            </motion.div>
            
            <motion.div 
              className="post-meta"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className={`post-category ${post.category}`}>{post.category}</span>
              <h1 className="post-title">{post.title}</h1>
              <div className="post-details">
                <span className="post-author">By {post.author}</span>
                <span className="post-date">{post.date}</span>
                <span className="post-read-time">{post.readTime}</span>
              </div>
            </motion.div>
          </header>

          {/* Post Content */}
          <motion.div 
            className="post-content"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Post Footer */}
          <motion.footer 
            className="post-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="post-tags">
              <span>Tags: </span>
              {post.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            
            <Link to="/blog" className="back-to-blog">
              ← Back to Blog
            </Link>
          </motion.footer>
        </motion.article>

        {/* Related Posts */}
        <motion.section 
          className="related-posts"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <h3>You Might Also Like</h3>
          <div className="related-grid">
            {/* Add related posts here */}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default BlogPost;