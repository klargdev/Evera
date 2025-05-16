import { Link } from 'react-router-dom'
import footerBg from '../../assets/images/green-podium-bg.jpg'

const Footer = () => {
  return (
    <footer className="relative bg-evera-teal-dark text-evera-offwhite">
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="w-full h-full opacity-10"
          style={{ 
            backgroundImage: `url(${footerBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay',
            backgroundColor: 'rgba(0, 106, 113, 0.95)' // evera-teal-dark with opacity
          }}
        />
      </div>
      
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-evera-sand">Evera</h3>
            <p className="text-evera-skyblue">
              Creating memorable digital experiences for your events.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-evera-sand">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-evera-offwhite hover:text-evera-sand transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-evera-offwhite hover:text-evera-sand transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-evera-offwhite hover:text-evera-sand transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-evera-offwhite hover:text-evera-sand transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-evera-offwhite hover:text-evera-sand transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-evera-sand">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services#wedding-websites" className="text-evera-offwhite hover:text-evera-sand transition-colors">
                  Wedding Websites
                </Link>
              </li>
              <li>
                <Link to="/services#corporate-events" className="text-evera-offwhite hover:text-evera-sand transition-colors">
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link to="/services#memorial-services" className="text-evera-offwhite hover:text-evera-sand transition-colors">
                  Memorial Services
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-evera-sand">Contact Us</h4>
            <ul className="space-y-2 text-evera-offwhite">
              <li>123 Event Street</li>
              <li>New York, NY 10001</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@evera.com</li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-evera-teal-light/20 text-center text-evera-skyblue">
          <p>&copy; {new Date().getFullYear()} Evera. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 