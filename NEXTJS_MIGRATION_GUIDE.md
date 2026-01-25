# Detailed Guide: Migrating from React+Vite to Next.js 16 + TypeScript

This guide provides a step-by-step process for migrating your existing portfolio website from a Vite-based client-side rendered (CSR) application to a modern Next.js project using the App Router, TypeScript, and React 19.

---

### **Step 0: Project Setup & Dependency Installation**

First, navigate to your new Next.js project directory. Your `package.json` is a good starting point, but you need to install the libraries from your old project.

**1. Install Dependencies:**
Open a terminal in your new project's root and run this command to install the necessary libraries you were using previously:

```bash
npm install framer-motion gsap lottie-react @emailjs/browser react-awesome-button react-headroom react-icons react-scroll react-toastify
```

**2. Install TypeScript Definitions:**
For libraries that might not have built-in types, install their corresponding `@types` packages.

```bash
npm install -D @types/react-scroll
```
*Note: GSAP, Framer Motion, and others have their types bundled, so you shouldn't need more.*

---

### **Step 1: Styling Configuration (Tailwind CSS & Global Styles)**

Next, let's configure styling.

**1. Configure Tailwind CSS:**
Replace the contents of `tailwind.config.ts` with your configuration, adapted for Next.js.

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}', // For pages router if you use it
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', // For components
    './app/**/*.{js,ts,jsx,tsx,mdx}', // For app router
  ],
  theme: {
    extend: {
      // You can copy your theme extensions from your old tailwind.config.js here
    },
  },
  plugins: [
    require('daisyui'), // Ensure daisyUI is included
  ],
  // Add your daisyUI config if you have one
  daisyui: {
    themes: ["light", "dark", "cupcake"], // your themes
  },
}
export default config
```

**2. Configure PostCSS:**
Your `postcss.config.js` file should look like this:

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**3. Set up Global CSS:**
Next.js uses `app/globals.css` by default.
- Copy the entire content from your old `src/index.css` file.
- Paste it into `app/globals.css` in your new project.

---

### **Step 2: New Folder Structure & Static Assets**

Next.js uses a specific folder structure. Let's create it and move your files.

**1. Create Core Directories:**
Inside your project, create a `components` directory for your reusable components and a `lib` directory for helper functions.

```
/
├── app/
├── components/      <-- Create this
├── lib/             <-- Create this
└── public/
```

**2. Move Public Assets:**
- Copy all files from your old `public` directory (`Akib.png`, `favicon.png`, `carCanvas.jpg`, etc.).
- Paste them into the `public` directory of your new Next.js project. These will be served from the root (`/Akib.png`).

**3. Move Other Assets:**
- Copy the entire `assets` directory from your old `src/` folder.
- Paste it into a new `assets` directory at the root of your new project, or inside the `app` folder, for better organization. Let's place it at the root for now.

---

### **Step 3: Create the Root Layout**

The root layout is the main shell of your application, replacing your old `Root/Main.jsx` and `index.html`.

**1. Edit `app/layout.tsx`:**
This file is mandatory and defines the global layout.

```typescript
// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css' // Your global styles
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ishak Qureshee Akib - Portfolio',
  description: 'The personal portfolio of Ishak Qureshee Akib, showcasing projects and skills.',
}

