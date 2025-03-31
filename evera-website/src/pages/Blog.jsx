// src/pages/Blog.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';

const blogPosts = [
  {
    id: 1,
    title: "Digital Innovation in Event Planning",
    date: "March 15, 2025",
    author: "Alice Johnson",
    excerpt:
      "Discover how digital solutions are transforming event planning, from seamless guest management to immersive virtual experiences.",
    link: "/blog/digital-innovation-event-planning",
  },
  {
    id: 2,
    title: "Creating Memorable Tribute Experiences",
    date: "February 28, 2025",
    author: "Bob Smith",
    excerpt:
      "Learn about our approach to creating heartfelt, digital tributes that honor loved ones and create lasting memories.",
    link: "/blog/memorable-tribute-experiences",
  },
  {
    id: 3,
    title: "Event Software Trends for 2025",
    date: "February 10, 2025",
    author: "Cathy Brown",
    excerpt:
      "Explore the latest trends in event technology and software design, and see how Evera is leading the way.",
    link: "/blog/event-software-trends-2025",
  },
];

const Blog = () => {
  return (
    <>
      <Hero
        title="Our Blog"
        subtitle="Insights and updates from the world of digital event solutions"
        imageUrl="/images/hero-bg.jpg"
        primaryButtonText="Latest Articles"
        primaryButtonLink="#blog-posts"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
      
      <section id="blog-posts" className="py-16 bg-evera-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-8 text-center text-evera-teal-dark"
            >
              Latest Articles
            </motion.h2>
            
            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-evera-skyblue/20 rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition-all duration-300 hover:border-evera-skyblue/40"
                >
                  <h2 className="text-2xl font-semibold mb-2 text-evera-teal-dark">{post.title}</h2>
                  <div className="text-sm text-evera-teal mb-4">
                    <span>{post.date}</span> | <span>{post.author}</span>
                  </div>
                  <p className="text-lg mb-4 text-evera-dark">{post.excerpt}</p>
                  <a
                    href={post.link}
                    className="inline-block px-6 py-2 bg-evera-teal-dark hover:bg-opacity-90 text-white font-semibold rounded transition-colors"
                  >
                    Read More
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
