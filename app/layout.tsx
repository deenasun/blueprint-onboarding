import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { AppContextProvider } from '@/components/AppContext';
import NavBar from '@/components/NavBar';

// font definitions
const poppins = Poppins({
  variable: '--font-poppins',
  display: 'swap',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

// site metadata - what shows up on embeds
export const metadata: Metadata = {
  title: 'Project Name',
  description: 'Description of project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
