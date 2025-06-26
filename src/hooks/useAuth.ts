"use client"

import { useContext } from "react"
import { AuthContext } from "@/context/auth-context"

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be inside AuthProvider")
  return ctx
}