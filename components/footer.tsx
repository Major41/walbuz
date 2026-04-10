'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="font-bold text-lg">WALBUZ</span>
            </div>
            <p className="text-white/80 text-sm">
              Reliable • Affordable • Nationwide Delivery
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white/80 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white/80 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white/80 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white/80 transition-colors">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a
                  href="https://wa.me/254790809501"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80 transition-colors"
                >
                  +254 790 809 501
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:info@walbuz.co.ke"
                  className="hover:text-white/80 transition-colors"
                >
                  info@walbuz.co.ke
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Nairobi, Kenya</p>
                  <p>P.O Box 281-40607</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/80">
          <p>&copy; {currentYear} WALBUZ General Supplies Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
