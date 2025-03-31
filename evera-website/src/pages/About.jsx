// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';

const About = () => {
  return (
    <>
      <Hero 
        title="About Evera"
        subtitle="Creating meaningful digital experiences for life's most important moments"
        imageUrl="/images/hero-bg.jpg"
        primaryButtonText="Our Services"
        primaryButtonLink="/services" 
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
      
      <section className="py-16 bg-evera-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-evera-teal-dark">Our Story</h2>
              <p className="mb-6 text-evera-dark">
                Founded in 2020, Evera was born from a simple idea: that life's most meaningful events deserve digital experiences that match their importance. Whether celebrating joyous occasions or honoring solemn moments, we believe technology should enhance human connection, not replace it.
              </p>
              <p className="mb-8 text-evera-dark">
                Our team combines expertise in design, development, and event planning to create solutions that are both technically robust and emotionally resonant. We work closely with each client to understand their unique needs and create custom digital experiences that exceed expectations.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-evera-teal-dark">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-evera-teal-dark">Empathy First</h3>
                  <p className="text-evera-dark">We approach every project with deep empathy, understanding that we're creating experiences for some of life's most emotionally charged moments.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-evera-teal-dark">Technical Excellence</h3>
                  <p className="text-evera-dark">We believe in building robust, reliable solutions that work flawlessly when they matter most.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-evera-teal-dark">Beautiful Design</h3>
                  <p className="text-evera-dark">We create experiences that are not just functional but beautiful, respecting the significance of each event we help digitize.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-evera-teal-dark">Client Partnership</h3>
                  <p className="text-evera-dark">We see each client as a partner, working collaboratively to achieve the perfect digital solution for their needs.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
