import { Star, Heart, ShoppingCart, Plus, Minus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ProductPageProps } from './types'

interface ProductDetailsProps {
  product: ProductPageProps
  selectedColor: string
  setSelectedColor: (color: string) => void
  selectedSize: string
  setSelectedSize: (size: string) => void
  quantity: number
  setQuantity: (quantity: number) => void
  isWishlisted: boolean
  handleAddToCart: () => void
  handleToggleWishlist: () => void
  reviewCount: number
}

export function ProductDetails({
  product,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
  quantity,
  setQuantity,
  isWishlisted,
  handleAddToCart,
  handleToggleWishlist,
  reviewCount
}: ProductDetailsProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-4">{product.category}</p>
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <span className="ml-2 text-gray-600">({product.rating.toFixed(1)})</span>
        <span className="ml-2 text-gray-600">({reviewCount} reviews)</span>
      </div>
      <div className="mb-4">
        <span className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</span>
        {product.originalPrice && (
          <span className="ml-2 text-lg text-gray-500 line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
        )}
      </div>
      <p className="text-gray-700 mb-6">{product.description}</p>

      {/* Color Selection */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Color:</h3>
        <div className="flex space-x-2">
          {product.colors.map((color) => (
            <button
              key={color}
              className={`w-8 h-8 rounded-full border-2 transition-transform ${
                selectedColor === color ? 'border-primary scale-110' : 'border-transparent'
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
              aria-label={`Select ${color} color`}
            />
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Size:</h3>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <Button
              key={size}
              variant={selectedSize === size ? "default" : "outline"}
              onClick={() => setSelectedSize(size)}
              className="w-12 h-12"
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      {/* Quantity Selection */}
      <div className="flex items-center mb-6">
        <h3 className="font-semibold mr-4">Quantity:</h3>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          aria-label="Decrease quantity"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="mx-4 text-lg font-medium">{quantity}</span>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setQuantity(quantity + 1)}
          aria-label="Increase quantity"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {/* Add to Cart and Wishlist */}
      <div className="flex space-x-4">
        <Button onClick={handleAddToCart} className="flex-1 text-lg py-6">
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
        <Button variant="outline" onClick={handleToggleWishlist} className="py-6">
          <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-primary' : ''}`} />
        </Button>
      </div>
    </div>
  )
}