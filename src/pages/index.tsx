import { Inter } from 'next/font/google';
import { Auth, GridLists, Stats } from '@/components';
import { useTheme } from '@/hook';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { theme } = useTheme();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${theme}`}
    >
      <div>
        <Auth />
        <Stats />
        <GridLists />
      </div>
    </main>
  );
}
