
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Home, Leaf, Flower, Sprout, Info, Phone, Search } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';
import PlantsDropdown from './PlantsDropdown';
import logo from '/src/assets/logo.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { searchQuery, performSearch } = useSearch();
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery || '');
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(localSearchQuery);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="h-12 w-12 flex items-center justify-center">
              <img src={logo} alt="شعار رواء" className="h-12 w-12" />
            </div>
            <span className="text-2xl font-bold text-rawaa-primary mr-4 ml-2 rtl">رَوْاء</span>
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 rtl">
            <Link to="/" className="flex items-center text-rawaa-dark hover:text-rawaa-primary transition-colors mr-4">
              <Home className="ml-1 h-4 w-4" />
              <span>الرئيسية</span>
            </Link>
            <div className="flex items-center text-rawaa-dark hover:text-rawaa-primary transition-colors mr-4">
              <PlantsDropdown />
            </div>
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
                value={localSearchQuery}
                onChange={(e) => setLocalSearchQuery(e.target.value)}
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
            <Link to="/all-plants" className="block py-2 px-4 text-sm hover:bg-gray-100">جميع النباتات</Link>
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
                  value={localSearchQuery}
                  onChange={(e) => setLocalSearchQuery(e.target.value)}
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
