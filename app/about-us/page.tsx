"use client"
import React from "react"
import { motion } from "framer-motion"
import {
  User,
  Globe,
  Sparkles,
  Star,
  Users,
  Award,
  Heart,
  Target,
  Eye,
  Shield
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const stats = [
    { icon: Users, number: "10K+", label: "Active Artists" },
    { icon: Star, number: "50K+", label: "Events Completed" },
    { icon: Globe, number: "100+", label: "Cities Covered" },
    { icon: Award, number: "99%", label: "Client Satisfaction" },
  ]

  const values = [
    {
      icon: Heart,
      title: "Passion for Arts",
      description: "We believe in the power of artistic expression and its ability to bring joy and meaning to people's lives."
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "We maintain the highest standards of security and reliability to protect both artists and clients."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from our platform features to customer support."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We believe in honest, transparent relationships with clear communication and fair practices."
    }
  ]

  const team = [
    {
      name: "Priya Sharma",
      role: "Founder & CEO",
      description: "Former event planner with 15 years of experience in the entertainment industry."
    },
    {
      name: "Arjun Patel",
      role: "Head of Technology",
      description: "Tech enthusiast passionate about building platforms that connect creative professionals."
    },
    {
      name: "Meera Singh",
      role: "Artist Relations",
      description: "Professional dancer turned advocate for artist rights and fair compensation."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16 sm:pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div variants={itemVariants} className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-foreground"
              >
                About Our Platform
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                We&apos;re on a mission to connect talented artists with those who appreciate their craft,
                creating memorable experiences and supporting the creative community.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-card border border-border rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg"
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">Our Story</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    Founded in 2020, our platform was born from a simple observation: incredible artists
                    were struggling to find their audience, while event organizers were having difficulty
                    discovering authentic, talented performers.
                  </p>
                  <p>
                    What started as a small directory of local artists has grown into a comprehensive
                    platform serving thousands of artists and clients across India. We&apos;ve facilitated
                    over 50,000 successful bookings, from intimate private gatherings to large corporate events.
                  </p>
                  <p>
                    Our journey continues as we work to democratize access to artistic talent while
                    ensuring fair compensation and recognition for the creative professionals who make
                    our celebrations and events truly special.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center mb-12"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl sm:text-3xl font-bold mb-4 text-foreground"
              >
                Our Impact in Numbers
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-muted-foreground text-lg max-w-2xl mx-auto"
              >
                These numbers represent the trust our community has placed in us
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center mb-12"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl sm:text-3xl font-bold mb-4 text-foreground"
              >
                Our Values
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-muted-foreground text-lg max-w-2xl mx-auto"
              >
                The principles that guide everything we do
              </motion.p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center mb-12"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl sm:text-3xl font-bold mb-4 text-foreground"
              >
                Meet Our Team
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-muted-foreground text-lg max-w-2xl mx-auto"
              >
                The passionate people behind our platform
              </motion.p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
