
"use client"
import { ProductCard } from './product-card'
import { Product } from './types'

const dummyProducts: Product[] = [
    {
        id: '1',
        name: 'Wireless Earbuds',
        price: 79.99,
        originalPrice: 99.99,
        images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        ],
        category: 'Electronics',
        rating: 4.5,
        colors: ['#000000', '#FFFFFF', '#FF4500'],
        description: 'Experience true wireless freedom with our high-quality earbuds. Featuring advanced noise-cancellation technology and crystal-clear sound, these earbuds are perfect for music lovers and professionals alike.',
        features: [
            'Active Noise Cancellation',
            'Bluetooth 5.0 connectivity',
            'Up to 24 hours battery life with charging case',
            'Touch controls for easy operation',
            'IPX5 water resistance'
        ]
    },
    {
        id: '2',
        name: 'Smart Watch',
        price: 199.99,
        images: [
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        ],
        category: 'Wearables',
        rating: 4.2,
        colors: ['#000000', '#SILVER', '#GOLD'],
        description: 'Stay connected and track your fitness with our advanced smartwatch. Featuring a vibrant display, heart rate monitoring, and smartphone notifications, this watch is your perfect daily companion.',
        features: [
            'AMOLED touch display',
            'Heart rate and SpO2 monitoring',
            'GPS tracking',
            'Water-resistant up to 50m',
            '7-day battery life'
        ]
    },
    // Add more dummy products as needed
]

export default function ProductGrid() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {dummyProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}