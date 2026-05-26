import type { Metadata } from "next";
import { Audiowide, Recursive } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/ui/Navbar/Navbar";
import Footer from "@/components/ui/Footer/Footer";
import { ScrollSnapProvider } from "@/context/ScrollSnapContext";
import SmoothScroll from "@/components/providers/SmoothScroll";

const recursive = Recursive({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-recursive",
});

const auto_wide = Audiowide({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-auto_wide",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ishak-qureshee-akib.netlify.app"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Ishak Qureshee Akib | Software Developer",
    template: "%s | Ishak Qureshee Akib"
  },
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
    "Ishak Qureshee Akib", "Akib", "Qureshee",
  ],
  authors: [{ name: "Ishak Qureshee Akib" }],
  creator: "Ishak Qureshee Akib",
  openGraph: {
    title: "Ishak Qureshee Akib - Software Developer",
    description: "Personal portfolio showcasing my software solutions, websites and skills.",
    url: "https://ishak-qureshee-akib.netlify.app",
    images: ["/favicon.png"],
    type: "website",
    locale: "en_US",
    siteName: "Ishak Qureshee Akib Portfolio",
  },
  icons: {
    icon: "/favicon.png",
  },
  verification: {
    google: "snP4pG79eonl3CdiMVHwQnz0XJTlnruJIghnbHAgkno",
  }
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en">
      <body className={`${recursive.className} ${auto_wide.variable} antialiased`}>
        <SmoothScroll>
          <ScrollSnapProvider>
            <div className="bg-cover bg-fixed bg-[url('/pattern.svg')] min-h-screen w-full">
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
        </SmoothScroll>
      </body>
    </html>
  );
}
