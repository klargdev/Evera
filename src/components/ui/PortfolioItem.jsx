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
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all border border-evera-skyblue/20"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="text-xs px-2 py-1 rounded-full bg-evera-sand/40 text-evera-teal-dark"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2 text-evera-teal-dark">{title}</h3>
        {client && (
          <p className="text-sm text-evera-teal mb-2">Client: {client}</p>
        )}
        <p className="text-evera-dark mb-4">{description}</p>
        <Button to={link} variant="sand" size="sm">
          View Project
        </Button>
      </div>
    </motion.div>
  )
}

export default PortfolioItem