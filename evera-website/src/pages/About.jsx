// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-8 text-center">About Evera</h1>
      
      {/* Our Mission Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed">
          Evera is dedicated to creating modern, digital experiences for every kind of event. From the most solemn memorials to the most joyful celebrations, we design and build software applications that help capture the essence of each moment. Our mission is to empower you to celebrate life’s milestones with innovative, tailored solutions that truly resonate.
        </p>
      </section>
      
      {/* Who We Are Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
        <p className="text-lg leading-relaxed">
          We are a forward-thinking technology company specializing in custom digital solutions for events. Combining creativity, state-of-the-art technology, and a deep understanding of human emotions, our team crafts applications that honor both the bittersweet and the joyous moments in life. At Evera, every project is an opportunity to make memories last.
        </p>
      </section>
      
      {/* Our Values Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc ml-6 text-lg">
          <li><strong>Innovation:</strong> Continuously pushing the boundaries of digital experiences.</li>
          <li><strong>Integrity:</strong> Upholding the highest standards of honesty and transparency.</li>
          <li><strong>Compassion:</strong> Understanding the significance of every event and honoring it with care.</li>
          <li><strong>Excellence:</strong> Striving for quality and precision in all our projects.</li>
        </ul>
      </section>
      
      {/* Meet the Team Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Alice Johnson" 
              className="w-32 h-32 rounded-full mx-auto mb-4" 
            />
            <h3 className="text-xl font-bold text-center">Alice Johnson</h3>
            <p className="text-center text-gray-400">CEO & Founder</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Bob Smith" 
              className="w-32 h-32 rounded-full mx-auto mb-4" 
            />
            <h3 className="text-xl font-bold text-center">Bob Smith</h3>
            <p className="text-center text-gray-400">Lead Developer</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Cathy Brown" 
              className="w-32 h-32 rounded-full mx-auto mb-4" 
            />
            <h3 className="text-xl font-bold text-center">Cathy Brown</h3>
            <p className="text-center text-gray-400">Creative Director</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
