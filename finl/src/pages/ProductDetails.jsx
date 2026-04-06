import { useParams, useNavigate } from 'react-router-dom'
import products from '../data/products'

function ProductDetails({ onAddToCart }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find(p => p.id === Number(id))

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4">
        <div className="text-7xl">😕</div>
        <h2 className="text-2xl font-bold text-gray-700">Product Not Found</h2>
        <button
          onClick={() => navigate('/products')}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
        >
          Back to Products
        </button>
      </div>
    )
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id)

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-8"
        >
          ← Back
        </button>

        {/* Main Product */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 md:h-full object-cover"
              />
              {!product.inStock && (
                <span className="absolute top-4 right-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                  Out of Stock
                </span>
              )}
            </div>

            {/* Info */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full font-medium">
                  {product.category}
                </span>

                <h1 className="text-3xl font-bold text-gray-800 mt-4 mb-3">
                  {product.name}
                </h1>

                <p className="text-gray-500 text-base leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex">
                    {[1,2,3,4,5].map(star => (
                      <span
                        key={star}
                        className={star <= Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-200'}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">{product.rating}</span>
                  <span className="text-gray-400 text-sm">/ 5.0</span>
                </div>

                {/* Features */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span> Free shipping on all orders
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span> 1 year warranty
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span> 14-day return policy
                  </div>
                </div>
              </div>

              {/* Price & Button */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-bold text-blue-700">
                    {product.price.toLocaleString()}
                    <span className="text-lg font-medium text-gray-500 ml-1">EGP</span>
                  </span>
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                    product.inStock
                      ? 'bg-green-50 text-green-600'
                      : 'bg-red-50 text-red-500'
                  }`}>
                    {product.inStock ? '✓ In Stock' : '✕ Out of Stock'}
                  </span>
                </div>

                <button
                  onClick={() => onAddToCart(product)}
                  disabled={!product.inStock}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-4 rounded-xl transition-colors text-lg"
                >
                  {product.inStock ? 'Add to Cart 🛒' : 'Out of Stock'}
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map(item => (
                <div
                  key={item.id}
                  onClick={() => navigate(`/products/${item.id}`)}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-1">{item.name}</h3>
                    <p className="text-blue-600 font-medium">{item.price.toLocaleString()} EGP</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default ProductDetails