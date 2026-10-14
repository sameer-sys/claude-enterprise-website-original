import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Claude Enterprise Pro & OpenWork Cloud | Autonomous AI Assistant',
  description: 'The Official Showcase Website for Claude Enterprise Pro and OpenWork Cloud. 3-in-1 AI Workspace across Web, Desktop, and Mobile.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#1c1b18] text-[#ece9e2] min-h-screen">
        {children}
      </body>
    </html>
  );
}
