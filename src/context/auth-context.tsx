"use client"

import React, { createContext, useContext, useState } from "react"

export interface AuthUser {
  name: string
  email: string
  password: string
  role: "user" | "admin"
}

interface AuthContextProps {
  users: AuthUser[]
  currentUser: AuthUser | null
  signup: (user: AuthUser) => void
  login: (email: string, password: string) => boolean
  logout: () => void
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<AuthUser[]>([])
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null)

  const signup = (user: AuthUser) => {
    setUsers((prev) => [...prev, user])
    setCurrentUser(user)
  }

  const login = (email: string, password: string) => {
    const found = users.find((u) => u.email === email && u.password === password)
    if (found) {
      setCurrentUser(found)
      return true
    }
    return false
  }

  const logout = () => {
    setCurrentUser(null)
  }

  return (
    <AuthContext.Provider value={{ users, currentUser, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}