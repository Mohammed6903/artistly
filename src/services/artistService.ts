import { ARTISTS_API_URL } from "@/lib/config";

export async function getArtists(options?: { revalidate?: number }) {
  const res = await fetch(ARTISTS_API_URL, {
    next: { revalidate: options?.revalidate ?? 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch artists");

  return res.json();
}