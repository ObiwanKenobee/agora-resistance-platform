
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { Menu, X, Globe, Brain, BookOpen } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Discernment AI', icon: <Brain className="w-4 h-4 mr-2" />, path: '/discernment' },
    { label: 'Agora', icon: <Globe className="w-4 h-4 mr-2" />, path: '/agora' },
    { label: 'About', icon: <BookOpen className="w-4 h-4 mr-2" />, path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="relative w-8 h-8 mr-2">
              <div className="absolute inset-0 bg-gradient-to-br from-resistance-accent to-resistance-purple rounded-lg animate-pulse-subtle"></div>
              <div className="absolute inset-0.5 bg-background rounded-lg flex items-center justify-center text-lg font-bold">E</div>
            </div>
            <span className="font-bold text-xl tracking-tight">ExoMind</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
          <Button variant="outline" className="border-resistance-purple/50 hover:bg-resistance-purple/10">
            Connect Wallet
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Navigation */}
        <div className={cn(
          "fixed inset-0 top-16 z-50 w-full bg-background border-t border-border/40 md:hidden",
          isMenuOpen ? "flex flex-col" : "hidden"
        )}>
          <nav className="container grid gap-4 py-6">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className="flex items-center py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
            <Button variant="outline" className="mt-4 border-resistance-purple/50 hover:bg-resistance-purple/10">
              Connect Wallet
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
