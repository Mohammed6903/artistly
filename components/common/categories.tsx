"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Mic, Music, Users, Headphones } from "lucide-react"
import { motion } from "framer-motion"

export function Categories() {
  const categories = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Singers",
      tagline: "Voices that captivate hearts",
      count: "2,500+ artists",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dancers",
      tagline: "Movement that tells stories",
      count: "1,800+ artists",
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Speakers",
      tagline: "Words that inspire minds",
      count: "1,200+ artists",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "DJs",
      tagline: "Beats that move crowds",
      count: "900+ artists",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Explore Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect artist for your event from our diverse categories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group cursor-pointer"
            >
              <Card className="h-full bg-card border border-border rounded-xl transition-all duration-300 group-hover:shadow-xl group-hover:border-muted">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-muted text-muted-foreground rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{category.title}</h3>
                  <p className="text-muted-foreground mb-3">{category.tagline}</p>
                  <p className="text-sm text-muted-foreground font-medium">{category.count}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
