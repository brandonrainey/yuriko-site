import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'VIDEOS', href: '#videos' },
    { name: 'KAMAKURA LIFE', href: '#kamakura' },
    { name: 'ABOUT ME', href: '#about' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center space-x-1 sm:space-x-2">
            
            <div className="text-lg sm:text-2xl font-serif text-amber-600">
             🌸 The Life of<span className="text-pink-400"> Yurichan</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs xl:text-sm font-medium text-gray-700 hover:text-pink-400 transition-colors duration-200 border-b-2 border-transparent hover:border-pink-400"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-md text-gray-700 hover:text-pink-400 transition-colors duration-200 touch-manipulation"
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-3 sm:py-4 border-t border-gray-100 bg-white">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 sm:px-4 py-3 text-sm font-medium text-gray-700 hover:text-pink-400 hover:bg-pink-50 transition-colors duration-200 touch-manipulation"
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;