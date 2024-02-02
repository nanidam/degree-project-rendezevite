import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./utils/components/Providers";
import HamburgerMenu from "./utils/components/hamburgerMenu";
import RendezEviteLogo from "./utils/components/rendezEviteLogo";
import Footer from "./utils/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HamburgerMenu />
        <RendezEviteLogo />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}

// TODO: Metataggar
