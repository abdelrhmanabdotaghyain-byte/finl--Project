import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import ProductDetails from './pages/ProductDetails'



function App() {
  const [cart, setCart] = useState([])

  const handleAddToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id)
      if (exists) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty < 1) return
    setCart(prev =>
      prev.map(item => item.id === id ? { ...item, quantity: newQty } : item)
    )
  }

  const handleRemove = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const handleClearCart = () => {
    setCart([])
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar cartCount={cart.reduce((sum, i) => sum + i.quantity, 0)} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
            <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/:id" element={<ProductDetails onAddToCart={handleAddToCart} />} />

            <Route path="/cart" element={
              <Cart
                cart={cart}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemove}
              />}
            />
            <Route path="/checkout" element={
              <Checkout
                cart={cart}
                onClearCart={handleClearCart}
              />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App