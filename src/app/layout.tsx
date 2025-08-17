import "./globals.css";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Hotel Reservation",
  description: "Responsive Next.js app with Tailwind",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  );
}
