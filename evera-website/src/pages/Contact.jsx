// src/pages/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

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
              <span className="font-semibold">Or call us directly: <a href="tel:0502252019" className="text-evera-teal-dark hover:underline">0502252019</a></span>
            </p>
            {submitted ? (
              <div className="bg-evera-skyblue/20 text-evera-teal-dark p-4 rounded mb-4 text-center">
                Thank you for reaching out! We have received your message and will respond soon.
              </div>
            ) : (
              <form
                action="https://formspree.io/f/xwkgyyqg" // Replace with your Formspree form ID
                method="POST"
                onSubmit={() => setSubmitted(true)}
              >
                <div className="mb-4">
                  <label className="block mb-1 text-evera-teal-dark font-medium">Name</label>
                  <input type="text" name="name" required className="w-full border border-evera-skyblue/30 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-evera-skyblue" />
                </div>
                <div className="mb-4">
                  <label className="block mb-1 text-evera-teal-dark font-medium">Email</label>
                  <input type="email" name="email" required className="w-full border border-evera-skyblue/30 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-evera-skyblue" />
                </div>
                <div className="mb-4">
                  <label className="block mb-1 text-evera-teal-dark font-medium">Message</label>
                  <textarea name="message" required rows="5" className="w-full border border-evera-skyblue/30 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-evera-skyblue"></textarea>
                </div>
                <button type="submit" className="bg-evera-teal-dark text-white px-6 py-2 rounded hover:bg-evera-sand hover:text-evera-teal-dark transition-colors font-semibold">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
