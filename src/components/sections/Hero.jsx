// src/components/sections/Hero.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import heroBg1 from '../../assets/images/hero-bg1.jpg';
import heroBg2 from '../../assets/images/hero-bg.jpg';  // Using hero-bg.jpg as temporary replacement
import heroBg3 from '../../assets/images/hero-bg3.jpg';
import heroBg4 from '../../assets/images/hero-bg4.jpg';

const Hero = ({
  title = "Crafting Digital Experiences for Every Occasion",
  subtitle = "From solemn memorials to joyful celebrations, Evera creates custom software applications that make your events meaningful and memorable.",
  primaryButtonText = "Get Started",
  primaryButtonLink = "/contact",
  secondaryButtonText = "View Our Work",
  secondaryButtonLink = "/portfolio"
}) => {
  const [currentBg, setCurrentBg] = useState(0);
  const backgrounds = [heroBg1, heroBg2, heroBg3, heroBg4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval);
  }, []);

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
    <div className="relative h-screen overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgrounds[currentBg]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>
      <div className="relative z-10 h-full flex items-center justify-center text-white">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            {subtitle}
          </motion.p>
          <motion.div 
            variants={childVariants}
            className="flex flex-wrap gap-4"
          >
            <Button to={primaryButtonLink} variant="sand" size="lg">
              {primaryButtonText}
            </Button>
            
            <Button to={secondaryButtonLink} variant="outline" size="lg" className="text-evera-offwhite border-evera-offwhite hover:bg-evera-offwhite/10">
              {secondaryButtonText}
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero