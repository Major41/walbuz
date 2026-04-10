'use client';

import Link from 'next/link';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <span className="font-bold text-primary hidden sm:inline">WALBUZ</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* WhatsApp Button Desktop */}
          <div className="hidden md:flex">
            <a
              href="https://wa.me/254790809501?text=Hello%20WALBUZ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-accent transition-colors font-medium text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-muted rounded-lg"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-foreground hover:text-primary py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/254790809501?text=Hello%20WALBUZ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-accent transition-colors font-medium text-sm w-full justify-center"
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
