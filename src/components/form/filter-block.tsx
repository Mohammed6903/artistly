"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface FilterOption {
  value: string
  label: string
}

interface FilterBlockProps {
  title: string
  options: FilterOption[]
  value: string
  onChange: (value: string) => void
}

export function FilterBlock({ title, options, value, onChange }: FilterBlockProps) {
  return (
    <div className="mb-6">
      <h3 className="font-medium text-card-foreground mb-3">{title}</h3>
      <RadioGroup value={value} onValueChange={onChange} className="space-y-2">
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <RadioGroupItem
              value={option.value}
              id={`${title}-${option.value}`}
              className="border-border text-primary"
            />
            <Label
              htmlFor={`${title}-${option.value}`}
              className="text-sm text-muted-foreground hover:text-foreground cursor-pointer"
            >
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}
