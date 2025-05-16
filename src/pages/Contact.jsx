// src/pages/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.submit();
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 5000);
  };

  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="We'd love to hear from you! Reach out for event inquiries, partnerships, or support."
        imageUrl="/images/hero-bg.jpg"
        primaryButtonText="Our Services"
        primaryButtonLink="/services"
      />
      
      <section className="py-16 bg-evera-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-evera-teal-dark">Send Us a Message</h2>
            <p className="mb-6 text-evera-dark">
              Fill out the form below and our team will get back to you as soon as possible.<br/>
              <span className="font-semibold">
                Or call us directly: {' '}
                <a href="tel:+966502252019" className="text-evera-teal-dark hover:underline">
                  +966 50 225 2019
                </a>
              </span>
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-evera-skyblue/20 text-evera-teal-dark p-4 rounded mb-4 text-center border border-evera-skyblue"
              >
                Thank you for reaching out! We have received your message and will respond soon.
              </motion.div>
            ) : (
              <form
                action="https://formspree.io/f/xjkwlwlq"
                method="POST"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
                className="max-w-full"
              >
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-1 text-evera-teal-dark font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border border-evera-skyblue/30 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-evera-skyblue"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block mb-1 text-evera-teal-dark font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-evera-skyblue/30 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-evera-skyblue"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block mb-1 text-evera-teal-dark font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    className="w-full border border-evera-skyblue/30 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-evera-skyblue"
                  ></textarea>
                </div>

                <div className="mb-6">
                  <label htmlFor="upload" className="block mb-1 text-evera-teal-dark font-medium">
                    File Upload (optional)
                  </label>
                  <input
                    type="file"
                    id="upload"
                    name="upload"
                    className="w-full file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-evera-teal-dark file:bg-evera-sand/50 hover:file:bg-evera-sand"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="bg-evera-teal-dark text-white px-6 py-3 rounded hover:bg-evera-sand hover:text-evera-teal-dark transition-colors font-semibold w-full"
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;