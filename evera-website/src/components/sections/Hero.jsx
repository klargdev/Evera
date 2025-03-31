/ src/components/sections/Hero.jsx
import { motion } from 'framer-motion'
import Button from '../ui/Button'

const Hero = ({
  title = "Crafting Digital Experiences for Every Occasion",
  subtitle = "From solemn memorials to joyful celebrations, Evera creates custom software applications that make your events meaningful and memorable.",
  imageUrl = "/src/assets/images/hero-bg.jpg", // Default image path
  primaryButtonText = "Get Started",
  primaryButtonLink = "/contact",
  secondaryButtonText = "View Our Work",
  secondaryButtonLink = "/portfolio"
}) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren", 
        staggerChildren: 0.2,
        duration: 0.5 
      } 
    }
  }
  
  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imageUrl} 
          alt="Evera Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-blue-900/70"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.h1 
            variants={childVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            {title}
          </motion.h1>
          
          <motion.p 
            variants={childVariants}
            className="text-xl text-gray-200 mb-8"
          >
            {subtitle}
          </motion.p>
          
          <motion.div 
            variants={childVariants}
            className="flex flex-wrap gap-4"
          >
            <Button to={primaryButtonLink} size="lg">
              {primaryButtonText}
            </Button>
            
            <Button to={secondaryButtonLink} variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              {secondaryButtonText}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero