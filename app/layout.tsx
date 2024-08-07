import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./utils/components/Providers";
import HamburgerMenu from "./utils/components/hamburgerMenu";
import RendezEviteLogo from "./utils/components/rendezEviteLogo";
import Footer from "./utils/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rendez Evite",
  description:
    "Let Rendez Evite help you with your next event! Create stunning, personalized invites effortlessly and send them digitally, saving time and paper. Unleash the power of seamless event coordination with Rendez Evite – your go-to solution for modern, eco-friendly invitations that make every occasion memorable.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <RendezEviteLogo />
          <main>
            <HamburgerMenu />
            {children}
          </main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
