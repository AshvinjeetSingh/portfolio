import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/Providers/theme-provider"
import localFont from 'next/font/local'
import styles from "./fonts.module.scss"


const osbourne = localFont({
  src: [
    {
      path: '../../public/Fonts/OsbournePro-Light.woff',
      weight: '300',
      style: 'Black',
    },
    {
      path: '../../public/Fonts/OsbournePro-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/Fonts/OsbournePro-Medium.woff',
      weight: '500',
      style: 'Black',
    },
    {
      path: '../../public/Fonts/OsbournePro-Bold.woff',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../public/Fonts/OsbournePro-Black.woff',
      weight: '900',
      style: 'Black',
    },
  ],
  variable:'--osbourne',
})

const silka = localFont({
  src: [
    {
      path: '../../public/Fonts/silka-regular-webfont.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--silka',
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal Portfolio to showcase my skill and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={silka.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >{children}
        </ThemeProvider>
      </body>
    </html>
  );
}
