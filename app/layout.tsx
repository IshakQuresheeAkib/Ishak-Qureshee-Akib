import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import InitialLoading from "@/components/InitialLoading/InitialLoading";
import { ScrollSnapProvider } from "@/lib/ScrollSnapContext";

const recursive = Recursive({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-recursive",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ishakquresheeakib.vercel.app"),
  title: "Ishak Qureshee Akib - Full Stack Developer",
  description:
    "Portfolio of Ishak Qureshee Akib showcasing web development projects, skills, and experience. Specializing in React, Next.js, and the MERN stack.",
  keywords: [
    "portfolio",
    "web developer",
    "full-stack",
    "React",
    "Next.js",
    "MERN stack",
    "frontend developer",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Ishak Qureshee Akib" }],
  openGraph: {
    title: "Ishak Qureshee Akib - Portfolio",
    description: "Full Stack Developer Portfolio - React, Next.js, MERN Stack",
    images: ["/Akib.png"],
    type: "website",
    siteName: "Ishak Qureshee Akib Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishak Qureshee Akib - Portfolio",
    description: "Full Stack Developer Portfolio",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${recursive.variable} font-sans antialiased`}>
        <ScrollSnapProvider>
          <InitialLoading />
          <div className="banner bg-cover min-h-screen max-w-screen overflow-hidden">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
            theme="dark"
          />
        </ScrollSnapProvider>
      </body>
    </html>
  );
}
