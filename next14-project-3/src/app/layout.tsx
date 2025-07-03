import './globals.css';

export const metadata = {
  title: 'Dashboard App',
  description: 'A Next.js dashboard application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}