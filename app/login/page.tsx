"use client"

import { useState } from "react"
import { useAuth } from "@/context/auth-context"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  const { login, users } = useAuth()
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const foundUser = users.find((u) => u.email === email)
    if (!foundUser) {
      router.push("/signup")
      return
    }

    if (!login(email, password)) {
      setError("Invalid password")
    } else {
      router.push("/dashboard")
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 space-y-4 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center">Login</h1>

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

        {error && <p className="text-destructive text-sm">{error}</p>}

        <div className="flex items-center">
          <Button type="submit">
            Login
          </Button>
          <Button type="submit">
            sign up
          </Button>
        </div>
      </form >
    </div >
  )
}
