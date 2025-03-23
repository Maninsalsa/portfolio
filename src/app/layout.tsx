import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Robert Manansala | Full-Stack Software Engineer",
  description: "Professional SWE portfolio showcasing current and completed end-to-end projects",
  keywords: ["software engineer", "web developer", "full-stack developer", "React developer", "Next.js", "portfolio", "Robert Manansala","python","fastapi","ai","api"],
  openGraph: {
    title: "Robert Manansala | Full-Stack Software Engineer",
    description: "Professional SWE portfolio showcasing current and completed end-to-end projects",
    type: "website",
    locale: "en_US",
    url: "https://manansala.dev", // Replace with your actual domain
    siteName: "Robert Manansala Portfolio",
    // Temporarily commented out until OG image is created
    /*
    images: [ 
      {
        url: "/og-image.jpg", // Create and add an Open Graph image
        width: 1200,
        height: 630,
        alt: "Robert Manansala - Software Engineer",
      },
    ],
    */
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Robert Manansala | Full-Stack Developer",
  //   description: "Professional portfolio showcasing web development projects and software engineering expertise",
  //   images: ["/og-image.jpg"], // Same as OG image
  // },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}