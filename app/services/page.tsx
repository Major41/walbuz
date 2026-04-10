'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { WhatsAppFloat } from '@/components/whatsapp-float';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Briefcase, Package, Book, Hammer, Pipette } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Office & Corporate Supplies',
    icon_color: 'bg-blue-100 text-primary',
    items: [
      'Stationery (pens, pencils, paper, notepads)',
      'Office furniture (desks, chairs, cabinets)',
      'Printers and printing supplies',
      'Computer peripherals',
      'Filing and organization systems',
      'Corporate gifts and promotional items',
    ],
    description: 'Complete office solutions for businesses of all sizes. We supply everything needed to keep your workplace productive and professional.',
  },
  {
    icon: Package,
    title: 'Sports Equipment Supply',
    icon_color: 'bg-blue-100 text-primary',
    items: [
      'Soccer and football equipment',
      'Basketball and volleyball gear',
      'Tennis and badminton supplies',
      'Gym and fitness equipment',
      'Protective gear and safety equipment',
      'Team uniforms and kits',
    ],
    description: 'High-quality sports equipment for schools, athletic clubs, gyms, and sports facilities. All equipment meets international standards.',
  },
  {
    icon: Book,
    title: 'School Supplies',
    icon_color: 'bg-blue-100 text-primary',
    items: [
      'Educational books and textbooks',
      'School uniforms',
      'Desks and classroom furniture',
      'Learning materials and stationery',
      'Lab equipment and supplies',
      'Audio-visual equipment for learning',
    ],
    description: 'Comprehensive school supplies to support quality education. We partner with schools across Kenya for their complete supply needs.',
  },
  {
    icon: Hammer,
    title: 'Building & Construction Materials',
    icon_color: 'bg-blue-100 text-primary',
    items: [
      'Cement and concrete supplies',
      'Steel reinforcements and rods',
      'Timber and wood materials',
      'Tools and equipment',
      'Hardware and fixtures',
      'Safety equipment for construction sites',
    ],
    description: 'Quality building materials for construction projects. We work with contractors, developers, and construction companies throughout Kenya.',
  },
  {
    icon: Pipette,
    title: 'Plumbing Materials Supply',
    icon_color: 'bg-blue-100 text-primary',
    items: [
      'PVC and metal pipes',
      'Pipe fittings and connections',
      'Water tanks and storage',
      'Taps and valves',
      'Plumbing tools and accessories',
      'Water treatment supplies',
    ],
    description: 'Complete plumbing solutions for residential, commercial, and industrial applications. Quality materials with competitive pricing.',
  },
];

export default function Services() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-white/90">
            Comprehensive supply solutions across multiple product categories
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-lg ${service.icon_color} flex items-center justify-center`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                    </div>

                    <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      <h3 className="font-bold text-foreground">What we offer:</h3>
                      <ul className="space-y-2">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-foreground/80">
                            <span className="text-primary font-bold mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="https://wa.me/254790809501?text=Hello%20WALBUZ%2C%20I%20am%20interested%20in%20your%20services"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-primary hover:bg-accent text-white px-6 py-3 rounded-lg font-semibold">
                        Inquire Now
                      </Button>
                    </a>
                  </div>

                  <Card className="bg-blue-50 p-8 border-0 h-full flex flex-col justify-center">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-primary">Why Choose WALBUZ for {service.title}?</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-primary font-bold text-lg">✓</span>
                          <span className="text-foreground/80">High-quality products meeting industry standards</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary font-bold text-lg">✓</span>
                          <span className="text-foreground/80">Competitive pricing with bulk discounts available</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary font-bold text-lg">✓</span>
                          <span className="text-foreground/80">Fast and reliable nationwide delivery</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary font-bold text-lg">✓</span>
                          <span className="text-foreground/80">Professional customer support team</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary font-bold text-lg">✓</span>
                          <span className="text-foreground/80">Flexible payment terms for businesses</span>
                        </li>
                      </ul>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Need Custom Solutions?</h2>
          <p className="text-xl text-foreground/70 mb-8">
            Contact us today to discuss your specific supply requirements
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/254790809501?text=Hello%20WALBUZ%2C%20I%20would%20like%20to%20discuss%20custom%20supply%20solutions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-accent text-white px-8 py-6 text-base rounded-lg font-semibold w-full sm:w-auto">
                WhatsApp Us
              </Button>
            </a>
            <Link href="/">
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-6 text-base rounded-lg font-semibold w-full sm:w-auto">
                Back Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
