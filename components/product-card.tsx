import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Eye } from 'lucide-react'
import Image from 'next/image'
import { ProductDialog } from './product-dialog'
import { StarRating } from './start-rating'
import { Product } from './types'

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const [isWishlisted, setIsWishlisted] = useState(false)
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [selectedColor, setSelectedColor] = useState(product.colors[0])

    const handleAddToCart = () => {
        console.log('Added to cart:', product.id)
        // Implement add to cart logic
    }

    const handleToggleWishlist = () => {
        setIsWishlisted(!isWishlisted)
        console.log(isWishlisted ? 'Removed from wishlist:' : 'Added to wishlist:', product.id)
        // Implement wishlist logic
    }

    const handleQuickView = () => {
        setIsDialogOpen(true)
    }

    return (
        <>
            <Card
                className="w-full overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative aspect-square">
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        layout="fill"
                        objectFit="contain"
                        className="transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                    {product.originalPrice && (
                        <Badge variant="destructive" className="absolute top-2 left-2">
                            Sale
                        </Badge>
                    )}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                    >
                        <Button variant="secondary" size="sm" onClick={handleQuickView}>
                            <Eye className="mr-2 h-4 w-4" />
                            Quick View
                        </Button>
                    </motion.div>
                </div>
                <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="font-semibold text-lg">{product.name}</h3>
                            <p className="text-sm text-gray-500">{product.category}</p>
                        </div>
                        <div className="text-right">
                            <span className="font-bold text-lg text-primary">${product.price.toFixed(2)}</span>
                            {product.originalPrice && (
                                <span className="ml-2 text-sm text-gray-500 line-through">
                                    ${product.originalPrice.toFixed(2)}
                                </span>
                            )}
                        </div>
                    </div>
                    <StarRating rating={product.rating} />
                    <div className="flex items-center mt-2 space-x-2">
                        <span className="text-sm text-gray-600">Color:</span>
                        {product.colors.map((color) => (
                            <button
                                key={color}
                                className={`w-6 h-6 rounded-full border-2 ${selectedColor === color ? 'border-primary' : 'border-transparent'
                                    }`}
                                style={{ backgroundColor: color }}
                                onClick={() => setSelectedColor(color)}
                            />
                        ))}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <Button variant="default" size="sm" onClick={handleAddToCart}>
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add to Cart
                        </Button>
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={handleToggleWishlist}
                            className={`p-2 rounded-full ${isWishlisted ? 'bg-red-100' : 'bg-gray-100'}`}
                        >
                            <Heart className={`h-5 w-5 ${isWishlisted ? 'text-red-500 fill-red-500' : 'text-gray-500'}`} />
                        </motion.button>
                    </div>
                </CardContent>
            </Card>
            <ProductDialog product={product} isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
        </>
    )
}