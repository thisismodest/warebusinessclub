import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

import styles from "./layout.module.css";
import Link from "next/link";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Ware Business Club",
  description: "An exclusive club for Ware business owners",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-BE5837SESR" />
      <body className={roboto.className}>
        <nav className={styles.nav}>
          <div className={styles["nav-inner-wrapper"]}>
            <p className={styles.logo}><Link href="/">Ware Business Club</Link></p>
            <ul>
              <li><a href="mailto:businessclub@modestindustries.co">Contact</a></li>
              <li><Link href="/login/">Login</Link></li>
            </ul>
          </div>
        </nav>
        <main className={styles.main}>
          {children}

        </main >
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
