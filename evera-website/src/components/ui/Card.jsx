
// src/components/ui/Card.jsx
import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  className = '',
  padding = true,
  shadow = true,
  border = false,
  animate = false,
  ...props 
}) => {
  const baseStyles = 'bg-white dark:bg-gray-800 rounded-lg overflow-hidden'
  const paddingStyles = padding ? 'p-6' : ''
  const shadowStyles = shadow ? 'shadow-md hover:shadow-lg transition-shadow duration-300' : ''
  const borderStyles = border ? 'border border-gray-200 dark:border-gray-700' : ''
  
  const cardClasses = `${baseStyles} ${paddingStyles} ${shadowStyles} ${borderStyles} ${className}`
  
  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cardClasses}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
  
  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  )
}

export default Card