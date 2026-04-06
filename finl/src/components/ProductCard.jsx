import { Link } from 'react-router-dom'

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">

      {/* صورة المنتج — قابلة للنقر */}
      <Link to={`/products/${product.id}`}>
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
          />
          {!product.inStock && (
            <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              Out of Stock
            </span>
          )}
        </div>
      </Link>

      <div className="p-4">
        <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
          {product.category}
        </span>

        <Link to={`/products/${product.id}`}>
          <h3 className="mt-2 text-gray-800 font-bold text-lg leading-tight hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        <p className="text-gray-500 text-sm mt-1 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center gap-1 mt-2">
          <span className="text-yellow-400">★</span>
          <span className="text-sm text-gray-600">{product.rating}</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-blue-700 font-bold text-xl">
            {product.price.toLocaleString()} EGP
          </span>
          <button
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-sm px-4 py-2 rounded-xl transition-colors duration-200"
          >
            {product.inStock ? 'Add to Cart' : 'Unavailable'}
          </button>
        </div>
      </div>

    </div>
  )
}

export default ProductCard