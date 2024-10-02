import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

interface ProductImagesProps {
  images: string[]
  name: string
  originalPrice?: number
}

export function ProductImages({ images, name, originalPrice }: ProductImagesProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImageIndex]}
              alt={`${name} - Image ${currentImageIndex + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </AnimatePresence>
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md transition-colors hover:bg-white"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md transition-colors hover:bg-white"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        {originalPrice && (
          <Badge variant="destructive" className="absolute top-4 left-4">
            Sale
          </Badge>
        )}
      </div>
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden ${
              index === currentImageIndex ? 'ring-2 ring-primary' : ''
            }`}
          >
            <Image
              src={image}
              alt={`${name} thumbnail ${index + 1}`}
              width={80}
              height={80}
              objectFit="cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}