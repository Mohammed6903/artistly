"use client"

import * as React from "react"
import { Check, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface DropdownOption {
  label: string
  value: string
}

interface DropdownProps {
  options: DropdownOption[]
  placeholder?: string
  value: string | null
  onChange: (value: string) => void
}

export function Dropdown({ options, placeholder = "Select...", value, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  const selectedOption = options.find((opt) => opt.value === value)

  return (
    <div className="relative inline-block w-full">
      <button
        type="button"
        className="w-full bg-background border border-input rounded-lg shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring sm:text-sm"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="block truncate">{selectedOption ? selectedOption.label : placeholder}</span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <ChevronDown className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
        </span>
      </button>
      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-background shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          {options.map((option, index) => (
            <li
              key={`${option.value}-${index}`}
              className={cn(
                "cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-accent hover:text-accent-foreground",
                value === option.value && "bg-accent text-accent-foreground"
              )}
              onClick={() => {
                onChange(option.value)
                setIsOpen(false)
              }}
            >
              <span className="block truncate">{option.label}</span>
              {value === option.value ? (
                <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
