import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rewa Rabbits Grocery Delivery Creative",
  description: "Immersive hero artwork for Rewa Rabbits grocery delivery platform"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
