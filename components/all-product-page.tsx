"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Pagination } from "@/components/ui/pagination"
import { Star, Search, SlidersHorizontal } from "lucide-react"
import Image from "next/image"

interface Product {
  id: string
  name: string
  category: string
  price: number
  image: string
  rating: number
  brand: string
}

const categories = ["All", "Electronics", "Clothing", "Home & Kitchen", "Books", "Toys"]
const brands = ["All", "Apple", "Samsung", "Nike", "Adidas", "Amazon Basics"]
const sortOptions = [
  { value: "relevance", label: "Relevance" },
  { value: "price-low-high", label: "Price: Low to High" },
  { value: "price-high-low", label: "Price: High to Low" },
  { value: "rating", label: "Avg. Customer Review" },
]

// Function to generate mock product data
const generateMockProducts = (): Product[] => {
  return Array.from({ length: 50 }, (_, i) => ({
    id: `product-${i + 1}`,
    name: `Product ${i + 1}`,
    category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
    price: Math.floor(Math.random() * 500) + 10,
    image: `/placeholder.svg?height=300&width=300&text=Product+${i + 1}`,
    rating: Number((Math.random() * 2 + 3).toFixed(1)),
    brand: brands[Math.floor(Math.random() * (brands.length - 1)) + 1],
  }))
}

export default function AllProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedBrand, setSelectedBrand] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 500])
  const [sortBy, setSortBy] = useState("relevance")
  const [currentPage, setCurrentPage] = useState(1)
  const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false)
  const productsPerPage = 12

  useEffect(() => {
    const mockProducts = generateMockProducts()
    setProducts(mockProducts)
    setFilteredProducts(mockProducts)
  }, [])

  useEffect(() => {
    let result = products

    if (searchTerm) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedCategory !== "All") {
      result = result.filter((product) => product.category === selectedCategory)
    }

    if (selectedBrand !== "All") {
      result = result.filter((product) => product.brand === selectedBrand)
    }

    result = result.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    )

    switch (sortBy) {
      case "price-low-high":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high-low":
        result.sort((a, b) => b.price - a.price)
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    setFilteredProducts(result)
    setCurrentPage(1)
  }, [products, searchTerm, selectedCategory, selectedBrand, priceRange, sortBy])

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const FilterSection = ({ isMobile = false }) => (
    <div className={`space-y-6 ${isMobile ? 'px-4' : ''}`}>
      <div>
        <h2 className="font-semibold mb-2">Categories</h2>
        {categories.map((category) => (
          <div key={category} className="flex items-center space-x-2 mb-1">
            <Checkbox
              id={`category-${category}`}
              checked={selectedCategory === category}
              onCheckedChange={() => setSelectedCategory(category)}
            />
            <Label htmlFor={`category-${category}`}>{category}</Label>
          </div>
        ))}
      </div>
      <div>
        <h2 className="font-semibold mb-2">Brands</h2>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center space-x-2 mb-1">
            <Checkbox
              id={`brand-${brand}`}
              checked={selectedBrand === brand}
              onCheckedChange={() => setSelectedBrand(brand)}
            />
            <Label htmlFor={`brand-${brand}`}>{brand}</Label>
          </div>
        ))}
      </div>
      <div>
        <h2 className="font-semibold mb-2">Price Range</h2>
        <Slider
          min={0}
          max={500}
          step={10}
          value={priceRange}
          onValueChange={setPriceRange}
          className="mb-2"
        />
        <div className="flex justify-between text-sm">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar for larger screens */}
        <aside className="w-full md:w-64 hidden md:block">
          <FilterSection />
        </aside>

        {/* Main content */}
        <main className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            <div className="flex items-center space-x-4 w-full sm:w-auto">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Dialog open={isFilterDialogOpen} onOpenChange={setIsFilterDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="md:hidden">
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Filters</DialogTitle>
                    <DialogDescription>
                      Narrow down your product search with these filters.
                    </DialogDescription>
                  </DialogHeader>
                  <FilterSection isMobile={true} />
                  <Button onClick={() => setIsFilterDialogOpen(false)} className="mt-4">
                    Apply Filters
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                    {product.category}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-1 line-clamp-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg text-primary">${product.price.toFixed(2)}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                      <span className="text-sm text-muted-foreground">{product.rating}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full">Add to Cart</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <Pagination
            className="mt-8"
            currentPage={currentPage}
            totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
            onPageChange={paginate as any}
          />
        </main>
      </div>
    </div>
  )
}
