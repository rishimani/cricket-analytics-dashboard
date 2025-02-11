import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cricket Analytics Dashboard",
  description: "Comprehensive cricket statistics and analysis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-gray-100">{children}</main>
      </body>
    </html>
  );
}
