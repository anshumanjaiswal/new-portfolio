
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    
    if (href?.startsWith('/#')) {
      e.preventDefault();
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300',
      scrolled ? 'bg-background/90 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-5'
    )}>
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-2xl gradient-text">Portfolio</span>
        </Link>
        
        <div className="flex items-center">
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="p-2 ml-2 rounded-full hover:bg-accent/50 transition-colors mr-4"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col justify-center items-center transition-all duration-300 md:hidden",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      )}>
        <button 
          onClick={toggleMenu}
          className="absolute top-5 right-5 text-foreground"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        <ul className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="nav-link text-xl"
                onClick={handleLinkClick}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
