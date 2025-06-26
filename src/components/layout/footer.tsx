"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Footer() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Artists", href: "/artists" },
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact-us" }
  ]

  const categories = ["Singers", "Dancers", "Speakers", "DJs"]

  return (
    <footer className="bg-background py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-9 h-9 bg-foreground rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-lg">A</span>
              </div>
              <span className="text-2xl font-bold">Artistly</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Connecting amazing artists with event organizers worldwide. Discover, book, and create unforgettable
              experiences.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-foreground">Quick Links</h4>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-foreground">Categories</h4>
            <div className="space-y-3">
              {categories.map((category) => (
                <Link
                  key={category}
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Artistly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
