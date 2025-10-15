import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/ConstructionCost.css';

const ConstructionCost = () => {
  const [formData, setFormData] = useState({
    area: '',
    unit: 'sqft',
    structureType: 'grey',
    city: 'lahore',
    quality: 'standard'
  });

  const [totalCost, setTotalCost] = useState(0);
  const [breakdown, setBreakdown] = useState({});
  const [materials, setMaterials] = useState({});

  // Pakistan-specific construction rates for 2025
  const constructionRates = {
    // Cost per square foot in PKR
    grey: {
      lahore: 3000,
      karachi: 3200,
      islamabad: 3300,
      rawalpindi: 2900,
      faisalabad: 2800,
      multan: 2750
    },
    finished: {
      lahore: 5000,
      karachi: 5200,
      islamabad: 5500,
      rawalpindi: 4800,
      faisalabad: 4700,
      multan: 4600
    },
    premium: {
      lahore: 7000,
      karachi: 7200,
      islamabad: 7500,
      rawalpindi: 6800,
      faisalabad: 6700,
      multan: 6500
    }
  };

  // Cost breakdown percentages
  const costBreakdown = {
    grey: {
      foundation: 25,
      structure: 40,
      masonry: 20,
      roofing: 15
    },
    finished: {
      foundation: 15,
      structure: 25,
      masonry: 15,
      roofing: 10,
      electrical: 8,
      plumbing: 7,
      finishing: 20
    },
    premium: {
      foundation: 12,
      structure: 20,
      masonry: 12,
      roofing: 8,
      electrical: 8,
      plumbing: 7,
      finishing: 33
    }
  };

  // Material quantities per 100 sqft
  const materialQuantities = {
    cement: 40, // bags
    steel: 400, // kg
    bricks: 1300, // pieces
    sand: 1.5, // truck (approx 700 cuft)
    crush: 1.2, // truck (approx 700 cuft)
  };

  // Current material prices in PKR (2025)
  const materialPrices = {
    cement: 1200, // per bag
    steel: 250, // per kg
    bricks: 12, // per piece
    sand: 18000, // per truck
    crush: 22000, // per truck
  };

  useEffect(() => {
    calculateCost();
  }, [formData]);

  const calculateCost = () => {
    if (!formData.area || formData.area <= 0) {
      setTotalCost(0);
      setBreakdown({});
      setMaterials({});
      return;
    }

    let area = parseFloat(formData.area);
    
    // Convert area to square feet if needed
    if (formData.unit === 'marla') {
      area = area * 225; // 1 marla = 225 sqft
    } else if (formData.unit === 'kanal') {
      area = area * 4500; // 1 kanal = 4500 sqft
    }

    // Get base rate
    const baseRate = constructionRates[formData.structureType]?.[formData.city] || 3000;
    const total = area * baseRate;

    // Calculate breakdown
    const breakdownPercentages = costBreakdown[formData.structureType];
    const calculatedBreakdown = {};
    
    Object.keys(breakdownPercentages).forEach(key => {
      calculatedBreakdown[key] = (total * breakdownPercentages[key]) / 100;
    });

    // Calculate materials
    const calculatedMaterials = {};
    const scale = area / 100; // Scale factor for the area
    
    Object.keys(materialQuantities).forEach(material => {
      const quantity = materialQuantities[material] * scale;
      const cost = quantity * materialPrices[material];
      calculatedMaterials[material] = {
        quantity: Math.ceil(quantity),
        cost: Math.round(cost)
      };
    });

    setTotalCost(Math.round(total));
    setBreakdown(calculatedBreakdown);
    setMaterials(calculatedMaterials);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const getCityName = (cityCode) => {
    const cityNames = {
      lahore: 'Lahore',
      karachi: 'Karachi',
      islamabad: 'Islamabad',
      rawalpindi: 'Rawalpindi',
      faisalabad: 'Faisalabad',
      multan: 'Multan'
    };
    return cityNames[cityCode] || cityCode;
  };

  const getStructureTypeName = (type) => {
    const typeNames = {
      grey: 'Grey Structure',
      finished: 'Finished House',
      premium: 'Premium Finish'
    };
    return typeNames[type] || type;
  };

  return (
    <motion.div 
      className="construction-cost-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        {/* Header Section */}
        <motion.div 
          className="calculator-header"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1>House Construction Cost Calculator in Pakistan 2025</h1>
          <p>Get accurate construction cost estimates based on latest market rates across Pakistan</p>
        </motion.div>

        <div className="calculator-content">
          {/* Calculator Form */}
          <motion.div 
            className="calculator-form-section"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="form-card">
              <h2>Choose Your Desired Options</h2>
              
              <div className="form-group">
                <label htmlFor="area">Enter Covered Area:</label>
                <div className="input-with-unit">
                  <input
                    type="number"
                    id="area"
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    placeholder="e.g., 1000"
                    min="1"
                  />
                  <select
                    name="unit"
                    value={formData.unit}
                    onChange={handleInputChange}
                  >
                    <option value="sqft">Square Feet</option>
                    <option value="marla">Marla</option>
                    <option value="kanal">Kanal</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="city">Select City:</label>
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                >
                  <option value="lahore">Lahore</option>
                  <option value="karachi">Karachi</option>
                  <option value="islamabad">Islamabad</option>
                  <option value="rawalpindi">Rawalpindi</option>
                  <option value="faisalabad">Faisalabad</option>
                  <option value="multan">Multan</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="structureType">Select Structure Type:</label>
                <select
                  id="structureType"
                  name="structureType"
                  value={formData.structureType}
                  onChange={handleInputChange}
                >
                  <option value="grey">Grey Structure</option>
                  <option value="finished">Finished House</option>
                  <option value="premium">Premium Finish</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="quality">Construction Quality:</label>
                <select
                  id="quality"
                  name="quality"
                  value={formData.quality}
                  onChange={handleInputChange}
                >
                  <option value="economy">Economy</option>
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                </select>
              </div>

              <div className="calculation-note">
                <p>📊 <strong>This Calculation is based on latest rates in the market!</strong></p>
                <p>Rates updated for 2025 construction season</p>
              </div>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div 
            className="calculator-results-section"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Total Cost Card */}
            <div className="total-cost-card">
              <h3>Total Estimated Cost</h3>
              <div className="total-cost-amount">
                PKR {formatNumber(totalCost)}
              </div>
              <div className="cost-details">
                <p>
                  <strong>Location:</strong> {getCityName(formData.city)}<br />
                  <strong>Type:</strong> {getStructureTypeName(formData.structureType)}<br />
                  <strong>Area:</strong> {formData.area || '0'} {formData.unit}
                </p>
              </div>
            </div>

            {/* Cost Breakdown */}
            {totalCost > 0 && (
              <motion.div 
                className="breakdown-section"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h4>Cost Breakdown</h4>
                <div className="breakdown-bars">
                  {Object.keys(breakdown).map((item, index) => (
                    <div key={item} className="breakdown-item">
                      <div className="breakdown-label">
                        <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                        <span>{formatNumber(Math.round(breakdown[item]))} PKR</span>
                      </div>
                      <div className="breakdown-bar">
                        <div 
                          className="breakdown-fill"
                          style={{ 
                            width: `${costBreakdown[formData.structureType][item]}%`,
                            animationDelay: `${index * 0.1}s`
                          }}
                        ></div>
                      </div>
                      <div className="breakdown-percentage">
                        {costBreakdown[formData.structureType][item]}%
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Materials Estimate */}
            {totalCost > 0 && (
              <motion.div 
                className="materials-section"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h4>Material Estimate</h4>
                <div className="materials-grid">
                  {Object.keys(materials).map(material => (
                    <div key={material} className="material-item">
                      <div className="material-name">
                        {material.charAt(0).toUpperCase() + material.slice(1)}
                      </div>
                      <div className="material-quantity">
                        {materials[material].quantity} {material === 'cement' ? 'bags' : 
                         material === 'steel' ? 'kg' : 
                         material === 'bricks' ? 'pieces' : 'trucks'}
                      </div>
                      <div className="material-cost">
                        {formatNumber(materials[material].cost)} PKR
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Information Section */}
        <motion.div 
          className="info-section"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="info-content">
            <h2>House Construction Cost Calculator</h2>
            <p>
              Building a house is one of the most significant investments in a person's life, 
              as a house provides not just a place to live but a foundation for future generations. 
              Keeping the significance of a house in Pakistan in mind, the importance of thoughtful 
              planning and budgeting cannot be overstated, as it ensures the construction process 
              is smooth and aligns with personal preferences and financial capabilities.
            </p>

            <p>
              In Pakistan, rising costs of materials, labor, and land make accurate cost estimation 
              crucial for avoiding unexpected financial burdens. Thus, calculating the cost of construction 
              involves considering various factors, such as material prices, labor charges, and finishing 
              expenses. Therefore, a reliable house construction cost calculator can simplify this process, 
              as it offers a clear estimate to help individuals plan effectively and make informed decisions.
            </p>

            <div className="info-grid">
              <div className="info-card">
                <h3>🏙️ Things to Consider When Constructing in Pakistan</h3>
                <ul>
                  <li><strong>Location Selection:</strong> Proximity to schools, workplaces, and markets</li>
                  <li><strong>Utility Access:</strong> Water, electricity, and gas connections</li>
                  <li><strong>Material Quality:</strong> Balance between cost and durability</li>
                  <li><strong>Labor Expertise:</strong> Skilled workers reduce long-term costs</li>
                  <li><strong>Legal Approvals:</strong> LDA, CDA, and local authority permits</li>
                </ul>
              </div>

              <div className="info-card">
                <h3>💰 Factors Affecting Construction Cost</h3>
                <ul>
                  <li><strong>House Size:</strong> Larger areas require more materials</li>
                  <li><strong>Material Quality:</strong> Premium materials increase costs</li>
                  <li><strong>Location:</strong> Urban areas are more expensive</li>
                  <li><strong>Design Complexity:</strong> Custom designs cost more</li>
                  <li><strong>Finishing Level:</strong> From basic to luxury finishes</li>
                </ul>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="faq-section">
              <h3>📋 Frequently Asked Questions</h3>
              
              <div className="faq-item">
                <h4>What is the cost of construction per sq ft in Pakistan?</h4>
                <p>
                  Construction costs have consistently increased over the years. In 2025, 
                  grey structure costs range from <strong>2,750 to 3,300 PKR per square foot</strong> 
                  depending on the city and quality of materials.
                </p>
              </div>

              <div className="faq-item">
                <h4>How much does it cost to build a 5 Marla house in Pakistan?</h4>
                <p>
                  For a 5 Marla house (1125 sqft), the estimated cost in 2025 ranges between 
                  <strong> 3.1 to 3.7 million PKR</strong> for grey structure, and 
                  <strong> 5.2 to 6.2 million PKR</strong> for finished construction.
                  </p>
                </div>

              <div className="faq-item">
                <h4>How much does it cost to build a 10 Marla house in Pakistan?</h4>
                <p>
                  A 10 Marla house (2250 sqft) in 2025 costs approximately 
                  <strong> 6.2 to 7.4 million PKR</strong> for grey structure, and 
                  <strong> 10.4 to 12.4 million PKR</strong> for finished construction.
                </p>
              </div>

              <div className="faq-item">
                <h4>How much steel is required for a 1200 sq ft house?</h4>
                <p>
                  For a 1200 sq ft house, approximately <strong>3.5 to 4.0 tons of steel</strong> 
                  is required, depending on the design and structural requirements.
                </p>
              </div>
            </div>

            <div className="conclusion">
              <h3>Summary</h3>
              <p>
                A house construction cost calculator is a helpful tool for anyone planning to build a home, 
                as it provides accurate estimates for materials, labor, and other expenses. It simplifies 
                the budgeting process by helping you avoid unexpected costs and make wise choices.
              </p>
              <p>
                Whether you're constructing a small house or a larger property, using a cost calculator 
                guarantees efficient planning and resource allocation. By understanding the estimated expenses, 
                you can stay within your budget while achieving your desired construction quality.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="cta-section"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="cta-content">
            <h3>Need Professional Construction Services?</h3>
            <p>Get expert construction consulting and project management for your dream home</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get Free Consultation</a>
              <a href="tel:+92 321 8836371" className="btn btn-secondary">Call Now: +92 321 8836371</a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ConstructionCost;