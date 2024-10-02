import Image from 'next/image'
import { Star } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { RelatedProduct } from './types'

interface RelatedProductsProps {
  products: RelatedProduct[]
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.category}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="font-bold text-primary">${product.price.toFixed(2)}</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="ml-1 text-sm text-gray-600">{product.rating.toFixed(1)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}