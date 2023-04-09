import { accionControl } from '@/services';
import { useState } from 'react';

type TTheme = 'bg-slate-800' | 'bg-slate-600';

export const useTheme = () => {
  const [theme, setTheme] = useState<TTheme>('bg-slate-800');
  const subAccionControl$ = accionControl.getAccionControl;

  subAccionControl$.subscribe((data) =>
    setTheme(data ? 'bg-slate-600' : 'bg-slate-800')
  );

  return { theme };
};
