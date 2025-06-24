"use client"

import React from "react"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MultiSelect } from "@/components/ui/multi-select"
import { Label } from "@/components/ui/label"
import {
  User,
  FileText,
  Tag,
  Languages,
  DollarSign,
  MapPin,
  Camera,
  Sparkles,
  CalendarCheck
} from "lucide-react"
import { motion } from "framer-motion"
import { artistSchema, ArtistOnboardingData } from "@/lib/validation/artist"

const categories = [
  { label: "Singer", value: "Singer" },
  { label: "Dancer", value: "Dancer" },
  { label: "Speaker", value: "Speaker" },
  { label: "DJ", value: "DJ" },
]

const specialtiesOptions = [
  { label: "Portraits", value: "Portraits" },
  { label: "Murals", value: "Murals" },
  { label: "Acrylic", value: "Acrylic" },
  { label: "Bharatanatyam", value: "Bharatanatyam" },
  { label: "Contemporary", value: "Contemporary" },
];

const languagesOptions = [
  { label: "English", value: "English" },
  { label: "Hindi", value: "Hindi" },
  { label: "Marathi", value: "Marathi" },
  { label: "Tamil", value: "Tamil" },
  { label: "Gujarati", value: "Gujarati" },
];

export default function ArtistOnboardingForm() {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(artistSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
      specialties: [],
      languages: [],
      location: "",
      priceRange: { min: 0, max: 0 },
      avatar: "",
      availability: "",
      rating: 0
    },
  })

  const onSubmit = async (data: ArtistOnboardingData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Form Submitted:", data)
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen mt-12 bg-gradient-to-br from-background via-background to-muted/20 py-8 sm:py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-card border border-border rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 sm:p-8 border-b border-border">
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-foreground">
                Artist Onboarding
              </h1>
            </motion.div>
            <motion.p variants={itemVariants} className="text-muted-foreground text-sm sm:text-base">
              Join our platform and showcase your talent to the world
            </motion.p>
          </div>

          <div className="p-6 sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
              <motion.div variants={itemVariants} className="space-y-2">
                <Label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Full Name
                </Label>
                <Input {...register("name")} placeholder="Enter your full name" className="pr-0" />
                {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <Label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  Description
                </Label>
                <Textarea {...register("description")} placeholder="Describe your artistry..." rows={4} className="pr-0" />
                {errors.description && <p className="text-destructive text-sm">{errors.description.message}</p>}
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <Label className="flex gap-2 items-center text-sm font-medium text-foreground">
                  <Tag className="w-4 h-4 text-primary" />
                  Category
                </Label>
                <select {...register("category")} className="w-full bg-background border-border rounded-md py-2 px-3">
                  <option value="">Select category</option>
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
                {errors.category && <p className="text-destructive text-sm">{errors.category.message}</p>}
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <Label className="flex gap-2 items-center text-sm font-medium text-foreground">
                  <Languages className="w-4 h-4 text-primary" />
                  Languages
                </Label>
                <Controller
                  control={control}
                  name="languages"
                  render={({ field }) => (
                    <MultiSelect
                      options={languagesOptions}
                      onValueChange={field.onChange}
                      defaultValue={(field.value ?? []).filter((v): v is string => typeof v === "string")}
                      placeholder="Select languages"
                    />
                  )}
                />
                {errors.languages && (
                  <p className="text-destructive text-sm">{errors.languages.message}</p>
                )}
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <Label className="flex gap-2 items-center text-sm font-medium text-foreground">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Specialties
                </Label>
                <Controller
                  control={control}
                  name="specialties"
                  render={({ field }) => (
                    <MultiSelect
                      options={specialtiesOptions}
                      onValueChange={field.onChange}
                      defaultValue={(field.value ?? []).filter((v): v is string => typeof v === "string")}
                      placeholder="Select specialties"
                    />
                  )}
                />
                {errors.specialties && (
                  <p className="text-destructive text-sm">{errors.specialties.message}</p>
                )}
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <Label className="flex gap-2 items-center text-sm font-medium text-foreground">
                  <DollarSign className="w-4 h-4 text-primary" />
                  Price Range (₹)
                </Label>
                <div className="flex gap-4">
                  <Input type="number" placeholder="Min" {...register("priceRange.min")} className="pr-0" />
                </div>
                <div className="flex gap-2">
                  <Input type="number" placeholder="Max" {...register("priceRange.max")} className="pr-0" />
                </div>
                {(errors.priceRange?.min || errors.priceRange?.max) && <p className="text-destructive text-sm">Enter valid price range</p>}
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <Label className="flex gap-2 items-center text-sm font-medium text-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  Location
                </Label>
                <Input {...register("location")} placeholder="Enter your location" className="pr-0" />
                {errors.location && <p className="text-destructive text-sm">{errors.location.message}</p>}
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <Label className="flex gap-2 items-center text-sm font-medium text-foreground">
                  <CalendarCheck className="w-4 h-4 text-primary" />
                  Availability
                </Label>
                <Input {...register("availability")} placeholder="e.g. Weekends, Evenings" className="pr-0" />
                {errors.availability && <p className="text-destructive text-sm">{errors.availability.message}</p>}
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <Label className="flex gap-2 items-center text-sm font-medium text-foreground">
                  <Camera className="w-4 h-4 text-primary" />
                  Profile Image
                </Label>
                <Input type="file" accept="image/*" className="pr-0" onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) {
                    const reader = new FileReader()
                    reader.onload = () => {
                      setValue("avatar", reader.result as string)
                    }
                    reader.readAsDataURL(file)
                  }
                }} />
                <input type="hidden" {...register("avatar")} className="pr-0" />
              </motion.div>

              <motion.div variants={itemVariants} className="pt-4">
                <Button type="submit" disabled={isSubmitting} className="w-full h-12">
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