export default function RootLayout({
  children,
}: { children: React.ReactNode })
{
  return (
    <html lang="en" data-theme="cupcake"> {/* Set a default theme for DaisyUI */}
      <body className={inter.className}>
        {/*
          Your old project had an InitialLoading component. 
          You can implement a similar concept here using a client component
          and React's Suspense for a better loading experience.
        */}
        
        {/* The Navbar and Footer will be added here in a later step */}
        
        <main>{children}</main>
        
        <ToastContainer /> {/* For react-toastify notifications */}
      </body>
    </html>
  )
}
```
*Note: We will add the Navbar and Footer to this file later once we migrate them.*

---

### **Step 4: Migrate Components & Handle "use client"**

This is the most critical part. By default, all components in the Next.js App Router are **Server Components**. Interactive components that use hooks (`useState`, `useEffect`) or browser APIs must be explicitly marked as **Client Components**.

**1. Move and Convert Components:**
- Take all component folders from your old `src/Components` (`Navbar`, `Footer`, `Heading`, `InitialLoading`).
- Place them inside the new `components` directory.
- **Rename all `.jsx` files to `.tsx`**.
- **Go through each file and add ` "use client"; ` to the very top if it's interactive.**

**Example: Migrating the Navbar**
Your navbar is interactive (handles clicks, state changes).

```typescript
// components/Navbar/Navbar.tsx
"use client"; // <-- CRITICAL: This makes it a Client Component

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link'; // Use Next.js link for page navigation
import { usePathname } from 'next/navigation'; // Hook to check the current path
// ... import other dependencies like icons

// Define props with TypeScript
interface NavbarProps {
  // Add any props your Navbar might need
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Your existing navbar logic for state, effects, etc.

  return (
    <nav>
      {/* For same-page scroll links on the homepage */}
      {pathname === '/' ? (
        <ScrollLink to="projects" smooth={true} duration={500}>
          Projects
        </ScrollLink>
      ) : (
        // For navigation to other pages or back to home
        <Link href="/#projects">
          Projects
        </Link>
      )}

      {/* Your other nav links */}
    </nav>
  );
};

