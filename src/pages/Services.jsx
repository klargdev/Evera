// src/pages/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '../components/sections/Services';
import Hero from '../components/sections/Hero';

const ServicesPage = () => {
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Digital solutions for every important occasion"
        imageUrl="/images/corporate-event.jpg"
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Work"
        secondaryButtonLink="/portfolio"
      />
      
      <ServicesSection 
        title="Complete Digital Event Solutions"
        subtitle="From memorial websites to corporate event systems, we create custom digital experiences for all types of events"
      />
      
      <section className="py-16 bg-evera-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-8 text-center text-evera-teal-dark"
            >
              How We Work
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="w-16 h-16 bg-evera-skyblue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-evera-teal-dark">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-evera-teal-dark">Consultation</h3>
                <p className="text-evera-dark">We begin with a detailed consultation to understand your event needs and goals.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="w-16 h-16 bg-evera-skyblue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-evera-teal-dark">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-evera-teal-dark">Design & Development</h3>
                <p className="text-evera-dark">Our team designs and builds a custom solution tailored to your specific requirements.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="w-16 h-16 bg-evera-skyblue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-evera-teal-dark">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-evera-teal-dark">Support & Success</h3>
                <p className="text-evera-dark">We provide ongoing support to ensure your event's digital experience is a success.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
