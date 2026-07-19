import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Perfect Union | Official Band Website",
  description: "Perfect Union is a Los Angeles rock band built on loud guitars, honest songwriting, and real performances.",
  metadataBase: new URL("https://perfectuniontheband.com"),
  icons: { icon: "/assets/favicon.png", shortcut: "/assets/favicon.png" },
  openGraph: { title: "Perfect Union — All or Nothing", description: "Los Angeles rock. Loud, honest, no filler.", type: "website", images: [{ url: "/og.png", width: 1792, height: 1024, alt: "Perfect Union — All or Nothing" }] },
  twitter: { card: "summary_large_image", title: "Perfect Union — All or Nothing", description: "Los Angeles rock. Loud, honest, no filler.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
