// src/data/testimonials.js
import sarahImg from '../assets/images/sarah.jpg'
import weddingEventImg from '../assets/images/wedding-event.jpg'
import corporateEventImg from '../assets/images/corporate-event.jpg'
import memorialServiceImg from '../assets/images/memorial-service.jpg'
import miguelImg from '../assets/images/miguel.jpg'

const testimonials = [
  {
    quote: "Evera created a beautiful memorial website for our father that allowed family members from around the world to participate in celebrating his life. Their attention to detail and compassionate approach made a difficult time easier for our family.",
    author: "Sarah Williams",
    role: "Memorial Service Client",
    image: sarahImg
  },
  {
    quote: "Our wedding website was everything we hoped for and more. The RSVP system was a lifesaver, and our guests loved being able to share photos during and after the event. Highly recommend Evera for any wedding planning!",
    author: "Emma Johnson",
    role: "Wedding Client",
    image: weddingEventImg
  },
  {
    quote: "The corporate event platform Evera built for our annual conference streamlined every aspect of planning and execution. Registration numbers increased by 35% and attendee feedback was overwhelmingly positive.",
    author: "David Chen",
    role: "Events Director",
    company: "TechCorp Inc.",
    image: corporateEventImg
  },
  {
    quote: "The virtual guestbook and streaming service allowed relatives who couldn't travel to be part of our celebration. The interface was intuitive for users of all ages - even my grandparents figured it out easily!",
    author: "Miguel Garcia",
    role: "Birthday Celebration Client",
    image: corporateEventImg // Temporarily using corporate event image
  },
  {
    quote: "Evera transformed how we manage our community memorial archives. The system they created is respectful, dignified, and has helped preserve important memories for generations to come.",
    author: "Rev. Thomas Parker",
    role: "Pastor",
    company: "St. Mary's Church",
    image: memorialServiceImg
  },
  {
    quote: "The donation management system Evera built for our annual gala helped us raise 50% more funds than last year. Their attention to detail and understanding of our needs was exceptional.",
    author: "Jennifer Liu",
    role: "Executive Director",
    company: "Hope Foundation",
    image: corporateEventImg
  }
]

export default testimonials