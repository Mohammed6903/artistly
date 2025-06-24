"use client"

import { useState } from "react"
import { useAuth } from "@/context/auth-context"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const { signup } = useAuth()
  const router = useRouter()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [role, setRole] = useState<"user" | "admin">("user")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    signup({ name, email, password, role })
    router.push("/login")
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 space-y-4 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border rounded p-2 pr-0"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border rounded p-2 pr-0"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border rounded p-2 pr-0"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="w-full border rounded p-2 pr-0"
        />

        <select value={role} onChange={(e) => setRole(e.target.value as "user" | "admin")} className="w-full border rounded p-2">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        {error && <p className="text-destructive text-sm">{error}</p>}

        <button type="submit" className="w-full bg-primary text-primary-foreground rounded p-2">
          Sign Up
        </button>
      </form>
    </div>
  )
}
