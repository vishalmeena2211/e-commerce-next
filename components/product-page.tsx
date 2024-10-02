// "use client"

// import { useState } from 'react'
// import Image from 'next/image'
// import { motion } from 'framer-motion'
// import { Star, Heart, ShoppingCart, ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react'
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"

// // Dummy data
// const product = {
//   id: '1',
//   name: 'Premium Comfort T-Shirt',
//   category: 'Apparel',
//   price: 29.99,
//   originalPrice: 39.99,
//   rating: 4.5,
//   description: 'Experience unparalleled comfort with our Premium Comfort T-Shirt. Made from a blend of 60% combed cotton and 40% polyester, this shirt offers both softness and durability. Perfect for everyday wear or active lifestyles.',
//   colors: ['#000000', '#FFFFFF', '#0000FF', '#FF0000'],
//   sizes: ['XS', 'S', 'M', 'L', 'XL'],
//   images: [
//     '/placeholder.svg?height=600&width=600',
//     '/placeholder.svg?height=600&width=600',
//     '/placeholder.svg?height=600&width=600',
//     '/placeholder.svg?height=600&width=600',
//   ],
//   specifications: [
//     '60% combed cotton, 40% polyester',
//     'Pre-shrunk fabric',
//     'Seamless collar',
//     'Double-needle stitching throughout',
//     'Taped neck and shoulders',
//     'Machine washable',
//   ],
// }

// const reviews = [
//   { id: '1', user: 'John D.', rating: 5, comment: 'Extremely comfortable and fits perfectly!', date: '2023-05-15' },
//   { id: '2', user: 'Sarah M.', rating: 4, comment: 'Great quality, but runs a bit small.', date: '2023-05-10' },
//   { id: '3', user: 'Mike R.', rating: 5, comment: 'Best t-shirt I've ever owned. Highly recommend!', date: '2023-05-05' },
// ]

// const relatedProducts = [
//   { id: '2', name: 'Classic Polo Shirt', category: 'Apparel', price: 34.99, rating: 4.3, image: '/placeholder.svg?height=300&width=300' },
//   { id: '3', name: 'Slim Fit Jeans', category: 'Apparel', price: 49.99, rating: 4.7, image: '/placeholder.svg?height=300&width=300' },
//   { id: '4', name: 'Casual Sneakers', category: 'Footwear', price: 59.99, rating: 4.6, image: '/placeholder.svg?height=300&width=300' },
// ]

// export default function EnhancedProductPage() {
//   const [selectedColor, setSelectedColor] = useState(product.colors[0])
//   const [selectedSize, setSelectedSize] = useState(product.sizes[2]) // Default to 'M'
//   const [quantity, setQuantity] = useState(1)
//   const [currentImageIndex, setCurrentImageIndex] = useState(0)
//   const [isWishlisted, setIsWishlisted] = useState(false)
//   const [reviewRating, setReviewRating] = useState(5)
//   const [reviewComment, setReviewComment] = useState('')

//   const handleAddToCart = () => {
//     console.log('Added to cart:', { ...product, color: selectedColor, size: selectedSize, quantity })
//     // Implement add to cart logic
//   }

//   const handleToggleWishlist = () => {
//     setIsWishlisted(!isWishlisted)
//     console.log(isWishlisted ? 'Removed from wishlist:' : 'Added to wishlist:', product.id)
//     // Implement wishlist logic
//   }

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length)
//   }

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length)
//   }

//   const handleSubmitReview = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log('Submitted review:', { rating: reviewRating, comment: reviewComment })
//     // Implement review submission logic
//     setReviewRating(5)
//     setReviewComment('')
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid md:grid-cols-2 gap-8">
//         {/* Product Images */}
//         <div className="relative aspect-square">
//           <Image
//             src={product.images[currentImageIndex]}
//             alt={`${product.name} - Image ${currentImageIndex + 1}`}
//             layout="fill"
//             objectFit="cover"
//             className="rounded-lg"
//           />
//           <button
//             onClick={prevImage}
//             className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
//             aria-label="Previous image"
//           >
//             <ChevronLeft className="h-6 w-6" />
//           </button>
//           <button
//             onClick={nextImage}
//             className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
//             aria-label="Next image"
//           >
//             <ChevronRight className="h-6 w-6" />
//           </button>
//           {product.originalPrice && (
//             <Badge variant="destructive" className="absolute top-4 left-4">
//               Sale
//             </Badge>
//           )}
//         </div>

//         {/* Product Details */}
//         <div>
//           <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
//           <p className="text-gray-600 mb-4">{product.category}</p>
//           <div className="flex items-center mb-4">
//             <div className="flex items-center">
//               {[...Array(5)].map((_, i) => (
//                 <Star
//                   key={i}
//                   className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
//                 />
//               ))}
//             </div>
//             <span className="ml-2 text-gray-600">({product.rating.toFixed(1)})</span>
//             <span className="ml-2 text-gray-600">({reviews.length} reviews)</span>
//           </div>
//           <div className="mb-4">
//             <span className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</span>
//             {product.originalPrice && (
//               <span className="ml-2 text-lg text-gray-500 line-through">
//                 ${product.originalPrice.toFixed(2)}
//               </span>
//             )}
//           </div>
//           <p className="text-gray-700 mb-6">{product.description}</p>

