import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">

        {/* Logo & Description */}
        <div>
          <h3 className="text-xl font-bold text-blue-400 mb-3">⚡ TechStore</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your go-to destination for the latest electronics and tech at the best prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-3 text-gray-200">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-blue-400 transition-colors">Products</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-3 text-gray-200">Contact Us</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📧 info@techstore.com</li>
            <li>📞 +20 101 234 5678</li>
            <li>📍 Cairo, Egypt</li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © 2025 TechStore — All rights reserved.
      </div>
    </footer>
  )
}

export default Footer