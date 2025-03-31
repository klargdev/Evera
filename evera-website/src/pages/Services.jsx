// src/pages/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ui/ServiceCard';

const servicesData = [
  {
    id: 1,
    title: "Memorial Tribute Websites",
    description: "Custom websites designed to honor memories and celebrate legacies with heartfelt design and robust functionality.",
    icon: "🕊️", // You can also use an image or icon component
  },
  {
    id: 2,
    title: "Wedding & Event Platforms",
    description: "Elegant digital solutions for managing weddings and events, including invitations, RSVPs, and live guestbooks.",
    icon: "💍",
  },
  {
    id: 3,
    title: "Corporate Event Systems",
    description: "Robust systems to streamline corporate event planning, registration, and on-site management.",
    icon: "🏢",
  },
  {
    id: 4,
    title: "Custom Event Apps",
    description: "Tailor-made mobile and web applications to enhance attendee engagement at events of any scale.",
    icon: "📱",
  },
  // Add more services as needed...
];

const Services = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-gray-900 text-white">
      <h1 className="text-5xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ServiceCard 
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