export default Navbar;
```

**Which components need `"use client"`?**
Based on your old project, these will **definitely** need it:
- `Navbar.tsx` (state, events, scroll listeners)
- `InitialLoading.tsx` (animations, effects)
- `Banner.jsx` (if it has client-side animations)
- `ContactUs.tsx` (form handling, state, EmailJS)
- `MySkills.tsx`, `Projects.tsx`, etc. if they use Framer Motion or GSAP for animations.
- Any component using `useState`, `useEffect`, `onClick`, or other browser-based hooks/events.

**2. Update the Root Layout with Navbar and Footer:**
Now, import and add your newly migrated `Navbar` and `Footer` to the `layout.tsx`.

```typescript
// app/layout.tsx
import Navbar from '@/components/Navbar/Navbar'; // Use @ as a path alias for root
import Footer from '@/components/Footer/Footer';
// ... other imports

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
```
*Note: You may need to configure path aliases (`@/*`) in your `tsconfig.json` for this to work, Next.js usually sets this up by default.*

---

### **Step 5: Migrate Pages (Routes)**

Now, convert your old "Pages" into Next.js routes.

**1. Create the Homepage:**
- Move the contents of `src/Pages/Home/Home.jsx` into `app/page.tsx`.
- Your `Home.jsx` was likely a container for other components (`Banner`, `MySkills`, etc.). You will do the same here.
- Move and convert all sub-sections of Home (`Banner`, `MySkills`, `Projects`, etc.) into the `components` directory and rename them to `.tsx`.

```typescript
// app/page.tsx
import Banner from '@/components/Banner/Banner';
import MySkills from '@/components/MySkills/MySkills';
import Projects from '@/components/Projects/Projects';
import Experiences from '@/components/Experiences/Experiences';
import Education from '@/components/Education/Education';
import ContactUs from '@/components/ContactUs/ContactUs';

export default function HomePage() {
  return (
    <div>
      <Banner />
      <MySkills />
      <Projects />
      <Experiences />
      <Education />
      <ContactUs />
    </div>
  );
}
```

**2. Create the About Page:**
- Create a new folder `app/about`.
- Inside it, create a file named `page.tsx`.
- Copy the content from your old `src/Pages/About/About.jsx` into `app/about/page.tsx`.
- Remember to convert to `.tsx` and add `"use client";` if it has interactive elements.

---

### **Step 6: Handling Animations (GSAP & Framer Motion)**

Animations that manipulate the DOM must only run on the client.

**1. Ensure `"use client"`:** Any component using these libraries must have the directive.

**2. Use `useEffect` for DOM Manipulation:** For libraries like GSAP that directly interact with the DOM, wrap the logic in a `useEffect` hook with an empty dependency array to ensure it runs only after the component has mounted on the client.

**Example with GSAP:**

```typescript
// components/AnimatedTitle.tsx
"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedTitle = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    // This code only runs on the client, after the component has mounted
    gsap.from(titleRef.current, { 
      duration: 1, 
      y: -50, 
      opacity: 0,
      ease: 'power3.out'
    });
  }, []); // Empty dependency array ensures it runs only once

  return <h1 ref={titleRef}>My Animated Title</h1>;
};

export default AnimatedTitle;
```

---

### **Step 7: Refactor the Contact Form (API Route)**

While you *can* use EmailJS on the client-side (with `"use client"`), the recommended and more secure Next.js pattern is to use an API Route. This hides your EmailJS credentials on the server.

**1. Create the API Route:**
- Create the folder path `app/api/send-email`.
- Inside, create a file named `route.ts`.

```typescript
// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import emailjs from '@emailjs/browser';

// This is just a placeholder to show how to use environment variables.
// You should use a proper email service SDK like Resend or SendGrid in a real app
// as emailjs-browser is not meant for backend use.
// For the purpose of migration, we'll call the browser SDK from the backend,
// but it's not ideal.
// A better approach is to use a library like 'nodemailer'.

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // IMPORTANT: This is a conceptual example. 
    // The 'emailjs' browser package won't work in Node.js environment.
    // You should switch to a server-side email library like Nodemailer or Resend.
    // Let's assume we are using a server-side library.
    
    // --- PSEUDO-CODE for a server-side email library ---
    // const emailData = {
    //   from: 'your-email@example.com',
    //   to: 'your-portfolio-inbox@example.com',
    //   subject: `New message from ${name}`,
    //   text: `From: ${email}\n\n${message}`,
    // };
    // await sendEmail(emailData); 
    // --- END PSEUDO-CODE ---

    console.log("Received data. In a real app, an email would be sent here.", { name, email, message });

    // Let's pretend the email was sent successfully.
    return NextResponse.json({ success: true, message: 'Email sent successfully!' });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Failed to send email.' }, { status: 500 });
  }
}
```

**2. Update Your Contact Form Component:**
Now, update `ContactUs.tsx` to call this new API endpoint.

```typescript
// components/ContactUs.tsx
"use client";

import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred.');
    }
  };
  
  // ... your form JSX and onChange handlers
  return (
    <form onSubmit={handleSubmit}>
      {/* Form inputs */}
    </form>
  )
};

export default ContactUs;
```

---

### **Step 8: Use the Next.js Image Component**

For performance, replace all `<img>` tags with `next/image`.

**Before:**
`<img src="/Akib.png" alt="photo of Akib" />`

**After:**
- Import the `Image` component: `import Image from 'next/image';`
- Import the image file itself.
- Use the component:

```typescript
import Image from 'next/image';
import akibPhoto from '.../public/Akib.png'; // Adjust path

<Image
  src={akibPhoto}
  alt="photo of Akib"
  width={500} // Add original image width
  height={500} // Add original image height
  placeholder="blur" // Optional: adds a nice blur-up effect
  quality={80} // Optional: adjust image quality
/>
```

---

### **Step 9: Finalization**

1.  **Run the Dev Server:** Start your project with `npm run dev`.
2.  **Check for Errors:** Open the browser console and the terminal. Next.js will provide detailed errors if a component that needs to be a client component isn't marked, or if you're using browser APIs on the server.
3.  **Test Everything:** Click through all pages, test all animations, and submit the contact form to ensure everything works as expected.

This detailed guide should provide you with a clear path to successfully migrate your project to a modern, high-performance Next.js application.
