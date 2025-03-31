// src/pages/Contact.jsx
import React from 'react';
import Hero from '../components/sections/Hero';
import ContactForm from '../components/ui/ContactForm';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team to discuss your event needs"
        imageUrl="/images/hero-bg.jpg"
        primaryButtonText="Send Message"
        primaryButtonLink="#contact-form"
        secondaryButtonText="Our Services"
        secondaryButtonLink="/services"
      />
      
      <section id="contact-form" className="py-16 bg-evera-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-8 text-center text-evera-teal-dark"
            >
              Send Us a Message
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 md:p-10 rounded-lg shadow-md"
            >
              <ContactForm onSubmit={(data) => console.log(data)} />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
