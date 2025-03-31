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
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all p-6 border border-gray-100 dark:border-gray-700"
    >
      <div className="w-14 h-14 mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <Link 
        to={href} 
        className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:underline"
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