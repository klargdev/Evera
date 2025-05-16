// src/components/sections/FeaturedProjects.jsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import PortfolioItem from '../ui/PortfolioItem'
import Button from '../ui/Button'
import projectsData from '../../data/projects'

const FeaturedProjects = ({
  title = "Featured Projects",
  subtitle = "See how we've helped clients create memorable digital experiences",
  limit,
  viewAllLink = "/portfolio"
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" })
  
  // Use all projects or limit them if a limit is provided
  const projects = limit ? projectsData.slice(0, limit) : projectsData
  
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
          {projects.map((project, index) => (
            <PortfolioItem
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              client={project.client}
              link={project.link}
              index={index}
            />
          ))}
        </div>
        
        {projectsData.length > projects.length && (
          <div className="text-center mt-12">
            <Button to={viewAllLink} variant="outline">
              View All Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default FeaturedProjects