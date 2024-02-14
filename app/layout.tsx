import '@/asset/global.css';
import { Noto_Sans_Thai } from "next/font/google";
import DashBoardLayout from '@/layout/DashboardLayout';

export const metadata = {
  title: 'My-UI',
  description:
    'This is my ui component',
  // metadataBase: new URL('https://nextgram.vercel.app'),
};

const notoSansFont = Noto_Sans_Thai({
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-notoSans',
  fallback: ['Helvetica', 'sans-serif'],
  subsets: ['latin'],
})

export default function RootLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${notoSansFont.variable}`}>
      <body className="font-noto-sans">
        <DashBoardLayout>
          {props.children}
        </DashBoardLayout>
      </body>
    </html>
  );
}