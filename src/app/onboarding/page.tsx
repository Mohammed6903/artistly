import ArtistOnboardingForm from "@/components/form/onboarding";
import { Metadata } from "next";
import { BASE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: 'Artist Onboarding - Join Our Platform | Artistly',
  description: 'Join Artistly to showcase your artistic talent, connect with clients, and grow your career. Sign up as an artist today!',
  keywords: 'artist sign up, artist registration, join art platform, freelance artist, performer registration, apply as artist',
  openGraph: {
    title: 'Artist Onboarding - Join Our Platform',
    description: 'Join Artistly to showcase your artistic talent, connect with clients, and grow your career.',
    url: `${BASE_URL}/onboarding`,
    type: 'website',
  },
  twitter: {
    title: 'Artist Onboarding - Join Our Platform',
    description: 'Join Artistly to showcase your artistic talent, connect with clients, and grow your career.',
  }
};

export default function ArtistOnboardingPage() {
  return <ArtistOnboardingForm />;
}
