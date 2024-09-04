import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

import styles from "./layout.module.css";
import Link from "next/link";

import { auth } from "@/auth";
import { SignOut } from "./components/auth/signout-button";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Ware Business Club",
  description: "An exclusive club for Ware business owners",
  icons: {
    icon: '/favicon.png',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth();

  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-BE5837SESR" />
      <body className={roboto.className}>
        {/* Navigation */}
        <nav className={styles.nav}>
          <div className={styles["nav-inner-wrapper"]}>
            <p className={styles.logo}><Link href="/">Ware Business Club</Link></p>
            <ul>
              {
                session ?
                  <>
                    <li><Link href="/dashboard/">Dashboard</Link></li>
                    <li><Link href="/profile/">{session.user?.name || "My account"}</Link></li>
                    <li><SignOut /></li>
                  </>
                  :
                  <>
                    <li><a href="mailto:businessclub@modestindustries.co">Contact</a></li>
                    <li><Link href="/login/">Login</Link></li>
                  </>
              }
            </ul>
          </div>
        </nav>

        {/* Main content */}
        <main className={styles.main}>
          {children}
        </main >

        {/* Footer */}
        <footer className={styles.footer}>
          <p>© 2024 Ware Business Club</p>
          <p style={{ marginTop: "0.1rem" }}>
            <a href="https://modestindustries.co/" target="_blank" title="Lovingly made by Modest Industries">A Modest Initiative <small>♥</small></a>
          </p>
        </footer>
      </body>
    </html>
  );
}
