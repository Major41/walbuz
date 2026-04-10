'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { WhatsAppFloat } from '@/components/whatsapp-float';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, Package, Book, Hammer, Pipette, ChevronRight } from 'lucide-react';

const categories = [
  {
    icon: Briefcase,
    title: 'Office & Corporate Supplies',
    color: 'bg-blue-50',
    products: [
      { name: 'Office Stationery Set', price: 'Starting from KES 500' },
      { name: 'Executive Office Furniture', price: 'Starting from KES 5,000' },
      { name: 'Professional Printers', price: 'Starting from KES 15,000' },
      { name: 'Filing Cabinets', price: 'Starting from KES 3,000' },
      { name: 'Desk Organizers', price: 'Starting from KES 1,000' },
      { name: 'Corporate Gifts', price: 'Customizable' },
    ],
  },
  {
    icon: Package,
    title: 'Sports Equipment',
    color: 'bg-blue-50',
    products: [
      { name: 'Soccer Balls (Professional)', price: 'Starting from KES 2,500' },
      { name: 'Basketball Sets', price: 'Starting from KES 3,500' },
      { name: 'Volleyball Equipment', price: 'Starting from KES 2,000' },
      { name: 'Gym Equipment', price: 'Starting from KES 10,000' },
      { name: 'Team Uniforms', price: 'Custom pricing' },
      { name: 'Protective Gear', price: 'Starting from KES 1,500' },
    ],
  },
  {
    icon: Book,
    title: 'School Supplies',
    color: 'bg-blue-50',
    products: [
      { name: 'Educational Books & Textbooks', price: 'Variable pricing' },
      { name: 'School Uniforms', price: 'Starting from KES 1,500' },
      { name: 'Classroom Furniture', price: 'Starting from KES 4,000' },
      { name: 'Learning Materials Packages', price: 'Starting from KES 2,000' },
      { name: 'Lab Equipment Sets', price: 'Starting from KES 8,000' },
      { name: 'Audio-Visual Equipment', price: 'Starting from KES 12,000' },
    ],
  },
  {
    icon: Hammer,
    title: 'Building & Construction Materials',
    color: 'bg-blue-50',
    products: [
      { name: 'Cement (50kg bags)', price: 'KES 800-900 per bag' },
      { name: 'Reinforcement Steel', price: 'Starting from KES 50,000' },
      { name: 'Timber Materials', price: 'Variable pricing' },
      { name: 'Roofing Materials', price: 'Starting from KES 30,000' },
      { name: 'Tools & Equipment', price: 'Starting from KES 2,000' },
      { name: 'Safety Equipment', price: 'Starting from KES 1,000' },
    ],
  },
  {
    icon: Pipette,
    title: 'Plumbing Materials',
    color: 'bg-blue-50',
    products: [
      { name: 'PVC Pipes & Fittings', price: 'Starting from KES 300' },
      { name: 'Metal Pipes', price: 'Starting from KES 500' },
      { name: 'Water Tanks (Plastic)', price: 'Starting from KES 3,000' },
      { name: 'Taps & Valves', price: 'Starting from KES 500' },
      { name: 'Pipe Accessories', price: 'Starting from KES 200' },
      { name: 'Water Treatment Systems', price: 'Starting from KES 5,000' },
    ],
  },
];

export default function Products() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-white/90">
            Browse our extensive catalogue of quality products
          </p>
        </div>
      </section>

      {/* Products Catalogue */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">{category.title}</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {category.products.map((product, productIndex) => (
                      <Card
                        key={productIndex}
                        className="p-6 border-0 bg-blue-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="mb-4">
                          <h3 className="font-bold text-foreground text-lg mb-2">{product.name}</h3>
                          <p className="text-primary font-semibold text-sm">{product.price}</p>
                        </div>

                        <a
                          href={`https://wa.me/254790809501?text=Hello%20WALBUZ%2C%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-accent transition-colors"
                        >
                          Get a Quote <ChevronRight className="w-4 h-4" />
                        </a>
                      </Card>
                    ))}
                  </div>

                  <div className="border-t border-border pt-8" />
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-foreground/70 mb-6">
              Don&apos;t see what you&apos;re looking for? We can source additional products for you.
            </p>
            <a
              href="https://wa.me/254790809501?text=Hello%20WALBUZ%2C%20I%20need%20a%20custom%20product%20request"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-accent text-white px-8 py-3 rounded-lg font-semibold">
                Request Custom Products
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Pricing & Quotes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Flexible Pricing & Bulk Discounts</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-8 border-0 bg-white">
              <h3 className="font-bold text-lg text-foreground mb-3">Bulk Orders</h3>
              <p className="text-foreground/70">
                We offer attractive discounts for bulk orders. The more you order, the better the pricing.
              </p>
            </Card>

            <Card className="p-8 border-0 bg-white">
              <h3 className="font-bold text-lg text-foreground mb-3">Business Terms</h3>
              <p className="text-foreground/70">
                Flexible payment terms and credit facilities available for registered businesses.
              </p>
            </Card>

            <Card className="p-8 border-0 bg-white">
              <h3 className="font-bold text-lg text-foreground mb-3">Free Consultation</h3>
              <p className="text-foreground/70">
                Get expert advice on product selection and pricing from our knowledgeable team.
              </p>
            </Card>

            <Card className="p-8 border-0 bg-white">
              <h3 className="font-bold text-lg text-foreground mb-3">Fast Quotes</h3>
              <p className="text-foreground/70">
                Request a customized quote and receive a response within 24 hours.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Order?</h3>
            <a
              href="https://wa.me/254790809501?text=Hello%20WALBUZ%2C%20I%20would%20like%20to%20get%20a%20quote"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-accent text-white px-8 py-3 rounded-lg font-semibold">
                Get Started with a Quote
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Have Questions?</h2>
          <p className="text-xl text-foreground/70 mb-8">
            Our team is ready to help you find the perfect products for your needs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/254790809501?text=Hello%20WALBUZ%2C%20I%20have%20a%20question%20about%20your%20products"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-accent text-white px-8 py-6 text-base rounded-lg font-semibold w-full sm:w-auto">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
