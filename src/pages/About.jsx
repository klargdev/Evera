// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';

const About = () => {
  return (
    <>
      <Hero 
        title="About Evera"
        subtitle="Platforms that bring people and resources together to achieve their shared dreams."
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
              <h2 className="text-3xl font-bold mb-6 text-evera-teal-dark">Mission</h2>
              <p className="mb-8 text-evera-dark">
                To provide platforms that bring people and resources together to achieve their shared/common objectives and dreams.
              </p>
              <h2 className="text-3xl font-bold mb-6 text-evera-teal-dark">Vision</h2>
              <p className="mb-8 text-evera-dark">
                Become a leading provider of digital Events, RSVP and Collections services throughout the country with a market share of between 30-40% of all events, featuring a strong digital marketing portfolio covering over 100 top influencers with &gt; 10m followers each as well as other supportive digital services within 10 years.
              </p>
              <h2 className="text-3xl font-bold mb-6 text-evera-teal-dark">Objectives</h2>
              <ul className="mb-8 text-evera-dark list-disc pl-6 space-y-2">
                <li><b>Short Term (1yr):</b> Become provider of eulogy and collections services for 50% of funeral events in Accra. Provide digital marketing services to 5 influencers with 10M followers each.</li>
                <li><b>Medium Term (5yrs):</b> Expand beyond Accra to 5 other regions. Include general RSVP and collections services for all kinds of events including weddings, birthdays, outdoorings, conferences, meetings etc. At least 10 events weekly. Include virtual event organisation and hosting as a service, expand social media marketing and promotions to include 50 top influencers with &gt; 10M followers. Develop new digital platforms to bring people together.</li>
                <li><b>Long Term (10yrs):</b> Become a leading provider of digital RSVP, Events and Collections services throughout the country with a market share of between 30-40% of all events with a strong digital marketing portfolio covering over 100 top influencers with &gt; 10m followers each as well as other supportive digital services.</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-evera-teal-dark">Why Choose Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
                  <span className="mr-4 text-evera-teal-dark">
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' /></svg>
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-evera-teal-dark">Proven Digital Expertise</h3>
                    <p className="text-evera-dark">We combine technology and empathy to deliver seamless, meaningful digital event experiences.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
                  <span className="mr-4 text-evera-teal-dark">
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0 10c-4.418 0-8-1.79-8-4V6c0-2.21 3.582-4 8-4s8 1.79 8 4v8c0 2.21-3.582 4-8 4z' /></svg>
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-evera-teal-dark">Comprehensive Services</h3>
                    <p className="text-evera-dark">From eulogies to influencer marketing, we cover every digital need for your event or organization.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
                  <span className="mr-4 text-evera-teal-dark">
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2' /></svg>
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-evera-teal-dark">Trusted by Top Influencers</h3>
                    <p className="text-evera-dark">We work with leading influencers and organizations, ensuring your event gets the attention it deserves.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
                  <span className="mr-4 text-evera-teal-dark">
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' /></svg>
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-evera-teal-dark">Support & Innovation</h3>
                    <p className="text-evera-dark">We provide ongoing support and are always innovating to bring you the best digital solutions.</p>
                  </div>
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
