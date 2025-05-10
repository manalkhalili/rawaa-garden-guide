import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Home, Leaf, Flower, Sprout, Info, Phone, Search } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // We would implement actual search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-rawaa-primary flex items-center justify-center">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-rawaa-primary mr-4 ml-2 rtl">رواء</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 rtl">
            <Link to="/" className="flex items-center text-rawaa-dark hover:text-rawaa-primary transition-colors mr-4">
              <Home className="ml-1 h-4 w-4" />
              <span>الرئيسية</span>
            </Link>
            <Link to="/indoor-plants" className="flex items-center text-rawaa-dark hover:text-rawaa-primary transition-colors mr-4">
              <Flower className="ml-1 h-4 w-4" />
              <span>النباتات الداخلية</span>
            </Link>
            <Link to="/outdoor-plants" className="flex items-center text-rawaa-dark hover:text-rawaa-primary transition-colors mr-4">
              <Flower className="ml-1 h-4 w-4" />
              <span>النباتات الخارجية</span>
            </Link>
            <Link to="/seeds" className="flex items-center text-rawaa-dark hover:text-rawaa-primary transition-colors mr-4">
              <Sprout className="ml-1 h-4 w-4" />
              <span>البذور</span>
            </Link>
            <Link to="/game" className="flex items-center text-rawaa-dark hover:text-rawaa-primary transition-colors mr-4">
              <span className="bg-rawaa-accent px-3 py-1 rounded-full text-white">لعبة الأطفال</span>
            </Link>
            <Link to="/about" className="flex items-center text-rawaa-dark hover:text-rawaa-primary transition-colors mr-4">
              <Info className="ml-1 h-4 w-4" />
              <span>من نحن</span>
            </Link>
            <Link to="/contact" className="flex items-center text-rawaa-dark hover:text-rawaa-primary transition-colors mr-4">
              <Phone className="ml-1 h-4 w-4" />
              <span>تواصل معنا</span>
            </Link>
          </nav>
          
          {/* Search form */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن نبات..."
                className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-rawaa-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </form>
          
          {/* Mobile menu button */}
          <button className="md:hidden" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 rtl">
            <Link to="/" className="block py-2 px-4 text-sm hover:bg-gray-100">الرئيسية</Link>
            <Link to="/indoor-plants" className="block py-2 px-4 text-sm hover:bg-gray-100">النباتات الداخلية</Link>
            <Link to="/outdoor-plants" className="block py-2 px-4 text-sm hover:bg-gray-100">النباتات الخارجية</Link>
            <Link to="/seeds" className="block py-2 px-4 text-sm hover:bg-gray-100">البذور</Link>
            <Link to="/game" className="block py-2 px-4 text-sm hover:bg-gray-100">
              <span className="bg-rawaa-accent px-2 py-0.5 rounded-full text-white text-xs">لعبة الأطفال</span>
            </Link>
            <Link to="/about" className="block py-2 px-4 text-sm hover:bg-gray-100">من نحن</Link>
            <Link to="/contact" className="block py-2 px-4 text-sm hover:bg-gray-100">تواصل معنا</Link>
            <form onSubmit={handleSearch} className="px-4 py-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="ابحث عن نبات..."
                  className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-rawaa-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </form>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
