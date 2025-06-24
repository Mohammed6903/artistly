"use client";
import React, { useState, useEffect } from "react";
import { Table } from "@/components/common/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, Download, Users, Calendar, DollarSign, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { type HiredArtist } from "@/types/artist";
import { hiredArtistsData } from "@/data/artists";

export default function ManagerDashboardPage() {
  const [submissions, setSubmissions] = useState<HiredArtist[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<HiredArtist[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setSubmissions(hiredArtistsData);
      setFilteredSubmissions(hiredArtistsData);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = submissions;

    if (searchTerm) {
      filtered = filtered.filter(
        (artist) =>
          artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          artist.eventName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          artist.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((artist) => artist.category === selectedCategory);
    }

    setFilteredSubmissions(filtered);
  }, [searchTerm, selectedCategory, submissions]);

  const handleActionClick = (row: HiredArtist) => {
    alert(`Viewing details for ${row.name} at ${row.eventName}`);
  };

  const handleExport = () => {
    alert("Exporting data...");
  };

  const categories = ["all", ...Array.from(new Set(submissions.map(artist => artist.category)))];
  const totalArtists = submissions.length;
  const totalRevenue = submissions.reduce((sum, artist) => sum + artist.priceRange.max, 0);
  const averageFee = totalArtists > 0 ? Math.round(totalRevenue / totalArtists) : 0;

  const getStatusBadge = (artist: HiredArtist) => {
    const status = artist.status;

    const variants = {
      confirmed: "default",
      pending: "secondary",
      completed: "outline"
    };

    return (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <Badge variant={variants[status as keyof typeof variants] as any}>
        {status}
      </Badge>
    );
  };

  return (
    <div className="max-w-7xl mx-auto mt-12 py-8 px-4 space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Artist Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage and track your hired artists across all events
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleExport} className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="gap-2" onClick={() => router.push("/onboarding")}>
            <Users className="h-4 w-4" />
            Add Artist
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Artists</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalArtists}</div>
            <p className="text-xs text-muted-foreground">Active bookings</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Maximum potential</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Fee</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${averageFee.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Per booking</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Locations</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Set(submissions.map(artist => artist.location)).size}
            </div>
            <p className="text-xs text-muted-foreground">Cities covered</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Artist Directory</CardTitle>
          <CardDescription>
            Search and filter through your hired artists
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex w-auto md:w-full flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1 w-auto pr-12 md:pr-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search artists, events, or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex pl-0 md:pl-12 gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>

          <Table<HiredArtist>
            columns={[
              {
                key: "name",
                header: "Artist Name",
                render: (row) => (
                  <div className="font-medium">{row.name}</div>
                )
              },
              {
                key: "category",
                header: "Category",
                render: (row) => (
                  <Badge variant="secondary">{row.category}</Badge>
                )
              },
              {
                key: "location",
                header: "Location",
                render: (row) => (
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    {row.location}
                  </div>
                )
              },
              {
                key: "priceRange",
                header: "Fee Range",
                render: (row) => (
                  <div className="font-mono text-sm">
                    ${row.priceRange.min.toLocaleString()} - ${row.priceRange.max.toLocaleString()}
                  </div>
                )
              },
              {
                key: "name",
                header: "Status",
                render: (row) => getStatusBadge(row)
              },
              {
                key: "eventName",
                header: "Event",
                render: (row) => (
                  <div className="text-sm text-muted-foreground">
                    {row.eventName || "No event assigned"}
                  </div>
                )
              }
            ]}
            data={filteredSubmissions}
            actionLabel="Manage"
            onActionClick={handleActionClick}
            className="border-0"
          />

          {isLoading && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="text-muted-foreground mt-2">Loading artists...</p>
            </div>
          )}

          {!isLoading && filteredSubmissions.length === 0 && submissions.length > 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No artists match your search criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="mt-2"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
