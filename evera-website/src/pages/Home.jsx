// src/pages/Home.jsx

import { motion } from 'framer-motion'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import FeaturedProjects from '../components/sections/FeaturedProjects'
import Testimonials from '../components/sections/Testimonials'
import Button from '../components/ui/Button'

const Home = () => {
  return (
    <>
      <Hero />
      
      <Services limit={3} />
      
      <FeaturedProjects limit={3} />
      
      <section className="py-16 md:py-24 bg-evera-teal-dark text-evera-offwhite">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-evera-sand"
            >
              Ready to Create a Memorable Event Experience?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl mb-8 text-evera-skyblue"
            >
              Let us help you build the perfect digital solution for your next event.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                to="/contact"
                variant="sand"
                size="lg"
                className="px-8"
              >
                Contact Us Today
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Testimonials />
    </>
  )
}

export default Home;
