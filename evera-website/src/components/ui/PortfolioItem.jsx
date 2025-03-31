// src/components/ui/PortfolioItem.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from './Button'

const PortfolioItem = ({
  title,
  description,
  image,
  tags = [],
  client,
  link = '#',
  index = 0
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        {client && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Client: {client}</p>
        )}
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <Button to={link} variant="outline" size="sm">
          View Project
        </Button>
      </div>
    </motion.div>
  )
}

export default PortfolioItem