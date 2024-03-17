import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dell Wireframe Interview",
  description: "By: Hank Metzger",
};

/**
 * This is the root layout that will be used for every page in the app.
 * @param children {React.ReactNode}
 * @returns {React.ReactElement}
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto mt-6">
          <nav className="mb-3 border-b-2 ">
            <ul className="flex">
              <li className="mr-6">
                <Link href="/page1">Page One</Link>
              </li>
              <li className="mr-6">
                <Link href="/page2">Page Two</Link>
              </li>
              <li className="mr-6">
                <Link href="/page3">Page Three</Link>
              </li>
            </ul>
          </nav>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
