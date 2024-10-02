"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Search, ShoppingCart, User, Menu } from "lucide-react"

const categories = [
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Women", href: "/women" },
    { name: "Men", href: "/men" },
    { name: "Accessories", href: "/accessories" },
    { name: "Sale", href: "/sale" },
]

export default function EcomNavbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false) // Replace with actual authentication logic
    const pathname = usePathname()

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" className="mr-2 px-0 text-base hover:bg-transparent focus:ring-0 md:hidden">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                        <nav className="flex flex-col gap-4 p-4">
                            <Link href={"login"}>
                                <Button variant="ghost" className="block w-full text-left px-4 py-2 text-lg hover:bg-gray-100 rounded-md">
                                    Login
                                </Button>
                            </Link>
                            <Link href={"signup"}>
                                <Button variant="ghost" className="block w-full text-left px-4 py-2 text-lg hover:bg-gray-100 rounded-md">
                                    Sign Up
                                </Button>
                            </Link>
                            <div className="border-t border-gray-200 my-2"></div>
                            {categories.map((category) => (
                                <Link
                                    key={category.name}
                                    href={category.href}
                                    className="block w-full text-left px-4 py-2 text-lg hover:bg-gray-100 rounded-md"
                                >
                                    {category.name}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <ShoppingCart className="h-6 w-6" />
                    <span className="font-bold inline-block">ECOM</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    {categories.map((category) => (
                        <Link
                            key={category.name}
                            href={category.href}
                            className={`transition-colors hover:text-foreground/80 ${pathname === category.href ? "text-foreground" : "text-foreground/60"
                                }`}
                        >
                            {category.name}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center space-x-4 ml-auto">
                    {isSearchOpen ? (
                        <form onSubmit={(e) => e.preventDefault()} className="flex-1 md:flex-none">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                                <Input
                                    type="search"
                                    placeholder="Search products..."
                                    className="w-full md:w-[300px] pl-8"
                                />
                            </div>
                        </form>
                    ) : (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-base hover:bg-transparent focus:ring-0"
                            onClick={() => setIsSearchOpen(true)}
                        >
                            <Search className="h-6 w-6" />
                            <span className="sr-only">Search</span>
                        </Button>
                    )}
                    {isLoggedIn ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="relative text-base hover:bg-transparent focus:ring-0">
                                    <User className="h-6 w-6" />
                                    <span className="sr-only">Open user menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem><Link href={"profile"}>Profile</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link href={"orders"}>Orders</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link href={"wishlist"}>Wishlist</Link></DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>Log out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <>
                            <div className="hidden md:flex">
                                <Link href={"login"}>
                                    <Button variant="ghost" className="text-base hover:bg-transparent focus:ring-0">
                                        Login
                                    </Button>
                                </Link>
                                <Link href={"signup"}>
                                    <Button variant="ghost" className="text-base hover:bg-transparent focus:ring-0">
                                        Sign Up
                                    </Button>
                                </Link>
                            </div>
                        </>
                    )}
                    <Link href={"cart"}>
                        <Button variant="ghost" size="icon" className="relative text-base hover:bg-transparent focus:ring-0">
                            <ShoppingCart className="h-6 w-6" />
                            <span className="sr-only">Open cart</span>
                            <Badge variant="destructive" className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-2">
                                3
                            </Badge>
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}