import "@/asset/global.css";
import { Noto_Sans_Thai } from "next/font/google";
import DashBoardLayout from "@/layout/DashboardLayout";
import { ThemeProvider } from "@/providers/theme";
import { NextAuthProvider } from "@/providers/authorization";

export const metadata = {
  title: "My-UI",
  description: "This is my ui component",
  // metadataBase: new URL('https://nextgram.vercel.app'),
};

const notoSansFont = Noto_Sans_Thai({
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-notoSans",
  fallback: ["Helvetica", "sans-serif"],
  subsets: ["latin"],
});

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {/* <NextAuthProvider> */}
      <DashBoardLayout>{props.children}</DashBoardLayout>
      {/* </NextAuthProvider> */}
    </ThemeProvider>
  );
}
