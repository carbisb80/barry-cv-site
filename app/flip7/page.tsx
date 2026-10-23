import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flip 7 | Scorekeeper',
  description: 'Keep score for game night: players, round history and running totals for Flip 7.',
};

export default function Flip7Page() {
  return <iframe src="/flip7.html" title="Flip 7 scorekeeper" style={{ width: '100%', height: '100dvh', border: 0, display: 'block' }} />;
}
