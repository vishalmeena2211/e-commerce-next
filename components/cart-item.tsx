import Image from 'next/image'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

interface CartItemProps {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  color?: string
  onUpdateQuantity: (id: string, newQuantity: number) => void
  onRemove: (id: string) => void
}

export function CartItem({ id, name, price, image, quantity, color, onUpdateQuantity, onRemove }: CartItemProps) {
  const subtotal = price * quantity

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
              {color && (
                <div className="mt-1 flex items-center">
                  <span className="text-sm text-gray-500 mr-2">Color:</span>
                  <span 
                    className="w-4 h-4 rounded-full border border-gray-300" 
                    style={{ backgroundColor: color }}
                  />
                </div>
              )}
            </div>
            <div className="flex items-center mt-4 sm:mt-0">
              <div className="flex items-center border rounded-md">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 rounded-r-none"
                  onClick={() => onUpdateQuantity(id, Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => onUpdateQuantity(id, parseInt(e.target.value, 10) || 1)}
                  className="w-12 h-8 text-center border-y border-x-0 rounded-none"
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 rounded-l-none"
                  onClick={() => onUpdateQuantity(id, quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="ml-4 sm:ml-6">
                <p className="text-sm font-medium text-gray-900">
                  ${subtotal.toFixed(2)}
                </p>
              </div>
              <Button 
                variant="destructive" 
                size="icon" 
                className="ml-4" 
                onClick={() => onRemove(id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}