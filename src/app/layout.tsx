import type { Metadata } from "next";
import "./globals.css";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Photoruum test",
  description: "Adesanoye's Assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
          <div className={kanit.className}>{children}</div>
      </body>
    </html>
  );
}
