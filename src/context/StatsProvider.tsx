import React, { FC, ReactElement, useState } from 'react';
import { Istats, StatsContext } from './StatsContext';

import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

const stats: Istats[] = [
  {
    id: 1,
    name: 'Total Subscribers',
    stat: '71,897',
    icon: UsersIcon,
    change: '122',
    changeType: 'increase',
  },
  {
    id: 2,
    name: 'Avg. Open Rate',
    stat: '58.16%',
    icon: EnvelopeOpenIcon,
    change: '5.4%',
    changeType: 'increase',
  },
  {
    id: 3,
    name: 'Avg. Click Rate',
    stat: '24.57%',
    icon: CursorArrowRaysIcon,
    change: '3.2%',
    changeType: 'decrease',
  },
];

interface IINITIAL_STATE_STATS {
  stats: Istats[];
}

const INITIAL_STATE_STATS: IINITIAL_STATE_STATS = {
  stats,
};

interface IStatsProvider {
  children: ReactElement | ReactElement[];
}

export const StatsProvider: FC<IStatsProvider> = ({ children }) => {
  const [state, setState] = useState<IINITIAL_STATE_STATS>(INITIAL_STATE_STATS);

  const addStats = (payload: Istats) =>
    setState({
      ...state,
      stats: [...state.stats, payload],
    });

  const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ');
  };
  return (
    <StatsContext.Provider
      value={{
        ...state,
        addStats,
        classNames,
      }}
    >
      <div className="gap-5 border-8 border-sky-500">
        <h1 className="text-center text-4xl text-white">Context</h1>

        {children}
      </div>
    </StatsContext.Provider>
  );
};
