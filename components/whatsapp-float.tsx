'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/254790809501?text=Hello%20WALBUZ%2C%20I%20would%20like%20to%20inquire%20about%20your%20products"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center justify-center"
      aria-label="WhatsApp chat"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
