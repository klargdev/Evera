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
      
      {/* Mission/Vision Callout */}
      <section className="relative z-10 -mt-24 mb-12">
        <div className="max-w-3xl mx-auto bg-white/90 rounded-xl shadow-xl px-8 py-10 text-center border border-evera-skyblue/20 backdrop-blur-md">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-evera-teal-dark"
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-evera-dark mb-4"
          >
            To provide platforms that bring people and resources together to achieve their shared/common objectives and dreams.
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl font-semibold text-evera-sand mb-2"
          >
            Vision
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-md text-evera-dark"
          >
            Become a leading provider of digital Events, RSVP and Collections services throughout the country with a market share of 30-40% of all events, featuring a strong digital marketing portfolio covering over 100 top influencers with &gt;10m followers each as well as other supportive digital services within 10 years.
          </motion.p>
        </div>
      </section>

      {/* What We Offer Strip */}
      <section className="py-8 bg-evera-skyblue/10 border-t border-b border-evera-skyblue/20 mb-12">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center max-w-xs">
            <span className="mb-2 text-evera-teal-dark">
              <svg xmlns='http://www.w3.org/2000/svg' className='h-10 w-10' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' /></svg>
            </span>
            <div className="font-semibold text-evera-teal-dark">Eulogy & Memorial Services</div>
            <div className="text-evera-dark text-sm text-center">Dignified digital tributes and donation collections for families.</div>
          </div>
          <div className="flex flex-col items-center max-w-xs">
            <span className="mb-2 text-evera-teal-dark">
              <svg xmlns='http://www.w3.org/2000/svg' className='h-10 w-10' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' /></svg>
            </span>
            <div className="font-semibold text-evera-teal-dark">RSVP & Event Attendance</div>
            <div className="text-evera-dark text-sm text-center">Easy RSVP, guest management, and digital invitations for all events.</div>
          </div>
          <div className="flex flex-col items-center max-w-xs">
            <span className="mb-2 text-evera-teal-dark">
              <svg xmlns='http://www.w3.org/2000/svg' className='h-10 w-10' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2m2-4h4a2 2 0 012 2v4H7V6a2 2 0 012-2z' /></svg>
            </span>
            <div className="font-semibold text-evera-teal-dark">Social Media & Influencer Marketing</div>
            <div className="text-evera-dark text-sm text-center">Grow your event's reach with top influencers and digital campaigns.</div>
          </div>
          <div className="flex flex-col items-center max-w-xs">
            <span className="mb-2 text-evera-teal-dark">
              <svg xmlns='http://www.w3.org/2000/svg' className='h-10 w-10' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' /></svg>
            </span>
            <div className="font-semibold text-evera-teal-dark">Websites & IT Services</div>
            <div className="text-evera-dark text-sm text-center">Custom websites, web apps, and IT support for events and organizations.</div>
          </div>
        </div>
      </section>
      
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
