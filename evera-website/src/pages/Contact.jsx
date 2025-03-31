// src/pages/Contact.jsx
import { motion } from 'framer-motion'
import ContactForm from '../components/ui/ContactForm'

const Contact = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-700 dark:text-gray-300 mb-8"
          >
            Have a question or want to work with us? Fill out the form below, and we’ll get back to you as soon as possible.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8"
        >
          <ContactForm />
        </motion.div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Our Office
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            123 Event Avenue, Suite 400, Your City, Country
          </p>
          <p className="text-gray-700 dark:text-gray-300">Email: contact@evera.com</p>
          <p className="text-gray-700 dark:text-gray-300">Phone: +123 456 7890</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
