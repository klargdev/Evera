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
    primary: 'bg-evera-teal-dark hover:bg-opacity-90 text-white focus:ring-evera-teal',
    secondary: 'bg-evera-skyblue hover:bg-opacity-90 text-evera-dark focus:ring-evera-skyblue',
    outline: 'border border-evera-teal-dark text-evera-teal-dark hover:bg-evera-teal-dark/5 focus:ring-evera-teal',
    ghost: 'text-evera-teal-dark hover:bg-evera-teal-dark/5 focus:ring-evera-teal',
    sand: 'bg-evera-sand hover:bg-opacity-90 text-evera-dark focus:ring-evera-sand',
    link: 'text-evera-teal-dark hover:underline p-0 focus:ring-0'
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