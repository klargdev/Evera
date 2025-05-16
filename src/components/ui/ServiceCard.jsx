// src/components/ui/ServiceCard.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  href = '/services',
  index = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-6 border border-evera-skyblue/30"
    >
      <div className="w-14 h-14 mb-4 bg-evera-skyblue/20 rounded-lg flex items-center justify-center text-evera-teal-dark">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-evera-teal-dark">{title}</h3>
      <p className="text-evera-dark mb-4">{description}</p>
      <Link 
        to={href} 
        className="text-evera-teal font-medium inline-flex items-center hover:underline"
      >
        Learn more
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
    </motion.div>
  )
}

export default ServiceCard