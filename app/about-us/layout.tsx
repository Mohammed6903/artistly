import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Our Mission, Values & Team | Artistly',
  description: 'Discover the mission, values, and dedicated team behind YourPlatformName. We connect talented artists across India with clients for memorable events and foster a thriving creative community. Learn about our story, impact, and commitment to excellence.',
  keywords: 'about Artistly, company mission, values, team, artist platform India, event booking platform, connect artists, creative community, talent marketplace, online art platform, Mira Bhayandar artists, Maharashtra events',
  openGraph: {
    title: 'About Us - Artistly: Connecting Artists & Events',
    description: 'Learn about Artistly\'s mission to connect talented artists with clients across India, fostering creativity and memorable experiences.',
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
    siteName: 'Artistly',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/og-about-us.png`,
        width: 1200,
        height: 630,
        alt: 'Team of Artistly working together to connect artists and events',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    title: 'About Artistly: Mission & Impact',
    description: 'Connecting artists with opportunities: learn about our mission, values, and the team driving Artistly forward.',
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: { // Specific settings for Googlebot
      index: true,
      follow: true,
      noimageindex: false,
      'max-snippet': -1,
      'max-video-preview': -1,
      'max-image-preview': 'large',
    },
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
