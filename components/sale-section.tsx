"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Clock } from "lucide-react"
import Image from "next/image"

interface Product {
    id: string
    name: string
    category: string
    originalPrice: number
    salePrice: number
    image: string
    rating: number
    discount: number
}

const saleProducts: Record<string, Product[]> = {
    "hot-deals": [
        {
            id: "1",
            name: "Wireless Headphones",
            category: "Electronics",
            originalPrice: 299.99,
            salePrice: 199.99,
            image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            rating: 4.7,
            discount: 33,
        },
        {
            id: "2",
            name: "Premium Leather Jacket",
            category: "Fashion",
            originalPrice: 249.99,
            salePrice: 174.99,
            image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            rating: 4.5,
            discount: 30,
        },
        {
            id: "3",
            name: "Smart Home Security Camera",
            category: "Home",
            originalPrice: 129.99,
            salePrice: 89.99,
            image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            rating: 4.3,
            discount: 31,
        },
        {
            id: "4",
            name: "Fitness Smartwatch",
            category: "Wearables",
            originalPrice: 199.99,
            salePrice: 149.99,
            image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            rating: 4.6,
            discount: 25,
        },
    ],
    "clearance": [
        {
            id: "5",
            name: "Portable Bluetooth Speaker",
            category: "Electronics",
            originalPrice: 79.99,
            salePrice: 39.99,
            image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            rating: 4.2,
            discount: 50,
        },
        {
            id: "6",
            name: "Designer Sunglasses",
            category: "Accessories",
            originalPrice: 159.99,
            salePrice: 79.99,
            image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            rating: 4.4,
            discount: 50,
        },
        {
            id: "7",
            name: "Stainless Steel Cookware Set",
            category: "Home & Kitchen",
            originalPrice: 299.99,
            salePrice: 149.99,
            image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            rating: 4.8,
            discount: 50,
        },
        {
            id: "8",
            name: "Yoga Mat and Accessories Kit",
            category: "Sports & Fitness",
            originalPrice: 89.99,
            salePrice: 44.99,
            image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            rating: 4.5,
            discount: 50,
        },
    ],
}

export default function SaleSection() {
    const [activeTab, setActiveTab] = useState("hot-deals")

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold">Special Offers</h2>
                    <div className="flex items-center space-x-2">
                        <Clock className="h-5 w-5 text-red-500" />
                        <span className="text-lg font-semibold text-red-500">Ends in 2 days</span>
                    </div>
                </div>
                <Tabs defaultValue="hot-deals" className="w-full">
                    <TabsList className="mb-8">
                        <TabsTrigger value="hot-deals" onClick={() => setActiveTab("hot-deals")}>Hot Deals</TabsTrigger>
                        <TabsTrigger value="clearance" onClick={() => setActiveTab("clearance")}>Clearance</TabsTrigger>
                    </TabsList>
                    {["hot-deals", "clearance"].map((tabValue) => (
                        <TabsContent key={tabValue} value={tabValue}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {saleProducts[tabValue].map((product) => (
                                    <Card key={product.id} className="overflow-hidden">
                                        <div className="relative aspect-square">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                layout="fill"
                                                objectFit="contain"
                                                className="transition-transform duration-300 ease-in-out transform hover:scale-105"
                                            />
                                            <Badge className="absolute top-2 left-2 bg-red-500">
                                                {product.discount}% OFF
                                            </Badge>
                                        </div>
                                        <CardContent className="p-4">
                                            <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                                            <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <span className="font-bold text-lg text-red-500 mr-2">
                                                        ${product.salePrice.toFixed(2)}
                                                    </span>
                                                    <span className="text-sm text-gray-500 line-through">
                                                        ${product.originalPrice.toFixed(2)}
                                                    </span>
                                                </div>
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
                        </TabsContent>
                    ))}
                </Tabs>
                <div className="mt-8 text-center">
                    <Button variant="outline" size="lg">
                        View All Deals
                    </Button>
                </div>
            </div>
        </section>
    )
}