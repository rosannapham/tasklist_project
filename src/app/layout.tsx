import type { Metadata } from "next";
import clsx from "clsx";

import { inter } from "@/utils/fonts";
import { Providers } from "./providers";

import "@radix-ui/themes/styles.css";
import "@/styles/colours.css";
import "@/styles/themes.css";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
export const metadata: Metadata = {
  title: "Next.js + Radix Themes",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html
    lang="en"
    className={clsx(inter.className, inter.variable)}
    suppressHydrationWarning
  >
    <body>
      <Providers>{children}</Providers>
      <Toaster position="bottom-center" />
    </body>
  </html>
);

export default RootLayout;
