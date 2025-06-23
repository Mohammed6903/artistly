"use client"
import React from "react"
import { useForm, Controller } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MultiSelect } from "@/components/ui/multi-select"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"
import {
  User,
  FileText,
  Tag,
  Languages,
  DollarSign,
  MapPin,
  Camera,
  Sparkles,
  ChevronDown,
  Check
} from "lucide-react"
import { motion } from "framer-motion"

const categories = [
  { label: "Singer", value: "singer" },
  { label: "Dancer", value: "dancer" },
  { label: "Speaker", value: "speaker" },
  { label: "DJ", value: "dj" },
]

const languages = [
  { label: "English", value: "english" },
  { label: "Hindi", value: "hindi" },
  { label: "Marathi", value: "marathi" },
  { label: "Tamil", value: "tamil" },
  { label: "Gujarati", value: "gujarati" },
]

const feeRanges = [
  { label: "₹1,000 - ₹5,000", value: "1000-5000" },
  { label: "₹5,000 - ₹10,000", value: "5000-10000" },
  { label: "₹10,000+", value: "10000+" },
]

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  feeRange: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
})

export default function ArtistOnboardingForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      bio: "",
      category: [],
      languages: [],
      feeRange: "",
      location: "",
    },
  })

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log("Form Submitted:", data)
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
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
          {/* Header */}
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

          {/* Form */}
          <div className="p-6 sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
              {/* Name Field */}
              <motion.div variants={itemVariants} className="space-y-2">
                <Label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Full Name
                </Label>
                <div className="relative">
                  <Input
                    {...register("name")}
                    placeholder="Enter your full name"
                    className="pl-4 pr-0 py-3 bg-background border-border focus:border-primary focus:ring-primary/20 transition-all duration-200"
                  />
                </div>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-destructive text-sm flex items-center gap-1"
                  >
                    {errors.name.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Bio Field */}
              <motion.div variants={itemVariants} className="space-y-2">
                <Label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  Bio
                </Label>
                <Textarea
                  {...register("bio")}
                  placeholder="Tell us about yourself, your experience, and what makes you unique..."
                  className="min-h-[100px] pr-0 bg-background border-border focus:border-primary focus:ring-primary/20 transition-all duration-200 resize-none"
                  rows={4}
                />
                {errors.bio && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-destructive text-sm flex items-center gap-1"
                  >
                    {errors.bio.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Category Field */}
              <motion.div variants={itemVariants} className="space-y-2">
                <Label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Tag className="w-4 h-4 text-primary" />
                  Categories
                </Label>
                <Controller
                  control={control}
                  name="category"
                  render={({ field }) => (
                    <div className="relative">
                      <MultiSelect
                        variant={"secondary"}
                        options={categories}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        placeholder="Select your performance categories"
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                  )}
                />
                {errors.category && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-destructive text-sm flex items-center gap-1"
                  >
                    {errors.category.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Languages Field */}
              <motion.div variants={itemVariants} className="space-y-2">
                <Label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Languages className="w-4 h-4 text-primary" />
                  Languages Spoken
                </Label>
                <Controller
                  control={control}
                  name="languages"
                  render={({ field }) => (
                    <div className="relative">
                      <MultiSelect
                        options={languages}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        placeholder="Select languages you speak"
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                  )}
                />
                {errors.languages && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-destructive text-sm flex items-center gap-1"
                  >
                    {errors.languages.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Fee Range Field */}
              <motion.div variants={itemVariants} className="space-y-2">
                <Label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-primary" />
                  Fee Range
                </Label>
                <Controller
                  control={control}
                  name="feeRange"
                  render={({ field }) => (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-between h-12 bg-background border-border hover:border-primary hover:bg-accent/50 transition-all duration-200"
                        >
                          <span className={field.value ? "text-foreground" : "text-muted-foreground"}>
                            {feeRanges.find((f) => f.value === field.value)?.label || "Select your fee range"}
                          </span>
                          <ChevronDown className="w-4 h-4 text-muted-foreground" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0 bg-card border-border">
                        <div className="py-2">
                          {feeRanges.map((f) => (
                            <div
                              key={f.value}
                              onClick={() => field.onChange(f.value)}
                              className="flex items-center justify-between cursor-pointer px-4 py-3 hover:bg-accent/50 transition-colors duration-150"
                            >
                              <span className="text-sm font-medium">{f.label}</span>
                              {field.value === f.value && (
                                <Check className="w-4 h-4 text-primary" />
                              )}
                            </div>
                          ))}
                        </div>
                      </PopoverContent>
                    </Popover>
                  )}
                />
                {errors.feeRange && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-destructive text-sm flex items-center gap-1"
                  >
                    {errors.feeRange.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Location Field */}
              <motion.div variants={itemVariants} className="space-y-2">
                <Label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Location
                </Label>
                <Input
                  {...register("location")}
                  placeholder="Enter your city or location"
                  className="pl-4 pr-0 py-3 bg-background border-border focus:border-primary focus:ring-primary/20 transition-all duration-200"
                />
                {errors.location && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-destructive text-sm flex items-center gap-1"
                  >
                    {errors.location.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Profile Image Field */}
              <motion.div variants={itemVariants} className="space-y-2">
                <Label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Camera className="w-4 h-4 text-primary" />
                  Profile Image
                  <span className="text-xs text-muted-foreground font-normal">(Optional)</span>
                </Label>
                <div className="relative">
                  <Input
                    type="file"
                    accept="image/*"
                    className="file:mr-4 file:py-2 file:px-4 pr-0 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20 file:transition-colors file:duration-200 bg-background border-border"
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Upload a professional photo to help clients recognize you
                </p>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants} className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                      Processing...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Submit Application
                    </div>
                  )}
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-muted-foreground">
            By submitting this form, you agree to our terms of service and privacy policy.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
