"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search, User, BarChart2, Clock, Trophy, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  const navLinks = [
    { name: "Home", href: "/", icon: <Home size={18} /> },
    { name: "Stats", href: "/stats", icon: <BarChart2 size={18} /> },
    { name: "Matches", href: "/matches", icon: <Clock size={18} /> },
    { name: "Leaderboards", href: "/leaderboards", icon: <Trophy size={18} /> },
    { name: "Profile", href: "/profile", icon: <User size={18} /> },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">
              <span className="text-green-400">LLY</span> Tracker
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-gray-800 text-green-400"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <span className="mr-1.5">{link.icon}</span>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Search and Mobile Menu Buttons */}
          <div className="flex items-center">
            <button
              onClick={toggleSearch}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            <Button variant="outline" className="ml-4 hidden md:flex">
              Sign In
            </Button>

            <button
              onClick={toggleMenu}
              className="p-2 ml-3 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 md:hidden focus:outline-none"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="py-3 border-t border-gray-800">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search players, teams, or stats..."
                className="w-full bg-gray-800 border-gray-700 focus:border-green-500 text-white"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.href)
                      ? "bg-gray-800 text-green-400"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-2">{link.icon}</span>
                  {link.name}
                </Link>
              ))}
              <Button variant="outline" className="w-full mt-4">
                Sign In
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
