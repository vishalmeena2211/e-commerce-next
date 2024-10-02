import { useState } from 'react'
import { Star } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ProductPageProps, Review } from './types'

interface ProductTabsProps {
  product: ProductPageProps
  reviews: Review[]
}

export function ProductTabs({ product, reviews }: ProductTabsProps) {
  const [reviewRating, setReviewRating] = useState(5)
  const [reviewComment, setReviewComment] = useState('')

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitted review:', { rating: reviewRating, comment: reviewComment })
    // Implement review submission logic
    setReviewRating(5)
    setReviewComment('')
  }

  return (
    <Tabs defaultValue="description" className="mt-12">
      <TabsList className="w-full justify-start">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="specifications">Specifications</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="description" className="mt-4">
        <p className="text-gray-700 leading-relaxed">{product.description}</p>
      </TabsContent>
      <TabsContent value="specifications" className="mt-4">
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          {product.specifications.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
      </TabsContent>
      <TabsContent value="reviews" className="mt-4">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
          {reviews.map((review) => (
            <div key={review.id} className="mb-4 pb-4 border-b">
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="ml-2 font-semibold">{review.user}</span>
              </div>
              <p className="text-gray-700">{review.comment}</p>
              <p className="text-sm text-gray-500 mt-1">{review.date}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
          <form onSubmit={handleSubmitReview}>
            <div className="mb-4">
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                Rating
              </label>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setReviewRating(i + 1)}
                    className="p-1"
                  >
                    <Star
                      className={`h-6 w-6 ${i < reviewRating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                Your Review
              </label>
              <Textarea
                id="comment"
                rows={4}
                value={reviewComment}
                onChange={(e) => setReviewComment(e.target.value)}
                placeholder="Write your review here..."
                required
              />
            </div>
            <Button type="submit">Submit Review</Button>
          </form>
        </div>
      </TabsContent>
    </Tabs>
  )
}