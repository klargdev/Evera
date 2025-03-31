// src/components/ui/Button.jsx
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Button = ({ 
  children, 
  type = 'button', 
  variant = 'primary', 
  size = 'md', 
  href, 
  to, 
  onClick, 
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 focus:ring-gray-500',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 focus:ring-blue-500',
    ghost: 'text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 focus:ring-blue-500',
    link: 'text-blue-600 hover:underline p-0 focus:ring-0'
  }
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-5 py-2.5'
  }
  
  const disabledStyles = disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'
  
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`
  
  // Add motion animation
  const motionProps = {
    whileHover: variant !== 'link' ? { scale: 1.02 } : {},
    whileTap: variant !== 'link' ? { scale: 0.98 } : {},
    transition: { type: 'spring', stiffness: 400, damping: 17 }
  }
  
  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link to={to} className={buttonClasses} {...props}>
          {children}
        </Link>
      </motion.div>
    )
  }
  
  if (href) {
    return (
      <motion.div {...motionProps}>
        <a href={href} className={buttonClasses} {...props}>
          {children}
        </a>
      </motion.div>
    )
  }
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button