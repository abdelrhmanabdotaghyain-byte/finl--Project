import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import products from '../data/products'

function Home({ onAddToCart }) {
  const featured = products.slice(0, 3)

  const features = [
    { icon: '🚚', title: 'Free Shipping', desc: 'On all orders over 500 EGP' },
    { icon: '🔒', title: 'Secure Payment', desc: 'Multiple payment methods' },
    { icon: '↩️', title: 'Easy Returns', desc: '14-day return policy' },
    { icon: '🎧', title: '24/7 Support', desc: 'Always here to help' },
  ]

  return (
    <div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white py-28 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block bg-white/20 text-white text-sm font-medium px-4 py-1 rounded-full mb-6">
            ⚡ New arrivals just dropped
          </span>
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            The Future of <br />
            <span className="text-blue-200">Technology</span> is Here
          </h1>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
            Discover the latest gadgets, laptops, phones, and more — all in one place with unbeatable prices.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/products"
              className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-4 rounded-xl transition-colors text-lg border border-white/20"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {features.map(f => (
            <div key={f.title} className="flex items-center gap-3">
              <span className="text-2xl">{f.icon}</span>
              <div>
                <div className="font-bold text-gray-800 text-sm">{f.title}</div>
                <div className="text-gray-400 text-xs">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-medium text-sm uppercase tracking-widest">Hand Picked</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">Featured Products</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-10 py-4 rounded-xl transition-colors text-lg"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* Banner */}
      <section className="mx-4 mb-20">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl px-10 py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-2">Special Offer 🎉</h3>
            <p className="text-blue-100 text-lg">Get free shipping on your first order. No minimum required.</p>
          </div>
          <Link
            to="/products"
            className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            Grab the Deal
          </Link>
        </div>
      </section>

    </div>
  )
}

export default Home