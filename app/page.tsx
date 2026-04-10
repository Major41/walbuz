'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { WhatsAppFloat } from '@/components/whatsapp-float';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Briefcase, Package, Zap, TrendingUp, Users, Globe } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const services = [
    {
      icon: Briefcase,
      title: 'Office & Corporate Supplies',
      description: 'Complete stationery, printers, furniture, and office equipment for your workspace needs.',
      color: 'bg-blue-50',
    },
    {
      icon: Package,
      title: 'Sports Equipment',
      description: 'High-quality balls, kits, gym equipment for schools, clubs, and athletic facilities.',
      color: 'bg-blue-50',
    },
    {
      icon: Zap,
      title: 'School Supplies',
      description: 'Books, uniforms, desks, and comprehensive learning materials for educational institutions.',
      color: 'bg-blue-50',
    },
    {
      icon: TrendingUp,
      title: 'Building Materials',
      description: 'Cement, steel, tools, and hardware for construction and infrastructure projects.',
      color: 'bg-blue-50',
    },
    {
      icon: Globe,
      title: 'Plumbing Materials',
      description: 'Pipes, fittings, tanks, and accessories for plumbing and water systems.',
      color: 'bg-blue-50',
    },
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: 'Reliable Service',
      description: 'Consistent quality and dependable delivery every time, backed by years of experience.',
    },
    {
      icon: TrendingUp,
      title: 'Affordable Pricing',
      description: 'Competitive rates without compromising on quality of products and services.',
    },
    {
      icon: Globe,
      title: 'Nationwide Delivery',
      description: 'We deliver throughout Kenya, ensuring your supplies reach you wherever you are.',
    },
  ];

  const testimonials = [
    {
      name: 'John Karanja',
      company: 'ABC Corporation',
      text: 'WALBUZ has been our trusted supplier for office supplies for over 3 years. Excellent service and competitive pricing!',
      image: '👨‍💼',
    },
    {
      name: 'Sarah Kipchoge',
      company: 'Elite Sports Academy',
      text: 'The quality of sports equipment is outstanding. Our athletes love the products, and delivery is always on time.',
      image: '👩‍🏫',
    },
    {
      name: 'Peter Mwangi',
      company: 'BuildRight Construction',
      text: 'Best supplier for construction materials in Nairobi. Reliable, affordable, and professional team.',
      image: '👨‍🔧',
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Your Trusted Partner for{' '}
              <span className="text-primary">Quality Supplies</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              From office equipment to construction materials, sports gear to school supplies—WALBUZ delivers reliability, affordability, and nationwide service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/products">
                <Button className="bg-primary hover:bg-accent text-white px-8 py-6 text-base rounded-lg font-semibold w-full sm:w-auto">
                  Get a Quote
                </Button>
              </Link>
              <a
                href="https://wa.me/254790809501?text=Hello%20WALBUZ%2C%20I%20would%20like%20to%20inquire%20about%20your%20products"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-6 text-base rounded-lg font-semibold w-full sm:w-auto">
                  Contact Us
                </Button>
              </a>
            </div>

            <p className="text-sm text-foreground/60">
              📞 Call or WhatsApp: <a href="https://wa.me/254790809501" className="font-semibold text-primary hover:text-accent">+254 790 809 501</a>
            </p>
          </div>

          <div className="relative h-96 lg:h-full">
            <Image
              src="/hero-image.jpg"
              alt="WALBUZ Supplies"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">About WALBUZ</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              WALBUZ General Supplies Limited is a leading supplier of diverse products and services across Kenya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 border-0 bg-blue-50 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-3">Our Mission</h3>
              <p className="text-foreground/80">
                To provide reliable, affordable, and high-quality supplies nationwide, building lasting partnerships with our clients.
              </p>
            </Card>

            <Card className="p-8 border-0 bg-blue-50 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-3">Our Vision</h3>
              <p className="text-foreground/80">
                To be Kenya&apos;s most trusted one-stop supplier of diversified quality products and services.
              </p>
            </Card>

            <Card className="p-8 border-0 bg-blue-50 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-3">Location</h3>
              <p className="text-foreground/80 mb-2">Based in Nairobi, Kenya</p>
              <p className="text-foreground/80">P.O Box 281-40607</p>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-12 text-white">
            <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-xl">✓</span>
                <span><strong>Reliability:</strong> Consistent quality and dependable service</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">✓</span>
                <span><strong>Affordability:</strong> Competitive pricing for all market segments</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">✓</span>
                <span><strong>Efficiency:</strong> Fast processing and nationwide delivery</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Snapshot Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-xl text-foreground/70">
              Comprehensive supply solutions across multiple categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={index} href="/services">
                  <Card className="p-6 border-0 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer h-full hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 text-sm">{service.title}</h3>
                    <p className="text-sm text-foreground/70">{service.description}</p>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-primary hover:bg-accent text-white px-8 py-3 rounded-lg font-semibold">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose WALBUZ?</h2>
            <p className="text-xl text-foreground/70">
              We are committed to excellence in every aspect of our service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-8 border-0 bg-blue-50 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 text-white">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-white/80">
              Join hundreds of satisfied businesses across Kenya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 border-0 bg-white/10 backdrop-blur hover:bg-white/20 transition-colors">
                <p className="text-white text-lg italic mb-6">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-3">
                  {/* <div className="text-3xl">{testimonial.image}</div> */}
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-white/70 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-foreground/70 mb-8">
            Contact WALBUZ today via WhatsApp for quick responses and personalized service
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/254790809501?text=Hello%20WALBUZ%2C%20I%20would%20like%20to%20inquire%20about%20your%20products"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-accent text-white px-8 py-6 text-base rounded-lg font-semibold w-full sm:w-auto">
                WhatsApp Now
              </Button>
            </a>
            <Link href="/products">
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-6 text-base rounded-lg font-semibold w-full sm:w-auto">
                Browse Products
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
