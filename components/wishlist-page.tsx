'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Heart, ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { WishlistItem } from './wishlist-item'

interface WishlistItem {
    id: string
    name: string
    price: number
    image: string
}

export default function WishlistPage() {
    const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([])

    useEffect(() => {
        // Load wishlist from localStorage on component mount
        const storedWishlist = localStorage.getItem('wishlist')
        if (storedWishlist) {
            setWishlistItems(JSON.parse(storedWishlist))
        }
    }, [])

    useEffect(() => {
        // Save wishlist to localStorage whenever it changes
        localStorage.setItem('wishlist', JSON.stringify(wishlistItems))
    }, [wishlistItems])

    const removeFromWishlist = (id: string) => {
        setWishlistItems(items => items.filter(item => item.id !== id))
    }

    const addToCart = (id: string) => {
        // Here you would typically add the item to the cart
        // For this example, we'll just log it and remove from wishlist
        console.log(`Added item ${id} to cart`)
        removeFromWishlist(id)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 flex items-center">
                <Heart className="mr-2 h-8 w-8" />
                Your Wishlist
            </h1>
            <div className="grid grid-cols-1 gap-8">
                {wishlistItems.length > 0 ? (
                    <>
                        {wishlistItems.map(item => (
                            <WishlistItem
                                key={item.id}
                                {...item}
                                onRemove={removeFromWishlist}
                                onAddToCart={addToCart}
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
                        <Heart className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-2 text-lg font-medium text-gray-900">Your wishlist is empty</h3>
                        <p className="mt-1 text-sm text-gray-500">Save items you like to your wishlist!</p>
                        <div className="mt-6">
                            <Link href="/products" passHref>
                                <Button variant="outline" className="flex items-center mx-auto">
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Explore Products
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}