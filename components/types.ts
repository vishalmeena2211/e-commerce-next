export interface Product {
    id: string
    name: string
    price: number
    originalPrice?: number
    images: string[]
    category: string
    rating: number
    colors: string[]
    description: string
    features: string[]
  }


  export interface ProductPageProps {
    id: string
    name: string
    category: string
    price: number
    originalPrice?: number
    rating: number
    description: string
    colors: string[]
    sizes: string[]
    images: string[]
    specifications: string[]
  }
  
  export interface Review {
    id: string
    user: string
    rating: number
    comment: string
    date: string
  }
  
  export interface RelatedProduct {
    id: string
    name: string
    category: string
    price: number
    rating: number
    image: string
  }