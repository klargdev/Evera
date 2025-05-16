// src/components/ui/ContactForm.jsx
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Button from './Button'

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Please enter a valid email').required('Email is required'),
  phone: yup.string().matches(/^[0-9\+\-\(\) ]+$/, 'Please enter a valid phone number'),
  eventType: yup.string().required('Please select an event type'),
  message: yup.string().required('Message is required')
})

const ContactForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: yupResolver(schema)
  })
  
  const submitHandler = async (data) => {
    try {
      await onSubmit(data)
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }
  
  return (
    <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Full Name *
        </label>
        <input
          id="name"
          type="text"
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
            errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200 dark:focus:ring-blue-800'
          }`}
          placeholder="John Doe"
          {...register('name')}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200 dark:focus:ring-blue-800'
            }`}
            placeholder="john@example.com"
            {...register('email')}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200 dark:focus:ring-blue-800'
            }`}
            placeholder="(555) 123-4567"
            {...register('phone')}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>
      </div>
      
      <div>
        <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Event Type *
        </label>
        <select
          id="eventType"
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
            errors.eventType ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200 dark:focus:ring-blue-800'
          }`}
          {...register('eventType')}
        >
          <option value="">Select an event type</option>
          <option value="memorial">Memorial or Funeral</option>
          <option value="wedding">Wedding</option>
          <option value="corporate">Corporate Event</option>
          <option value="birthday">Birthday</option>
          <option value="other">Other</option>
        </select>
        {errors.eventType && (
          <p className="mt-1 text-sm text-red-500">{errors.eventType.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          rows="4"
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
            errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200 dark:focus:ring-blue-800'
          }`}
          placeholder="Tell us about your event and how we can help..."
          {...register('message')}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>
      
      <Button 
        type="submit" 
        variant="primary" 
        disabled={isSubmitting}
        className="w-full md:w-auto"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}

export default ContactForm