import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Copper Pipes — Independent Sounds",
  description:
    "Copper Pipes — независимый музыкальный лейбл, каталог артистов, релизов, радио и трансляций.",
  icons: {
    icon: "/copper-pipes-icon.png",
    shortcut: "/copper-pipes-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
