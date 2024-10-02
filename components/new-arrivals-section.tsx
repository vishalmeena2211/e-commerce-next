"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface Product {
    id: string
    name: string
    category: string
    price: number
    image: string
    rating: number
}

const newArrivals: Product[] = [
    {
        id: "1",
        name: "Sleek Modern Watch",
        category: "Accessories",
        price: 199.99,
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: 4.5,
    },
    {
        id: "2",
        name: "Leather Tote Bag",
        category: "Women",
        price: 89.99,
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: 4.2,
    },
    {
        id: "3",
        name: "Wireless Earbuds",
        category: "Electronics",
        price: 129.99,
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: 4.8,
    },
    {
        id: "4",
        name: "Slim Fit Jeans",
        category: "Men",
        price: 59.99,
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: 4.3,
    },
    {
        id: "5",
        name: "Stainless Steel Water Bottle",
        category: "Accessories",
        price: 24.99,
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: 4.6,
    },
    {
        id: "6",
        name: "Wireless Charging Pad",
        category: "Electronics",
        price: 39.99,
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: 4.4,
    },
]

export default function NewArrivalsSection() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 4 >= newArrivals.length ? 0 : prevIndex + 1
        )
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? newArrivals.length - 4 : prevIndex - 1
        )
    }

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold">New Arrivals</h2>
                    <div className="flex space-x-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prevSlide}
                            aria-label="Previous new arrivals"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={nextSlide}
                            aria-label="Next new arrivals"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {newArrivals.slice(currentIndex, currentIndex + 4).map((product) => (
                        <Card key={product.id} className="overflow-hidden">
                            <div className="relative aspect-square">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    layout="fill"
                                    objectFit="contain"
                                    className="transition-transform duration-300 ease-in-out transform hover:scale-105"
                                />
                                <Badge className="absolute top-2 left-2" variant="secondary">
                                    New
                                </Badge>
                            </div>
                            <CardContent className="p-4">
                                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-lg">
                                        ${product.price.toFixed(2)}
                                    </span>
                                    <div className="flex items-center">
                                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                                        <span className="text-sm text-gray-600">
                                            {product.rating.toFixed(1)}
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="p-4 pt-0">
                                <Button className="w-full">Add to Cart</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <Button variant="outline">View All New Arrivals</Button>
                </div>
            </div>
        </section>
    )
}