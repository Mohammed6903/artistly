"use client"

import { Skeleton } from "@/components/ui/skeleton"

export default function ArtistsPageSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header Skeleton */}
          <div className="text-center mb-8 sm:mb-12">
            <Skeleton className="h-10 sm:h-12 w-3/4 sm:w-2/3 mx-auto mb-4" />
            <Skeleton className="h-5 sm:h-6 w-1/2 sm:w-1/3 mx-auto" />
          </div>

          {/* Search & Controls Skeleton */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 sm:mb-8">
            <Skeleton className="h-10 sm:h-11 w-full sm:w-1/2" />
            <div className="flex gap-2">
              <Skeleton className="h-10 sm:h-11 w-10" />
              <Skeleton className="h-10 sm:h-11 w-10" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Sidebar Filters Skeleton */}
            <div className="hidden lg:block lg:w-72 xl:w-80">
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <Skeleton className="h-6 w-2/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>

            {/* Artist Cards Skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 flex-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-48 w-full rounded-lg" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
