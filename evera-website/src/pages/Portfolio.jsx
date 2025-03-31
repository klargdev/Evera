// src/pages/Portfolio.jsx
import React from 'react';
import { motion } from 'framer-motion';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import Hero from '../components/sections/Hero';

const PortfolioPage = () => {
  return (
    <>
      <Hero
        title="Our Portfolio"
        subtitle="See how we've helped clients create memorable digital experiences for their events"
        imageUrl="/images/wedding-event.jpg"
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Our Services"
        secondaryButtonLink="/services"
      />
      
      <FeaturedProjects 
        title="Our Latest Projects"
        subtitle="Explore our recent work creating digital solutions for various events"
      />
      
      <section className="py-16 bg-evera-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6 text-evera-teal-dark"
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg mb-8 text-evera-dark"
            >
              Contact us today to discuss how we can create the perfect digital solution for your next event.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center font-medium rounded-lg px-5 py-3 text-lg transition-all duration-300 bg-evera-teal-dark hover:bg-opacity-90 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-evera-teal"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
