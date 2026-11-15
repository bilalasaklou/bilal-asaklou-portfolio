import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bilal Asaklou | AI Researcher',
  description: 'Academic portfolio of Bilal Asaklou — Artificial Intelligence, biomedical data science, bioinformatics and multi-omics.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
