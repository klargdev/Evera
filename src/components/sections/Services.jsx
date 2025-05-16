// src/components/sections/Services.jsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ServiceCard from '../ui/ServiceCard'
import servicesData from '../../data/services'

const Services = ({
  title = "Our Services",
  subtitle = "We provide end-to-end digital solutions for all types of events",
  limit
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" })
  
  // Use all services or limit them if a limit is provided
  const services = limit ? servicesData.slice(0, limit) : servicesData
  
  return (
    <section className="py-20 bg-evera-cream" ref={ref}>
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
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
