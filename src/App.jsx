// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/sections/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import footerBg from './assets/images/footer.svg'

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Background Pattern Layer */}
      <div 
        className="fixed inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.2'%3E%3Ccircle cx='20' cy='20' r='18' stroke='%23E5E5E5' stroke-width='0.5' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px',
          backgroundColor: '#f5f5f5',
          opacity: 0.95
        }}
      />
      
      {/* Content Layer */}
      <div className="relative z-10 min-h-screen bg-evera-cream/85 backdrop-blur-[2px]">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-48 overflow-hidden">
            <img 
              src={footerBg} 
              alt="" 
              className="w-full h-full object-cover object-top opacity-10"
            />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