//           {/* Color Selection */}
//           <div className="mb-6">
//             <h3 className="font-semibold mb-2">Color:</h3>
//             <div className="flex space-x-2">
//               {product.colors.map((color) => (
//                 <button
//                   key={color}
//                   className={`w-8 h-8 rounded-full border-2 ${
//                     selectedColor === color ? 'border-primary' : 'border-transparent'
//                   }`}
//                   style={{ backgroundColor: color }}
//                   onClick={() => setSelectedColor(color)}
//                   aria-label={`Select ${color} color`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Size Selection */}
//           <div className="mb-6">
//             <h3 className="font-semibold mb-2">Size:</h3>
//             <div className="flex flex-wrap gap-2">
//               {product.sizes.map((size) => (
//                 <Button
//                   key={size}
//                   variant={selectedSize === size ? "default" : "outline"}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </Button>
//               ))}
//             </div>
//           </div>

//           {/* Quantity Selection */}
//           <div className="flex items-center mb-6">
//             <h3 className="font-semibold mr-4">Quantity:</h3>
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={() => setQuantity(Math.max(1, quantity - 1))}
//               aria-label="Decrease quantity"
//             >
//               <Minus className="h-4 w-4" />
//             </Button>
//             <span className="mx-4 text-lg">{quantity}</span>
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={() => setQuantity(quantity + 1)}
//               aria-label="Increase quantity"
//             >
//               <Plus className="h-4 w-4" />
//             </Button>
//           </div>

//           {/* Add to Cart and Wishlist */}
//           <div className="flex space-x-4">
//             <Button onClick={handleAddToCart} className="flex-1">
//               <ShoppingCart className="mr-2 h-5 w-5" />
//               Add to Cart
//             </Button>
//             <Button variant="outline" onClick={handleToggleWishlist}>
//               <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-primary' : ''}`} />
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Product Tabs */}
//       <Tabs defaultValue="description" className="mt-12">
//         <TabsList>
//           <TabsTrigger value="description">Description</TabsTrigger>
//           <TabsTrigger value="specifications">Specifications</TabsTrigger>
//           <TabsTrigger value="reviews">Reviews</TabsTrigger>
//         </TabsList>
//         <TabsContent value="description" className="mt-4">
//           <p className="text-gray-700">{product.description}</p>
//         </TabsContent>
//         <TabsContent value="specifications" className="mt-4">
//           <ul className="list-disc pl-5 text-gray-700">
//             {product.specifications.map((spec, index) => (
//               <li key={index}>{spec}</li>
//             ))}
//           </ul>
//         </TabsContent>
//         <TabsContent value="reviews" className="mt-4">
//           <div className="mb-6">
//             <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
//             {reviews.map((review) => (
//               <div key={review.id} className="mb-4 pb-4 border-b">
//                 <div className="flex items-center mb-2">
//                   <div className="flex items-center">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
//                       />
//                     ))}
//                   </div>
//                   <span className="ml-2 font-semibold">{review.user}</span>
//                 </div>
//                 <p className="text-gray-700">{review.comment}</p>
//                 <p className="text-sm text-gray-500 mt-1">{review.date}</p>
//               </div>
//             ))}
//           </div>
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
//             <form onSubmit={handleSubmitReview}>
//               <div className="mb-4">
//                 <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
//                   Rating
//                 </label>
//                 <div className="flex items-center">
//                   {[...Array(5)].map((_, i) => (
//                     <button
//                       key={i}
//                       type="button"
//                       onClick={() => setReviewRating(i + 1)}
//                       className="p-1"
//                     >
//                       <Star
//                         className={`h-6 w-6 ${i < reviewRating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
//                       />
//                     </button>
//                   ))}
//                 </div>
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
//                   Your Review
//                 </label>
//                 <Textarea
//                   id="comment"
//                   rows={4}
//                   value={reviewComment}
//                   onChange={(e) => setReviewComment(e.target.value)}
//                   placeholder="Write your review here..."
//                   required
//                 />
//               </div>
//               <Button type="submit">Submit Review</Button>
//             </form>
//           </div>
//         </TabsContent>
//       </Tabs>

