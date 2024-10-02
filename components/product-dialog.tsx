import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'
import { Product } from "./types"
import { ImageGallery } from "./image-gallery"
import { StarRating } from "./start-rating"

interface ProductDialogProps {
  product: Product
  isOpen: boolean
  onClose: () => void
}

export function ProductDialog({ product, isOpen, onClose }: ProductDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription>{product.category}</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ImageGallery images={product.images} alt={product.name} />
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
            <StarRating rating={product.rating} />
            <div>
              <span className="font-bold text-xl text-primary">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Color:</span>
              {product.colors.map((color) => (
                <div
                  key={color}
                  className="w-6 h-6 rounded-full border-2 border-gray-300"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <Tabs defaultValue="description">
              <TabsList>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="text-sm text-gray-600">
                {product.description}
              </TabsContent>
              <TabsContent value="features">
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
            <Button className="w-full">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}