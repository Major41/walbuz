"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, MessageCircle, Globe } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-white/90">
            We&apos;re here to help and answer any questions you might have
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* WhatsApp */}
            <Card className="p-8 border-0 bg-blue-50 hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 rounded-lg bg-green-100 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-3">
                WhatsApp
              </h3>
              <p className="text-foreground/70 text-sm mb-4">
                Quick response and real-time communication
              </p>
              <a
                href="https://wa.me/254790809501"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-primary hover:text-accent transition-colors"
              >
                +254 *** *** ***
              </a>
            </Card>

            {/* Phone */}
            <Card className="p-8 border-0 bg-blue-50 hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-3">Phone</h3>
              <p className="text-foreground/70 text-sm mb-4">
                Call us during business hours
              </p>
              <a
                href="tel:+254790809501"
                className="font-bold text-primary hover:text-accent transition-colors"
              >
                +254 *** *** ***
              </a>
            </Card>

            {/* Email */}
            <Card className="p-8 border-0 bg-blue-50 hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-3">Email</h3>
              <p className="text-foreground/70 text-sm mb-4">
                Send us your inquiries
              </p>
              <a
                href="mailto:info@walbuz.co.ke"
                className="font-bold text-primary hover:text-accent transition-colors"
              >
                info@walbuz.co.ke
              </a>
            </Card>

            {/* Location */}
            <Card className="p-8 border-0 bg-blue-50 hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-3">
                Location
              </h3>
              <p className="text-foreground/70 text-sm">
                Nairobi, Kenya
                <br />
                P.O Box 281-40607
              </p>
            </Card>
          </div>

          {/* Business Hours */}
          <Card className="p-8 border-0 bg-gradient-to-r from-primary/5 to-secondary/5 mb-16">
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-foreground mb-3">
                  Business Hours
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-foreground/70">Monday - Friday</p>
                    <p className="font-semibold text-foreground">
                      8:00 AM - 5:30 PM
                    </p>
                  </div>
                  <div>
                    <p className="text-foreground/70">Saturday</p>
                    <p className="font-semibold text-foreground">
                      9:00 AM - 2:00 PM
                    </p>
                  </div>
                  <div>
                    <p className="text-foreground/70">Sunday</p>
                    <p className="font-semibold text-foreground">
                      WhatsApp Only
                    </p>
                  </div>
                  <div>
                    <p className="text-foreground/70">Public Holidays</p>
                    <p className="font-semibold text-foreground">
                      Available via WhatsApp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Why WhatsApp */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why WhatsApp?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg mt-0.5">
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Instant Response
                    </p>
                    <p className="text-foreground/70">
                      Get quick replies to your inquiries
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg mt-0.5">
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Easy Communication
                    </p>
                    <p className="text-foreground/70">
                      Share images, documents, and details easily
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg mt-0.5">
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">
                      Available 24/7
                    </p>
                    <p className="text-foreground/70">
                      Send messages anytime, get responses during business hours
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg mt-0.5">
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">No Waiting</p>
                    <p className="text-foreground/70">
                      Skip the phone queue, get direct line access
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <Card className="p-8 border-0 bg-gradient-to-br from-green-50 to-blue-50 text-center h-full flex flex-col justify-center">
              <MessageCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Connect?
              </h3>
              <p className="text-foreground/70 mb-6">
                Click below to start a WhatsApp conversation with our team
              </p>
              <a
                href="https://wa.me/254790809501?text=Hello%20WALBUZ%2C%20I%20would%20like%20to%20inquire%20about%20your%20products%20and%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold w-full">
                  WhatsApp Now
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            What Can You Contact Us About?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 border-0 bg-white hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-2">
                Product Inquiries
              </h3>
              <p className="text-foreground/70 text-sm">
                Ask about our products and their availability
              </p>
            </Card>

            <Card className="p-6 border-0 bg-white hover:shadow-lg transition-shadow">
              <MessageCircle className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-2">Quotations</h3>
              <p className="text-foreground/70 text-sm">
                Request customized quotes for your orders
              </p>
            </Card>

            <Card className="p-6 border-0 bg-white hover:shadow-lg transition-shadow">
              <Phone className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-2">Bulk Orders</h3>
              <p className="text-foreground/70 text-sm">
                Special pricing for large quantity orders
              </p>
            </Card>

            <Card className="p-6 border-0 bg-white hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-2">
                Delivery Information
              </h3>
              <p className="text-foreground/70 text-sm">
                Ask about delivery to your location
              </p>
            </Card>

            <Card className="p-6 border-0 bg-white hover:shadow-lg transition-shadow">
              <Mail className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-2">
                Payment Options
              </h3>
              <p className="text-foreground/70 text-sm">
                Learn about our flexible payment terms
              </p>
            </Card>

            <Card className="p-6 border-0 bg-white hover:shadow-lg transition-shadow">
              <Phone className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-2">Support</h3>
              <p className="text-foreground/70 text-sm">
                General customer support and assistance
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Let&apos;s Start a Conversation
          </h2>
          <p className="text-xl text-foreground/70 mb-8">
            Your satisfaction is our priority. Reach out today and let us know
            how we can help
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/254790809501"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-accent text-white px-8 py-6 text-base rounded-lg font-semibold w-full sm:w-auto">
                Contact via WhatsApp
              </Button>
            </a>
            <Link href="/">
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-6 text-base rounded-lg font-semibold w-full sm:w-auto"
              >
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