//       {/* FAQ Section */}
//       <div className="mt-12">
//         <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
//         <Accordion type="single" collapsible>
//           <AccordionItem value="item-1">
//             <AccordionTrigger>How does the sizing run?</AccordionTrigger>
//             <AccordionContent>
//               Our t-shirts are designed to have a regular fit. We recommend checking our size chart for accurate measurements. If you're between sizes, we suggest going up a size for a more relaxed fit.
//             </AccordionContent>
//           </AccordionItem>
//           <AccordionItem value="item-2">
//             <AccordionTrigger>What's the best way to care for this t-shirt?</AccordionTrigger>
//             <AccordionContent>
//               For best results, machine wash cold with like colors. Tumble dry low or hang to dry. Do not bleach or dry clean. Iron on low heat if needed, but avoid ironing the printed design if applicable.
//             </AccordionContent>
//           </AccordionItem>
//           <AccordionItem value="item-3">
//             <AccordionTrigger>Do you offer international shipping?</AccordionTrigger>
//             <AccordionContent>
//               Yes, we offer international shipping to most countries. Shipping rates and delivery times vary depending on the destination. You can view the shipping options and costs at checkout.
//             </AccordionContent>
//           </AccordionItem>
//         </Accordion>
//       </div>

//       {/* Related Products */}
//       <div className="mt-12">
//         <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {relatedProducts.map((relatedProduct) => (
//             <Card key={relatedProduct.id} className="overflow-hidden">
//               <div className="relative aspect-square">
//                 <Image
//                   src={relatedProduct.image}
//                   alt={relatedProduct.name}
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//               <CardContent className="p-4">
//                 <h3 className="font-semibold">{relatedProduct.name}</h3>
//                 <p className="text-sm text-gray-600">{relatedProduct.category}</p>
//                 <div className="flex justify-between items-center mt-2">
//                   <span className="font-bold text-primary">${relatedProduct.price.toFixed(2)}</span>
//                   <div className="flex items-center">
//                     <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
//                     <span className="ml-1 text-sm text-gray-600">{relatedProduct.rating.toFixed(1)}</span>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

import { useState } from 'react'
import { ProductPageProps, Review, RelatedProduct } from './types'
import { ProductImages } from './product-images'
import { ProductDetails } from './product-details'
import { ProductTabs } from './product-tabs'
import { FAQSection } from './FAQ-section'
import { RelatedProducts } from './related-products'

// Dummy data (you would typically fetch this from an API)
const product: ProductPageProps = {
    id: '1',
    name: 'Premium Comfort T-Shirt',
    category: 'Apparel',
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.5,
    description: 'Experience unparalleled comfort with our Premium Comfort T-Shirt. Made from a blend of 60% combed cotton and 40% polyester, this shirt offers both softness and durability. Perfect for everyday wear or active lifestyles.',
    colors: ['#000000', '#FFFFFF', '#0000FF', '#FF0000'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
        '/placeholder.svg?height=600&width=600&text=Image+1',
        '/placeholder.svg?height=600&width=600&text=Image+2',
        '/placeholder.svg?height=600&width=600&text=Image+3',
        '/placeholder.svg?height=600&width=600&text=Image+4',
    ],
    specifications: [
        '60% combed cotton, 40% polyester',
        'Pre-shrunk fabric',
        'Seamless collar',
        'Double-needle stitching throughout',
        'Taped neck and shoulders',
        'Machine washable',
    ],
}

const reviews: Review[] = [
    { id: '1', user: 'John D.', rating: 5, comment: 'Extremely comfortable and fits perfectly!', date: '2023-05-15' },
    { id: '2', user: 'Sarah M.', rating: 4, comment: 'Great quality, but runs a bit small.', date: '2023-05-10' },
    { id: '3', user: 'Mike R.', rating: 5, comment: "Best t-shirt I've ever owned.Highly recommend!", date: '2023-05-05' },
]

const relatedProducts: RelatedProduct[] = [
    { id: '2', name: 'Classic Polo Shirt', category: 'Apparel', price: 34.99, rating: 4.3, image: '/placeholder.svg?height=300&width=300&text=Polo' },
    { id: '3', name: 'Slim Fit Jeans', category: 'Apparel', price: 49.99, rating: 4.7, image: '/placeholder.svg?height=300&width=300&text=Jeans' },
    { id: '4', name: 'Casual Sneakers', category: 'Footwear', price: 59.99, rating: 4.6, image: '/placeholder.svg?height=300&width=300&text=Sneakers' },
]

export default function ProductPage() {
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[2]) // Default to 'M'
    const [quantity, setQuantity] = useState(1)
    const [isWishlisted, setIsWishlisted] = useState(false)

    const handleAddToCart = () => {
        console.log('Added to cart:', { ...product, color: selectedColor, size: selectedSize, quantity })
        // Implement add to cart logic
    }

    const handleToggleWishlist = () => {
        setIsWishlisted(!isWishlisted)
        console.log(isWishlisted ? 'Removed from wishlist:' : 'Added to wishlist:', product.id)
        // Implement wishlist logic
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-8">
                <ProductImages images={product.images} name={product.name} originalPrice={product.originalPrice} />
                <ProductDetails
                    product={product}
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    isWishlisted={isWishlisted}
                    handleAddToCart={handleAddToCart}
                    handleToggleWishlist={handleToggleWishlist}
                    reviewCount={reviews.length}
                />
            </div>

            <ProductTabs product={product} reviews={reviews} />
            <FAQSection />
            <RelatedProducts products={relatedProducts} />
        </div>
    )
}