import "@/asset/global.css";
import DashBoardLayout from "@/layout/DashboardLayout";
import { ThemeProvider } from "@/providers/theme";
import { NextAuthProvider } from "@/providers/authorization";

export const metadata = {
  title: "My-UI",
  description: "This is my ui component",
  // metadataBase: new URL('https://nextgram.vercel.app'),
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {/* <NextAuthProvider> */}
      <DashBoardLayout>{props.children}</DashBoardLayout>
      {/* </NextAuthProvider> */}
    </ThemeProvider>
  );
}
