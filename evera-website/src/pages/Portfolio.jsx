// src/pages/Portfolio.jsx
import React from 'react';
import { motion } from 'framer-motion';

const portfolioItems = [
  {
    id: 1,
    title: "Memorial Tribute Site",
    image: "https://via.placeholder.com/400x300",
    description: "A responsive website dedicated to memorial tributes, capturing heartfelt memories.",
    link: "/portfolio/memorial-tribute",
  },
  {
    id: 2,
    title: "Wedding Event Platform",
    image: "https://via.placeholder.com/400x300",
    description: "A custom event management solution for weddings with elegant design.",
    link: "/portfolio/wedding-platform",
  },
  {
    id: 3,
    title: "Corporate Event System",
    image: "https://via.placeholder.com/400x300",
    description: "A robust application for managing corporate events and conferences.",
    link: "/portfolio/corporate-event",
  },
  // Add more portfolio items as needed...
];

const Portfolio = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-8 text-center">Our Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-300 mb-4">{item.description}</p>
              <a
                href={item.link}
                className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded transition-colors"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
