"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ShoppingBag } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { CartItem } from './cart-item'
import { CartSummary } from './cart-summery'

interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  color?: string
}

const initialCartItems: CartItem[] = [
  { id: '1', name: 'Wireless Earbuds', price: 79.99, image: '/placeholder.svg?height=96&width=96', quantity: 1, color: '#000000' },
  { id: '2', name: 'Smart Watch', price: 199.99, image: '/placeholder.svg?height=96&width=96', quantity: 1, color: '#SILVER' },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems)

  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.1 // Assuming 10% tax
  const shipping = 10 // Flat shipping rate
  const total = subtotal + tax + shipping

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 flex items-center">
        <ShoppingBag className="mr-2 h-8 w-8" />
        Your Cart
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cartItems.length > 0 ? (
            <>
              {cartItems.map(item => (
                <CartItem
                  key={item.id}
                  {...item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeItem}
                />
              ))}
              <div className="mt-6">
                <Link href="/products" passHref>
                  <Button variant="outline" className="flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">Your cart is empty</h3>
              <p className="mt-1 text-sm text-gray-500">Start adding some items to your cart!</p>
              <div className="mt-6">
                <Link href="/products" passHref>
                  <Button variant="outline" className="flex items-center mx-auto">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div>
          <CartSummary
            subtotal={subtotal}
            tax={tax}
            shipping={shipping}
            total={total}
          />
        </div>
      </div>
    </div>
  )
}