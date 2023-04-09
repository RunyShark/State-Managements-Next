import {
  ForwardRefExoticComponent,
  RefAttributes,
  createContext,
  useContext,
  SVGProps,
} from 'react';

export interface Istats {
  id: number | string;
  name: string;
  stat: string;
  icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
  change: string;
  changeType: string;
}

interface IStatsContext {
  stats: Istats[];
  addStats: (payload: Istats) => void;
  classNames: (...classes: string[]) => string;
}

export const StatsContext = createContext({} as IStatsContext);

export const useStatsContext = () => {
  const context = useContext(StatsContext);
  if (context === undefined) throw new Error('context undefined');
  return context;
};
