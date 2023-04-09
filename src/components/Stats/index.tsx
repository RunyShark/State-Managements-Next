import { StatsProvider } from '@/context';
import { CardStats } from './CardStats';
import { Add } from './Add';
import Rxjs from '../Rxjs';

export const Stats = () => {
  return (
    <StatsProvider>
      <Rxjs />
      <CardStats />
      <Add />
    </StatsProvider>
  );
};
