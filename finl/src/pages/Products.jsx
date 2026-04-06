import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import products from '../data/products'

const categories = ['الكل', ...new Set(products.map(p => p.category))]

function Products({ onAddToCart }) {
  const [selected, setSelected] = useState('الكل')

  const filtered = selected === 'الكل'
    ? products
    : products.filter(p => p.category === selected)

  return (
    <div className="max-w-6xl mx-auto px-4 py-10" dir="rtl">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        جميع المنتجات
      </h1>

      {/* فلتر الفئات */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-5 py-2 rounded-full font-medium transition-colors ${
              selected === cat
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* شبكة المنتجات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  )
}

export default Products