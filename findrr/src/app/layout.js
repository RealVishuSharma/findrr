
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
   subsets: ["latin"],
   variable: "--font-sans",
});

export const metadata = {
  title: "findrr",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className }>{children}</body>
    </html>
  );
}
