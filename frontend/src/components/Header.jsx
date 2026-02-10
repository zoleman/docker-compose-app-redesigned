import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Search, ShoppingCart, Menu, X } from "lucide-react"
import { Button } from './ui/Button'
import ThemeToggle from './Themetoggle'

const links = [{
  name: "Home",
  link: "/"
},
{
  name: "Shoppong List",
  link: "shopping-list"
},
{
  name: "Category",
  link: "category"
}]

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className='flex gap-2'>

          <a href='/' className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground">Grocerylytics</span>
          </a>

          <ThemeToggle />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex! items-center gap-8 md:gap-8">
            {links.map((link) => (<>
              <NavLink
                key={link.name}
                to={link.link}
                className={({ isActive }) => `text-sm font-medium hover:text-primary transition-colors ${isActive ? `text-foreground` : `text-muted-foreground`} `}
              >
                {link?.name}
              </NavLink>
            </>))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Button variant={"ghost"} size={"icon"} className="hidden md:flex!">
              <Search className="w-5 h-5" />
            </Button>
            <Button className="hidden md:flex!">Sign in</Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="flex md:hidden!"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {links.map(link => (<>
                <NavLink
                  key={link.name}
                  to={link.link}
                  className={({ isActive }) => `text-sm font-medium  ${isActive ? `text-foreground` : `text-muted-foreground`} `}
                >
                  {link?.name}
                </NavLink>
              </>))}
              <Button className="w-full mt-2">Sign in</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
