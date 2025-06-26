"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Lock } from "lucide-react"

export default function NotAuthorizedPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-card border border-border rounded-lg p-8 shadow-lg text-center max-w-md w-full">
        <div className="flex justify-center mb-4">
          <div className="bg-primary/20 p-4 rounded-full">
            <Lock className="w-8 h-8 text-primary" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Access Denied</h1>
        <p className="text-muted-foreground mb-6">
          You do not have permission to view this page.
        </p>
        <Button onClick={() => router.push("/")}>
          Go to Home
        </Button>
      </div>
    </div>
  )
}
