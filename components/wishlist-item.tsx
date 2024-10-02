import Image from 'next/image'
import { Heart, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface WishlistItemProps {
  id: string
  name: string
  price: number
  image: string
  onRemove: (id: string) => void
  onAddToCart: (id: string) => void
}

export function WishlistItem({ id, name, price, image, onRemove, onAddToCart }: WishlistItemProps) {
  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
            <Image src={image} alt={name} width={96} height={96} className="w-full h-full object-center object-cover" />
          </div>
          <div className="sm:ml-6 flex-1 flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 sm:mt-0">
            <div>
              <h3 className="text-lg font-medium text-gray-900">{name}</h3>
              <p className="mt-1 text-sm text-gray-500">${price.toFixed(2)}</p>
            </div>
            <div className="flex items-center mt-4 sm:mt-0">
              <Button 
                variant="outline" 
                size="sm" 
                className="mr-2"
                onClick={() => onAddToCart(id)}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              <Button 
                variant="destructive" 
                size="icon" 
                onClick={() => onRemove(id)}
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}