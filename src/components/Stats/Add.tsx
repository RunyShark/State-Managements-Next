import React from 'react';
import { useStatsContext } from '@/context';
import { EnvelopeOpenIcon } from '@heroicons/react/24/outline';
import { v4 } from 'uuid';

export const Add = () => {
  const { addStats } = useStatsContext();

  const onClick = () =>
    addStats({
      id: v4(),
      name: 'Avg. Open Rate',
      stat: '58.16%',
      icon: EnvelopeOpenIcon,
      change: '5.4%',
      changeType: 'increase',
    });

  return (
    <div className="mt-5">
      <button
        type="button"
        className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        onClick={onClick}
      >
        Add
      </button>
    </div>
  );
};
