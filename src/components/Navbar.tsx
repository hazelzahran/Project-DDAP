
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Menu, User, ShoppingCart } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-6 md:px-10 w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex mr-2">
            <div className="h-4 w-2 bg-red-500 rounded-sm mr-0.5"></div>
            <div className="h-4 w-2 bg-blue-500 rounded-sm mr-0.5"></div>
            <div className="h-4 w-2 bg-green-500 rounded-sm"></div>
          </div>
          <Link to="/" className="text-lg md:text-xl font-bold font-display text-foreground">
            GKMeal
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-foreground hover:text-primary font-medium ${location.pathname === "/" ? "font-semibold" : ""}`}
          >
            Home Page
          </Link>
          <Link 
            to="/about" 
            className={`text-foreground hover:text-primary font-medium ${location.pathname === "/about" ? "font-semibold" : ""}`}
          >
            About Us
          </Link>
          <Link 
            to="/menu" 
            className={`text-foreground hover:text-primary font-medium ${location.pathname === "/menu" ? "font-semibold" : ""}`}
          >
            Menu List
          </Link>
          <Link 
            to="/gallery" 
            className={`text-foreground hover:text-primary font-medium ${location.pathname === "/gallery" ? "font-semibold" : ""}`}
          >
            Gallery
          </Link>
          <Link 
            to="/food-list" 
            className={`text-foreground hover:text-primary font-medium ${location.pathname === "/food-list" ? "font-semibold" : ""}`}
          >
            Food List
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="rounded-full" asChild>
            <Link to="/profile">
              <User className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full" asChild>
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="rounded-full" asChild>
            <Link to="/profile">
              <User className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full" asChild>
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full" onClick={toggleMenu}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white/90 rounded-md shadow-lg p-4">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary font-medium p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home Page
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-primary font-medium p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/menu" 
              className="text-foreground hover:text-primary font-medium p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu List
            </Link>
            <Link 
              to="/gallery" 
              className="text-foreground hover:text-primary font-medium p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/food-list" 
              className="text-foreground hover:text-primary font-medium p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Food List
            </Link>
            <Link 
              to="/profile" 
              className="text-foreground hover:text-primary font-medium p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Profile
            </Link>
            <Link 
              to="/cart" 
              className="text-foreground hover:text-primary font-medium p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Cart
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
