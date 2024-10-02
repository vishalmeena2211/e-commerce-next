"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Instagram, Mail } from "lucide-react"

export default function EcomFooter() {
    return (
        <footer className="bg-gray-100 text-gray-600">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Shop</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-primary transition-colors">New Arrivals</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Best Sellers</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Sale</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Collections</a></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Customer Service</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Shipping & Returns</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Size Guide</a></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">About Us</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-primary transition-colors">Our Story</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Stay Connected</h3>
                        <p>Subscribe to our newsletter for exclusive offers and updates.</p>
                        <form className="flex space-x-2">
                            <Input type="email" placeholder="Your email" className="flex-grow" />
                            <Button type="submit">Subscribe</Button>
                        </form>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <span className="sr-only">Facebook</span>
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <span className="sr-only">Twitter</span>
                                <Twitter size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <span className="sr-only">Instagram</span>
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <span className="sr-only">YouTube</span>
                                {/* <YouTube size={24} /> */}
                            </a>
                        </div>
                    </div>
                </div>
                <Separator className="my-8" />
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex space-x-4">
                        <a href="#" className="text-sm hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="text-sm hover:text-primary transition-colors">Terms of Service</a>
                        <a href="#" className="text-sm hover:text-primary transition-colors">Accessibility</a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Mail size={20} />
                        <span className="text-sm">support@yourecomstore.com</span>
                    </div>
                    <p className="text-sm">&copy; 2024 Your Ecom Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}