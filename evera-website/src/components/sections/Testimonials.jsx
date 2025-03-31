// src/components/sections/Testimonials.jsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import TestimonialCard from '../ui/TestimonialCard'
import testimonialsData from '../../data/testimonials'

const Testimonials = ({
  title = "What Our Clients Say",
  subtitle = "Our clients trust us to deliver exceptional digital experiences for their events",
  limit
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" })
  
  // Use all testimonials or limit them if a limit is provided
  const testimonials = limit ? testimonialsData.slice(0, limit) : testimonialsData
  
  return (
    <section className="py-20 bg-evera-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-evera-teal-dark"
          >
            {title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-evera-dark"
          >
            {subtitle}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              image={testimonial.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials